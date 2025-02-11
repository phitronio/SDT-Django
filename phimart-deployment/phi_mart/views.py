from django.shortcuts import redirect


def api_root_view(request):
    return redirect('api-root')
