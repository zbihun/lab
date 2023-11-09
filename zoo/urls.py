from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.ZooViewSet.as_view({'get': 'list'})),
]