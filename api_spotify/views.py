from django.shortcuts import render
from rest_framework import permissions, viewsets

from.models import Room
from.serializers import RoomSerializer

# Create your views here.

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    permission_classes = [permissions.IsAuthenticated]