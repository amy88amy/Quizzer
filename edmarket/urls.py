from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic.base import TemplateView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', TemplateView.as_view(template_name='/home/amruta/Desktop/EdmodoR/edmarket/templates/login.html')),
    #url(r'^$', include('play.urls', namespace='login', app_name='login')),
    url(r'^home/', include('play.urls')),
    url(r'^quiz/', include('play.urls')),
    url(r'^lead/', include('play.urls')),
]
