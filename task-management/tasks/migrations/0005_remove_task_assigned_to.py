# Generated by Django 5.1.4 on 2024-12-30 19:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0004_remove_task_is_completed'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='assigned_to',
        ),
    ]
