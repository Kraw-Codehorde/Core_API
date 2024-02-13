from rest_framework import serializers

from .models import Room, SpotifyUserToken


class RoomSerializer(serializers.ModelSerializer):
    room_code = serializers.CharField(read_only=True)
    room_owner = serializers.PrimaryKeyRelatedField(queryset=SpotifyUserToken.objects.all())
    class Meta:
        model = Room
        fields = ['id', 'room_code', 'room_name', 'created', 'updated', 'room_owner']