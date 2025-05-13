from django.shortcuts import redirect, render
from django.contrib.auth.views import LoginView
from django.contrib.auth import logout
from django.urls import reverse_lazy
from django.views.generic import CreateView
from .forms import RegistrationForm


def logoutView(request):
    logout(request)
    return redirect('auth:login')


class AuthLoginView(LoginView):
    template_name = 'auth/login.html'


class RegisterView(CreateView):
    form_class = RegistrationForm
    template_name = 'auth/register.html'
    success_url = reverse_lazy('auth:login')
    
    def form_valid(self, form):
        response = super().form_valid(form)
     
        return response
