from django.urls import path, include

urlpatterns = [
    path('products/', include('product.product_urls')),
    path('categories/', include('product.category_urls'))
]
