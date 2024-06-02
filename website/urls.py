from django.conf.urls.i18n import i18n_patterns
from django.contrib import admin
from django.urls import include, path

from home.views import IndexView

urlpatterns = [
    path('__reload__/', include('django_browser_reload.urls')),
]

urlpatterns += i18n_patterns(
    path('admin/', admin.site.urls),
    path('', IndexView.as_view(), name='index'),
    prefix_default_language=False,
)
