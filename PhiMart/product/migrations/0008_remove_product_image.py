# Generated by Django 5.1.5 on 2025-02-07 16:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0007_remove_review_date_review_created_at_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image',
        ),
    ]
