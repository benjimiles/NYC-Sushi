from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, FoodItem

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'is_staff', 'is_active',)
    list_filter = ('username', 'email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('username', 'email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('username', 'email')
    ordering = ('username',)
@admin.register(FoodItem)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', )  # Fields you want to display
    search_fields = ('name', )  # Fields that can be searched
admin.site.register(CustomUser, CustomUserAdmin)
