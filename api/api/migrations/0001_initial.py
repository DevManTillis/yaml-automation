# Generated by Django 2.2 on 2020-09-10 07:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(max_length=70)),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('role_url', models.URLField()),
                ('project_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Project')),
            ],
        ),
        migrations.CreateModel(
            name='Playbook',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('json_playbook', models.CharField(max_length=255)),
                ('project_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Project')),
            ],
        ),
        migrations.CreateModel(
            name='Output',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('json_output', models.CharField(max_length=255)),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('status', models.CharField(max_length=10)),
                ('project_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Project')),
            ],
        ),
        migrations.CreateModel(
            name='Host',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('project_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Project')),
            ],
        ),
        migrations.CreateModel(
            name='Command',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('arguments', models.CharField(max_length=190)),
                ('project_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='proj_id', to='api.Project')),
            ],
        ),
        migrations.CreateModel(
            name='AnsibleConfiguration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('json_config', models.CharField(max_length=120)),
                ('project_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Project')),
            ],
        ),
    ]
