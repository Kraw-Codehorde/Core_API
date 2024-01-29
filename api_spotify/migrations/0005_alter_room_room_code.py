# Generated by Django 5.0.1 on 2024-01-29 17:24

import django.utils.crypto
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api_spotify", "0004_alter_room_room_code"),
    ]

    operations = [
        migrations.AlterField(
            model_name="room",
            name="room_code",
            field=models.CharField(
                default=django.utils.crypto.get_random_string, max_length=6, unique=True
            ),
        ),
    ]