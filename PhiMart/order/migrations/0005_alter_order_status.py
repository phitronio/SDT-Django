# Generated by Django 5.1.5 on 2025-02-03 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0004_alter_cartitem_quantity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('Not Paid', 'Not Paid'), ('Ready To Ship', 'Ready To Ship'), ('Shipped', 'Shipped'), ('Delivered', 'Delivered'), ('Canceled', 'Canceled')], default='Not Paid', max_length=20),
        ),
    ]
