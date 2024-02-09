from datetime import timedelta

from django.utils import timezone

from .models import SpotifyUserToken


def get_user_tokens(session_id):
    token = SpotifyUserToken.objects.filter(user_session=session_id)
    #returns none if it doesnt exist
    return token.first()

def create_or_update_user_tokens(session_id, access_token, refresh_token, expires_in):
    token = get_user_tokens(session_id)
    expiration_date = timezone.now() + timedelta(seconds=expires_in)

    if token:
        token.access_token = access_token
        token.refresh_token = refresh_token
        token.expires_at = expiration_date
        token.save(update_fields=['access_token','refresh_token', 'expires_at'])
    else:
        token = SpotifyUserToken(
            user_session=session_id,
            access_token=access_token,
            refresh_token=refresh_token,
            expires_at=expiration_date
        )
        token.save()