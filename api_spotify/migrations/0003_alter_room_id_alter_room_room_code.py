# Generated by Django 5.0.1 on 2024-01-29 16:56

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api_spotify", "0002_rename_room_id_room_id_room_room_code"),
    ]

    operations = [
        migrations.AlterField(
            model_name="room",
            name="id",
            field=models.BigAutoField(
                auto_created=True, primary_key=True, serialize=False, verbose_name="ID"
            ),
        ),
        migrations.AlterField(
            model_name="room",
            name="room_code",
            field=models.CharField(default=0, max_length=6, unique=True),
        ),
    ]
