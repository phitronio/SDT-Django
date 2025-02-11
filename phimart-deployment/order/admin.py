from django.contrib import admin
from order.models import Cart, CartItem, Order, OrderItem

# Register your models here.


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ['id', 'user']


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'status']


admin.site.register(CartItem)
admin.site.register(OrderItem)
