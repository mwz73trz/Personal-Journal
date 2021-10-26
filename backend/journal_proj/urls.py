from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('journal_app.urls')),
    path('login/', include('journal_auth.urls')),
]
