from django.urls import path
from . import views
from rest_framework import routers                    # add this
from django.urls import path, include                 # add this

router = routers.DefaultRouter()                      # add this
router.register(r'todos', views.TodoView, 'todo')

urlpatterns = [
    #path('', views.Overview, name="todo-overview"),
    #path('list/', views.todoList, name="todo-list"),
    path('create/', views.todoCreate, name="todo-create"),
    path('', include(router.urls)),

]