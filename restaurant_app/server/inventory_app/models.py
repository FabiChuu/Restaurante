from django.db import models
from django.contrib.auth.models import User

# Modelo para los productos del inventario
class Product(models.Model):
    """
    Representa un producto en el inventario.
    """
    # Opciones para la categoría del producto
    CATEGORY_CHOICES = [
        ('ALCOHOL', 'Alcoholes'),
        ('BEBIDA', 'Bebidas'),
        ('COMIDA', 'Comida'),
    ]

    name = models.CharField(max_length=255, verbose_name="Nombre")
    description = models.TextField(blank=True, null=True, verbose_name="Descripción")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Precio")
    quantity = models.IntegerField(default=0, verbose_name="Cantidad")

    # Para simplicidad, usamos una URL para la imagen. Para subir archivos,
    # se usaría ImageField y se configuraría el manejo de archivos multimedia.
    image_url = models.CharField(max_length=2048, blank=True, null=True, verbose_name="URL de la Imagen")

    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES, verbose_name="Categoría")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Creación")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Última Actualización")

    def __str__(self):
        return self.name

# Modelo para extender el usuario de Django con roles
class Profile(models.Model):
    """
    Extiende el modelo de usuario de Django para incluir roles específicos de la aplicación.
    """
    # Opciones para los roles de usuario
    ROLE_CHOICES = [
        ('ADMIN', 'Administrador'),
        ('STAFF', 'Personal'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='STAFF', verbose_name="Rol")

    def __str__(self):
        return f'{self.user.username} - {self.get_role_display()}'
