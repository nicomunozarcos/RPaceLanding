from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .models import RacePost
from .serializers import RacePostSerializer

# Vista básica que renderiza la plantilla HTML de la landing page
def landing_page(request):
    return render(request, 'landing/landing_page.html')

# API para crear y listar RacePosts
class RacePostAPI(ListCreateAPIView):
    queryset = RacePost.objects.all().order_by('-date_posted')
    serializer_class = RacePostSerializer

# Vista básica para el muro social
def posts_page(request):
    posts = RacePost.objects.all().order_by('-date_posted')  # Obtiene todos los posts de la base de datos
    return render(request, 'landing/posts.html', {'posts': posts})  # Renderiza la plantilla con los posts

def login_page(request):
    return render(request, 'landing/login.html')

def signup_page(request):
    return render(request, 'landing/signup.html')