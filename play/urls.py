from django.conf.urls import url
from . import views

urlpatterns = [
    # /quiz/
    url(r'^$', views.login.as_view()),
    url(r'^quiz_user_id=(?P<user_id>[-\w]+)/$', views.quesList.as_view(), name='questionView'),
    url(r'^lead_user_id=(?P<user_id>[-\w]+)/$', views.leadList.as_view(), name='leadView'),
    url(r'^answer/$', views.answerList.as_view(), name='answerView'),
    url(r'^stats=(?P<user_id>[-\w]+)/$', views.statsView.as_view()),
    url(r'^q_day/$', views.qod.as_view())
]