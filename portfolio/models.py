from django.db import models
from django.utils.translation import gettext_lazy as _


def get_project_path(project_instance, filename):
    return f'projects/{project_instance.slug}/{filename}'

class Project(models.Model):
    title = models.CharField(max_length=128)
    slug = models.SlugField(primary_key=True)
    description_en = models.TextField()
    description_es = models.TextField()
    tags = models.CharField(
        help_text='Comma-separated. Example: Python,Flutter,etc',
        max_length=255,
    )
    icon = models.ImageField(upload_to=get_project_path)
    screenshot_1 = models.ImageField(upload_to=get_project_path, blank=True, null=True)
    screenshot_2 = models.ImageField(upload_to=get_project_path, blank=True, null=True)
    screenshot_3 = models.ImageField(upload_to=get_project_path, blank=True, null=True)
    screenshot_4 = models.ImageField(upload_to=get_project_path, blank=True, null=True)
    screenshot_5 = models.ImageField(upload_to=get_project_path, blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    play_store = models.URLField(blank=True, null=True)
    website = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title
