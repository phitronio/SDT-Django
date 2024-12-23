from django import forms
import re
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class RegisterForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name',
                  'password1', 'password2', 'email']

    def __init__(self, *args, **kwargs):
        super(UserCreationForm, self).__init__(*args, **kwargs)

        for fieldname in ['username', 'password1', 'password2']:
            self.fields[fieldname].help_text = None


class CustomRegistrationForm(forms.ModelForm):
    password1 = forms.CharField(widget=forms.PasswordInput)
    confirm_password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name',
                  'password1', 'confirm_password', 'email']

        def clean_password1(self):
            password1 = self.cleaned_data.get('password1')

            if len(password1) < 8:
                raise forms.ValidationError(
                    'Password must be at least 8 character long')

            elif re.fullmatch(r'[A-Za-z0-9@#$%^&+=]{8,}', password1):
                raise forms.ValidationError(
                    "Password must include Uppercas, lowercase, number & special character")
