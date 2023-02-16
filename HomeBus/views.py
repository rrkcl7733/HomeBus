from django.shortcuts import render
import datetime as dt


week = ['월', '화', '수', '목', '금', '토', '일']
# waitress-serve --listen=127.0.0.1:8000 HomeBus.wsgi:application
def f(request):
    now = dt.datetime.now()
    current = now.strftime('%Y년 %m월 %d일')
    weekday = now.weekday()
    cnt = 2 if weekday in (5, 6) else 1
    content = {
        'intro': f'오늘은! {current} {week[weekday]}요일 ({"평일" if cnt == 1 else "주말"})',
        '평일': cnt,    # 1 = 평일 / 2 = 주말
    }
    return render(request, 'Bus/main.html', content)