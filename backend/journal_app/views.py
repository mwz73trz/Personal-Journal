from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from journal_app.serializers import JournalSerializer
from journal_app.models import Journal

class JounalViewSet(ModelViewSet):
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer
