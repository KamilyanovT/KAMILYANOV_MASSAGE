Доброго времени суток! Представляю Вашему вниманию проект по записям на услуги массажа. Здесь можно ознакомиться с услугами, посмотреть фото мастеров, а так же записаться на массаж. Уведомление о записи приходят на наш телеграм бот, после чего мы связываемся с клиентом. Делал этот проект на дальнейшую перспективу (возможно понадобится в будущем). Тогда можно будет и задеплоить его.

Чтобы запустить проект необходимо:
1.склонировать репозиторий
2.создать виртуальное окружение (команда "python -m venv .venv")
3.активировать его (Для Windows: .venv\Scripts\activate), (Для macOS и Linux: source .venv/bin/activate)
4.установить необходимые библиотеки (pip install requirements)
5.загрузить данные с json (сделать dump) (python  manage.py loaddata dump.json)
6.ввести в терминале команду: python manage.py runserver и нажать ctrl+появившийся локальный сервер
готово!