from django.shortcuts import render
from rest_framework import permissions, viewsets
from rest_framework.response import Response

from.models import Room
from.serializers import RoomSerializer

# Create your views here.

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
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
             serializer.save()
        except Exception as e:
             return Response(serializer.errors, status=400)
        return Response(serializer.data, status=201)
        # return super().create(request, *args, **kwargs)
    
    def update(self, request, *args, **kwargs):
            return super().update(request, *args, **kwargs)
    
    def partial_update(self, request, *args, **kwargs):
         return super().partial_update(request, *args, **kwargs)
    
    def destroy(self, request, *args, **kwargs):
         return super().destroy(request, *args, **kwargs)