# Generated by Django 5.0.1 on 2024-01-24 20:44

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("projects", "0002_alter_project_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="project",
            name="image",
            field=models.ImageField(null=True, upload_to="projects"),
        ),
    ]
