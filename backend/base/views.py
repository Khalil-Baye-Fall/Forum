from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken

from django.contrib.auth.models import User
from .serializers import UserSerializer, RegisterSerializer, TopicSerializer, RoomSerializer, MessageSerializer
from .models import Topic, Room, Message



# for login and register page --------------------------    --------------------------------------------------------------  

@api_view(['POST'])
def registration_view(request):
    if request.method == 'POST':
        data = {}
        email = request.data.get('email', '0').lower()
        if validate_email(email) is not None:
            data['error_message'] = 'That email is already in use.'
            return Response(data)

        username = request.data.get('username', '0')
        if validate_username(username) is not None:
            data['error_message'] = 'That username is already in use.'
            return Response(data)

        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            account = serializer.save()
            data['response'] = 'successfully registered new user.'
            data['email'] = account.email
            data['username'] = account.username
            data['pk'] = account.pk
            token = Token.objects.get(user=account).key
            data['token'] = token
        else:
            data = serializer.errors
        return Response(data['response'])


def validate_email(email):
    account = None
    try:
        account = User.objects.get(email=email)
    except User.DoesNotExist:
        return None
    if account is not None:
        return email


def validate_username(username):
    account = None
    try:
        account = User.objects.get(username=username)
    except User.DoesNotExist:
        return None
    if account is not None:
        return username
    
    
# Login page
class CustomAuthToken(ObtainAuthToken):
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'username': user.username,
            'email': user.email
        })
        
# ------------------------------------------------------------------------------------------------- 

# create a room

        
        


# Topic field
class CreateTopicView(APIView):
    def post(self, request):
        topic_serializer = TopicSerializer(data=request.data)
        if topic_serializer.is_valid():
            topic_serializer.save()
            print(topic_serializer)
            return Response(topic_serializer.data, status=status.HTTP_201_CREATED)
        

class TopicList(APIView):
    def get(self, request):
        topics = Topic.objects.all()
        topic_serializer = TopicSerializer(topics, many=True)
        return Response(topic_serializer.data, status=status.HTTP_200_OK)
        