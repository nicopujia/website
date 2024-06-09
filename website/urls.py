from django.conf import settings
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from portfolio.views import ProjectDetailView, ProjectListView

from .views import AboutView, ContactView, HomeView

urlpatterns = [
    path('__reload__/', include('django_browser_reload.urls')),
]

urlpatterns += i18n_patterns(
    path('admin/', admin.site.urls),
    path('', HomeView.as_view(), name='home'),
    path('about', AboutView.as_view(), name='about'),
    path('contact', ContactView.as_view(), name='contact'),
    path('portfolio/', ProjectListView.as_view(), name='portfolio'),
    path('portfolio/<slug:slug>/', ProjectDetailView.as_view(), name='project'),
    prefix_default_language=False,
)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)