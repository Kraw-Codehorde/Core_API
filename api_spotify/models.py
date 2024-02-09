from django.db import models
from django.utils.crypto import get_random_string

# Create your models here.
    
class SpotifyUserToken(models.Model):
    access_token = models.CharField(max_length=200)
    refresh_token = models.CharField(max_length=200)
    expires_at = models.DateTimeField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    user_session = models.CharField(max_length=100)

class Room(models.Model):
    def generate_random_code():
        return get_random_string(length=6)

    room_code = models.CharField(unique=True, max_length=6, default=generate_random_code)
    room_name = models.CharField(max_length=100)
    # room_capacity = models.IntegerField()
    # room_description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    room_owner = models.ForeignKey(SpotifyUserToken, on_delete=models.CASCADE)
    
  
    
 



