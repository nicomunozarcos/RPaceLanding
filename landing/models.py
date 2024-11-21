from django.db import models

# Create your models here.
from django.db import models

class RacePost(models.Model):
    title = models.CharField(max_length=100)  # Nombre o descripción breve
    distance = models.DecimalField(max_digits=6, decimal_places=2)  # Distancia en km/millas
    elevation = models.DecimalField(max_digits=6, decimal_places=2)  # Elevación en metros
    description = models.TextField(blank=True, null=True)  # Campo opcional para descripción
    date_posted = models.DateTimeField(auto_now_add=True)  # Fecha de publicación

    def __str__(self):
        return self.title
