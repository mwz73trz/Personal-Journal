from rest_framework.serializers import ModelSerializer
from journal_app.models import Journal

class JournalSerializer(ModelSerializer):
    class Meta:
        model = Journal
        fields = ['id', 'title', 'description', 'date_created']
        depth = 1
