# Generated by Django 4.2.4 on 2023-09-17 18:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0004_customuser_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='name',
            field=models.CharField(default=models.CharField(max_length=50, unique=True), max_length=50),
        ),
    ]
