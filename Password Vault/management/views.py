from django.http import request
from django.utils.datastructures import MultiValueDict, MultiValueDictKeyError
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Account
from .forms import ManagementCreateForm


class ManagementListView(ListView):
    model = Account
    ordering = ('-id',)
    paginate_by = 6
    context_object_name = 'accounts'

    def get_queryset(self):
        try:
            search = self.request.GET['search']
            return self.model.objects.filter(site_name__icontains=search, user=self.request.user)
        except MultiValueDictKeyError:
            return self.model.objects.filter(user=self.request.user)
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Decrypt passwords for display
        for account in context['accounts']:
            # Add decrypted password as property for use in templates
            account.decrypted_password = account.decrypt_password()
        return context


class ManagementCreateView(CreateView):
    form_class = ManagementCreateForm
    template_name = 'management/create.html'
    
    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


class ManagementUpdateView(UpdateView):
    model = Account
    fields = ['image_site', 'site_name', 'email', 'username', 'password']
    template_name = 'management/update.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update({'img_url': self.get_object().image_site.url})
        return context
    
    def form_valid(self, form):
        # Check if password was changed
        if self.get_object().password != form.cleaned_data['password']:
            # Set flag to indicate password needs re-encryption
            form.instance.password_changed = True
        return super().form_valid(form)
    
    def get_queryset(self):
        # Ensure users can only update their own accounts
        return self.model.objects.filter(user=self.request.user)


class ManagementDeleteView(DeleteView):
    model = Account
    template_name = 'management/delete_confirm.html'
    success_url = reverse_lazy('management:manage')
    
    def get_queryset(self):
        # Ensure users can only delete their own accounts
        return self.model.objects.filter(user=self.request.user)
