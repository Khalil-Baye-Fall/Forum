from django.urls import path
from .views import *

urlpatterns = [
    
    # login & register users
    path('login/auth/token/', CustomAuthToken.as_view(), name="token-login"),
    path('register/', registration_view, name='register'),
    
    # create Room
    # path('create-room/'),
    
    # create Topic
    path('create-topic/', CreateTopicView.as_view(), name="create-topic"),
    path('topic-list/', TopicList.as_view(), name="topic-list"),
    
    
]