import base64

from django.shortcuts import get_object_or_404, redirect
from requests import Request, get, post
from rest_framework import permissions, status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .credentials import CREDENTIALS_ENCODED, SPOTIFY_APP_ID
from .utils import create_or_update_user_tokens, is_spotify_authenticated

from.models import Room, SpotifyUserToken
from.serializers import RoomSerializer

# Create your views here.

class SpotifyApiLoginView(APIView):
     """
     Returns a login url from Spotify API.
     """
     def get(self, request, format=None):
         scopes = ['user-read-email', 'user-read-private', 'user-read-currently-playing']

         spotify_login_url = Request(
              'GET',
              'https://accounts.spotify.com/authorize',
              params={
                   'scope': scopes,
                    'response_type': 'code',
                    'redirect_uri': 'http://localhost:8000/api/spotify/redirect',
                    'client_id': SPOTIFY_APP_ID,
              }).prepare().url
         
         return Response({'spotify_login_url': spotify_login_url})
     
class IsSpotifyAuthenticated(APIView):
     """
     Checks for user session_id.
     If session exists, checks if a spotify token with that session_id exists.
     If no token exists, returns false.
     Returns true if a token exists.
     """

     def get(self, request, format=None):
          # if not request.session.session_key:
          #      request.session.create()
          print ('session', request.session.session_key)
          session_id = request.session.session_key
          
          return Response({'is_authenticated': is_spotify_authenticated(session_id)},
                          status=status.HTTP_200_OK)



def spotify_callback(request):
     """
     Handles the callback from Spotify API.
     Stores the user's access token in the database.
     """
     code = request.GET.get('code')
     error = request.GET.get('error')

     response = post(
          'https://accounts.spotify.com/api/token',
          params={
               'grant_type': 'authorization_code',
               'code': code,
               'redirect_uri': 'http://localhost:8000/api/spotify/redirect',
          },
          headers={
               'Content-Type': 'application/x-www-form-urlencoded',
               'Authorization': f'Basic {CREDENTIALS_ENCODED}',
          })
     
     #if there's no session associated with a request, create one
     if not request.session.exists(request.session.session_key):
          request.session.create()


     # print (response)
     
     if response.status_code == 200:
          data = response.json()
          session_id = request.session.session_key
          access_token = data.get('access_token')
          refresh_token = data.get('refresh_token')
          expires_in = data.get('expires_in')
          create_or_update_user_tokens(session_id, access_token, refresh_token, expires_in)

          
     return redirect('http://localhost:5173')

class CurrentSpotifySong(APIView):
     def get(self, request, format=None):
          room_code = request.GET.get('room_code')
          print('room_code', room_code)
          try:
               room = Room.objects.get(room_code=room_code)
          
          except Exception as e:
               return Response({'error': 'unexpected error', 'details':str(e)}) #might need to return a different status code.
          
          room_host = room.room_owner

          response = get('https://api.spotify.com/v1/me/player/currently-playing',
                         headers={
                              'Authorization': f'Bearer {room_host.access_token}',
                         })
          
          if response.status_code == 200:
               data = response.json()
               return Response(data)
          if response.status_code > 200 and response.status_code < 300:
               return Response({'error': 'no song is currently playing.'})
          
          return Response({'error': 'there was an error.'}, status=response.status_code)
          


class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    # permission_classes = [permissions.IsAuthenticated]

    
    def retrieve(self, request, *args, **kwargs):
        try:
             room = Room.objects.get(room_code=kwargs['pk'])
             return Response(RoomSerializer(room).data)
        except Exception as e:
             return Response(status=404)
    
    def create(self, request, *args, **kwargs):
        request_data = request.data.copy()
        session_id = request.session.session_key
        request_data['room_owner'] = SpotifyUserToken.objects.get(user_session=session_id).id

        serializer = self.get_serializer(data=request_data)
        
        serializer.is_valid(raise_exception=True)

        try:
             serializer.save()
        except Exception as e:
             return Response({'error': 'there was an error', 'details': str(e)}, status=400)
        return Response(serializer.data, status=201)
        # return super().create(request, *args, **kwargs)
    
    def update(self, request, *args, **kwargs):
            return super().update(request, *args, **kwargs)
    
    def partial_update(self, request, *args, **kwargs):
         return super().partial_update(request, *args, **kwargs)
    
    def destroy(self, request, *args, **kwargs):
         return super().destroy(request, *args, **kwargs)