from django.urls import path
from tasks.views import manager_dashboard, employee_dashboard, create_task, view_task, update_task, delete_task, task_details, dashboard, Greetings, HiGreetings, HiHowGreetings

urlpatterns = [
    path('manager-dashboard/', manager_dashboard, name="manager-dashboard"),
    path('user-dashboard/', employee_dashboard, name='user-dashboard'),
    path('create-task/', create_task, name='create-task'),
    path('view_task/', view_task),
    path('task/<int:task_id>/details/', task_details, name='task-details'),
    path('update-task/<int:id>/', update_task, name='update-task'),
    path('delete-task/<int:id>/', delete_task, name='delete-task'),
    path('dashboard', dashboard, name='dashboard'),
    path('greetings/', HiHowGreetings.as_view(greetings='Hi Good Day!'), name='greetings')
]
