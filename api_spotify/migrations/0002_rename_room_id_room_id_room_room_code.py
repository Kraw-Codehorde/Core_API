# Generated by Django 5.0.1 on 2024-01-29 16:48

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api_spotify", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="room",
            old_name="room_id",
            new_name="id",
        ),
        migrations.AddField(
            model_name="room",
            name="room_code",
            field=models.IntegerField(default=0, unique=True),
        ),
    ]
