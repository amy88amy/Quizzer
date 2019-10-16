from django.contrib import admin
from . models import question, user, answer, subject
# Register your models here.

admin.site.register(question)
admin.site.register(user)
admin.site.register(answer)
#admin.site.register(quiz)
admin.site.register(subject)