"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.views.generic import RedirectView, TemplateView
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework import routers

from api import views
from api_spotify import views as spotify_views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'projects', views.ProjectViewSet)

spotify_router = routers.DefaultRouter()
spotify_router.register(r'rooms', spotify_views.RoomViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='home.html')),
    path('api/', include(router.urls)),
    
    path('api/spotify/', include(spotify_router.urls)),
    path('api/spotify/login', spotify_views.SpotifyApiLoginView.as_view(), name='login'),
    path('api/spotify/redirect', spotify_views.spotify_callback, name='redirect'),
    path('api/spotify/is-authenticated', spotify_views.IsSpotifyAuthenticated.as_view(), name='is_authenticated'),
    path('api/spotify/current-song', spotify_views.CurrentSpotifySong.as_view(), name='current_song'),
    
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view()),
    
]

urlpatterns += router.urls
