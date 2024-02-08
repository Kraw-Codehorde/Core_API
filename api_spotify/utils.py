from .models import SpotifyUserToken


def get_user_tokens(session_id):
    token = SpotifyUserToken.objects.filter(user=session_id)
    #returns none if it doesnt exist
    return token.first()