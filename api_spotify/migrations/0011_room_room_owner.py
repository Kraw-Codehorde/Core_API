# Generated by Django 5.0.1 on 2024-02-08 18:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        (
            "api_spotify",
            "0010_remove_spotifyusertoken_user_spotifyusertoken_email_and_more",
        ),
    ]

    operations = [
        migrations.AddField(
            model_name="room",
            name="room_owner",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to="api_spotify.spotifyusertoken",
            ),
            preserve_default=False,
        ),
    ]
