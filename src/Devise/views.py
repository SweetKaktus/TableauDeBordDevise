from django.shortcuts import render

import api

# Create your views here.
def dashboard(request):
    days, rates = api.get_rates(currencies=['USD'], days=30)
    context = {
        'data': rates['USD'],
        'days_labels': days
    }
    return render(request, 'Devise/index.html', context=context)