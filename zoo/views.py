from .models import Zoo
from rest_framework import viewsets
from .serializers import ZooSerializer


class ZooViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows zoos to be viewed or edited.
    """
    queryset = Zoo.objects.all()
    serializer_class = ZooSerializer


from django.http import JsonResponse

def test_cors(request):
    response = JsonResponse({'message': 'CORS test successful'})
    response["Access-Control-Allow-Origin"] = "http://localhost:3000"
    return response
