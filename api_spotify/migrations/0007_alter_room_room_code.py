# Generated by Django 5.0.1 on 2024-01-29 17:34

import api_spotify.models
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api_spotify", "0006_alter_room_room_code"),
    ]

    operations = [
        migrations.AlterField(
            model_name="room",
            name="room_code",
            field=models.CharField(
                default=api_spotify.models.Room.generate_random_code,
                max_length=6,
                unique=True,
            ),
        ),
    ]