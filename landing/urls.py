from django.urls import path
from . import views
from .views import RacePostAPI
from django.shortcuts import render

# Define las rutas de la aplicación landing
urlpatterns = [
    path('', views.landing_page, name='landing_page'),  # URL para la landing page
    path('api/raceposts/', RacePostAPI.as_view(), name='racepost-api'),
    path('posts/', views.posts_page, name='posts'),
    path('login/', views.login_page, name='login'),
    path('signup/', views.signup_page, name='signup'),
]

def posts_page(request):
    return render(request, 'posts.html')
