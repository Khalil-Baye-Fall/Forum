from django.contrib import admin
from .models import Topic, Room, Message


@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ['name']
    
    
@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ['topic', 'name', 'description', 'created', 'updated']
    
    
@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ['room', 'body_msg', 'created', 'updated']