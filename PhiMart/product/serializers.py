from rest_framework import serializers
from decimal import Decimal
from product.models import Category, Product, Review


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'product_count']

    product_count = serializers.IntegerField(read_only=True)


# class ProductSerializer(serializers.Serializer):
#     id = serializers.IntegerField()
#     name = serializers.CharField()
#     unit_price = serializers.DecimalField(
#         max_digits=10, decimal_places=2, source='price')

#     price_with_tax = serializers.SerializerMethodField(
#         method_name='calculate_tax')
#     # category = serializers.PrimaryKeyRelatedField(
#     #     queryset=Category.objects.all()
#     # )
#     # category = serializers.StringRelatedField()
#     # category = CategorySerializer()
#     category = serializers.HyperlinkedRelatedField(
#         queryset=Category.objects.all(),
#         view_name='view-specific-category',
#     )

#     def calculate_tax(self, product):
#         return round(product.price * Decimal(1.1), 2)


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price',
                  'stock', 'category', 'price_with_tax']  # other

    price_with_tax = serializers.SerializerMethodField(
        method_name='calculate_tax')

    def calculate_tax(self, product):
        return round(product.price * Decimal(1.1), 2)

    def validate_price(self, price):
        if price < 0:
            raise serializers.ValidationError('Price could not be negative')
        return price

    # def create(self, validated_data):
    #     product = Product(**validated_data)
    #     product.other = 1
    #     product.save()
    #     return product

    # def validate(self, attrs):
    #     if attrs['password1'] != attrs['password2']:
    #         raise serializers.ValidationError("Password didn't pass")


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'name', 'description']

    def create(self, validated_data):
        product_id = self.context['product_id']
        return Review.objects.create(product_id=product_id, **validated_data)
