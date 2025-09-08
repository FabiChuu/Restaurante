from django.contrib import admin
from .models import Product, Profile

# Register your models here to make them accessible in the Django admin panel.

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'quantity', 'updated_at')
    list_filter = ('category',)
    search_fields = ('name', 'description')

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'get_role_display')
    list_filter = ('role',)
    search_fields = ('user__username',)

    def get_role_display(self, obj):
        return obj.get_role_display()
    get_role_display.short_description = 'Role'
