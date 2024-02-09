from django.contrib import admin

from.models import Room, SpotifyUserToken

# Register your models here.

class RoomAdmin(admin.ModelAdmin):
    list_display = ('room_code', 'room_name', 'created', 'updated')
    search_fields = ('room_code', 'room_name')
    list_filter = ('created', 'updated')

class SpotifyUserTokenAdmin(admin.ModelAdmin):
    list_display = ( 'user_session', 'created', 'updated')
    
    list_filter = ('created', 'updated')

admin.site.register(Room, RoomAdmin)
admin.site.register(SpotifyUserToken, SpotifyUserTokenAdmin)