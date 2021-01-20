from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import logging
import logging.config

# Create your views here.

from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import TodoSerializer      # add this
from .models import Todo                     # add this

logging.config.fileConfig('logging.conf')
logger = logging.getLogger('applog')

class TodoView(viewsets.ModelViewSet):       # add this
  serializer_class = TodoSerializer          # add this
  queryset = Todo.objects.all()
  #logger.debug("here???")


@api_view(['POST'])
def todoCreate(request):
  logger.debug(request)
  serializer = TodoSerializer(data=request.data)
  if serializer.is_valid():
      serializer.save()
  return Response(serializer.data)

@api_view(['GET'])
def Overview(request):
  '''
  Returns an over
  '''
  api_urls = {
    'List': 'todo-list',
    'Create' : 'todo-create'
  }


  logger.debug('debug message')
  return Response(api_urls)

@api_view(['GET'])
def todoList(request):
  todo = Todo.objects.all()
  serializer = TodoSerializer(todo, many=True)

  logger.debug('debug list')

  return Response(serializer.data)

