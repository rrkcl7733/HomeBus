from django.shortcuts import render


def f(request):
    return render(request, 'Bus/main.html')