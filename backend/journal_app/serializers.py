from rest_framework.serializers import ModelSerializer, StringRelatedField
from journal_app.models import Journal

class JournalSerializer(ModelSerializer):
    class Meta:
        model = Journal
        fields = ['id', 'title', 'description', 'date_created', 'user']
        depth = 1

    user = StringRelatedField()