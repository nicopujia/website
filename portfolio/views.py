from django.template.defaulttags import register
from django.views.generic import DetailView, ListView

from .models import Project


@register.filter(name='split')
def split(value, key):
    return value.split(key)


class ProjectListView(ListView):
    model = Project
    context_object_name = 'projects'
    template_name = 'portfolio/index.html'


class ProjectDetailView(DetailView):
    model = Project
    context_object_name = 'project'
    template_name = 'portfolio/project.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        project = self.get_object(self.queryset)
        context['description'] = project.__getattribute__(f'description_{self.request.LANGUAGE_CODE.split('-')[0]}')
        context['screenshots'] = [project.__getattribute__(f'screenshot_{i}') for i in range(1, 6)]
        return context
