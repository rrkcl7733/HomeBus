from django.shortcuts import render
import datetime as dt

def f(request):
    now = dt.datetime.now()
    current = now.strftime('mm:ss')
    content = {
        'time' : current,
    }
    return render(request, 'Bus/main.html', content)