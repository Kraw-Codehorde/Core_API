from datetime import timedelta

from django.utils import timezone
from requests import post

from .credentials import CREDENTIALS_ENCODED
from .models import SpotifyUserToken


def get_user_tokens(session_id):
    token = SpotifyUserToken.objects.filter(user_session=session_id)
    #returns none if it doesnt exist
    return token.first()

def create_or_update_user_tokens(session_id, access_token, refresh_token, expires_in):
    token = get_user_tokens(session_id)
    expiration_date = timezone.now() + timedelta(seconds=expires_in)

    if token:
        print('Updating token session', session_id)
        token.access_token = access_token
        token.refresh_token = refresh_token
        token.expires_at = expiration_date
        token.save(update_fields=['access_token','refresh_token', 'expires_at'])
    else:
        print('Creating token session', session_id)
        token = SpotifyUserToken(
            user_session=session_id,
            access_token=access_token,
            refresh_token=refresh_token,
            expires_at=expiration_date
        )
        token.save()

def refresh_user_tokens(refresh_token):
    """
    Refreshes user tokens.
    """
    headers = {
        'Authorization': 'Basic'+ CREDENTIALS_ENCODED,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    data = {
       'refresh_token': refresh_token,
        'grant_type':'refresh_token'
    }

    response = post(
        'https://accounts.spotify.com/api/token',
        headers=headers,
        data=data
    )

    if response.status_code == 200:
        _data = response.json()
        return _data
    
    raise Exception(f'Error refreshing user tokens: {response.status_code}')

def is_spotify_authenticated(session_id):
    token = get_user_tokens(session_id)

    if token:
        if token.expires_at > timezone.now():
            return True
        else:
            #refresh the tokens
            _data = refresh_user_tokens(token.refresh_token)
            access_token = _data.get('access_token')
            refresh_token = _data.get('refresh_token')
            expires_in = _data.get('expires_in')
            create_or_update_user_tokens(session_id, access_token, refresh_token, expires_in)
            return True
    else:
        return False
    
