from django.contrib import admin

from.models import Room, SpotifyUserToken

# Register your models here.

class RoomAdmin(admin.ModelAdmin):
    list_display = ('room_code', 'room_name', 'room_owner', 'created', 'updated')
    search_fields = ('room_code', 'room_name', 'room_owner__username', 'room_owner__email')
    list_filter = ('created', 'updated')

class SpotifyUserTokenAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'created', 'updated')
    search_fields = ('username', 'email')
    list_filter = ('created', 'updated')

admin.site.register(Room, RoomAdmin)
admin.site.register(SpotifyUserToken, SpotifyUserTokenAdmin)