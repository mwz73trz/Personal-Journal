from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import JounalViewSet

router = DefaultRouter()
router.register('journals', JounalViewSet, basename='journal')

urlpatterns = [
    path('', include(router.urls)),
]