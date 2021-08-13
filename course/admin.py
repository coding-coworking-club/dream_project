from django.contrib import admin

from .models import Teacher, Course, CourseEvaluation, Lecture


admin.site.register(Teacher)
admin.site.register(Course)
admin.site.register(CourseEvaluation)
admin.site.register(Lecture)