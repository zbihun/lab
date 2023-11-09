from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from zoo import views

router = routers.DefaultRouter()
router.register(r'zoo', views.ZooViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('zoo/', include('zoo.urls')),
]