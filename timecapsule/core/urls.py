from django.urls import path
from .views import MessageListCreateView, RegisterView, LoginView, MessageDetailView


urlpatterns = [
    path('messages/', MessageListCreateView.as_view(), name='messages'),
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('messages/<int:pk>/', MessageDetailView.as_view()),
]