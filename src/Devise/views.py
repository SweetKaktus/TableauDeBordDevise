from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def dashboard(request):
    return render(request, 'Devise/index.html', context={'titre': 'Hello there !'})