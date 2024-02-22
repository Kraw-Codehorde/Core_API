from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets
from rest_framework_api_key.permissions import HasAPIKey

from projects.models import Project

from .serializers import GroupSerializer, ProjectSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
   

class ProjectViewSet(viewsets.ModelViewSet):

    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    # permission_classes = [HasAPIKey]

    def get_queryset(self):
        # _, key = self.request.META.get('HTTP_AUTHORIZATION').split("{} ".format('Api-Key'))
        # print(key)
        return super().get_queryset()