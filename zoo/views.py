from django.db.models.functions import Length

from .models import Zoo
from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import ZooSerializer


class ZooViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows zoos to be viewed or edited.
    """
    queryset = Zoo.objects.all()
    serializer_class = ZooSerializer
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()

        min_name_length = request.query_params.get('min_name_length')
        max_name_length = request.query_params.get('max_name_length')
        min_visitors = request.query_params.get('min_visitors')
        max_visitors = request.query_params.get('max_visitors')
        min_animals = request.query_params.get('min_animals')
        max_animals = request.query_params.get('max_animals')

        if min_name_length:
            queryset = queryset.annotate(name_length=Length('name')).filter(name_length__gte=min_name_length)
        if max_name_length:
            queryset = queryset.annotate(name_length=Length('name')).filter(name_length__lte=max_name_length)
        if min_visitors:
            queryset = queryset.filter(visitors__gte=min_visitors)
        if max_visitors:
            queryset = queryset.filter(visitors__lte=max_visitors)
        if min_animals:
            queryset = queryset.filter(animals__gte=min_animals)
        if max_animals:
            queryset = queryset.filter(animals__lte=max_animals)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


from django.http import JsonResponse

def test_cors(request):
    response = JsonResponse({'message': 'CORS test successful'})
    response["Access-Control-Allow-Origin"] = "http://localhost:3000"
    return response
