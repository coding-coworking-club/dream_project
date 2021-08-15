from django.db import models


class Teacher(models.Model):
    name = models.CharField(max_length=30)
    teacher_id = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.teacher_id}: {self.name}"


class Course(models.Model):
    semester = models.CharField(max_length=10, default=None)
    serial_num = models.CharField(max_length=10)
    department = models.CharField(max_length=50, blank=True)
    class_code = models.CharField(max_length=30)
    class_order = models.CharField(max_length=30, blank=True)
    name = models.CharField(max_length=100)
    credit = models.PositiveIntegerField(default=None)
    identification_code = models.CharField(max_length=30)
    half_year = models.CharField(max_length=10)
    required = models.CharField(max_length=10)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    registration_type = models.PositiveIntegerField(default=None)
    time = models.CharField(max_length=150)
    location = models.CharField(max_length=40, blank=True)
    total_num = models.IntegerField(default=0)
    ntu_num = models.IntegerField(default=0)
    external_num = models.IntegerField(default=0)
    constraints = models.CharField(max_length=300, blank=True)
    remark = models.CharField(max_length=300, blank=True)
    class_url = models.URLField(default=None)
    course_introduction = models.TextField(default=None, blank=True)
    course_goal = models.TextField(default=None, blank=True)
    course_requirement = models.TextField(default=None, blank=True)
    course_reading = models.TextField(default=None, blank=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['semester', 'serial_num', 'department'], name='unique course')
        ]

    def __str__(self):
        return f"{self.semester}: {self.name}({self.teacher})"


class CourseEvaluation(models.Model):
    seq = models.PositiveIntegerField(default=None)
    name = models.CharField(max_length=100)
    percentage = models.PositiveIntegerField(default=None)
    description = models.CharField(max_length=300)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.seq}. {self.name}({self.percentage})"


class Lecture(models.Model):
    week = models.CharField(max_length=20)
    date = models.CharField(max_length=10)
    content = models.TextField(default=None)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.week}({self.date}): {self.content}"
