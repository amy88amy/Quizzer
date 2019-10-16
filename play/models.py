from __future__ import unicode_literals
from django.db import models

class subject(models.Model) :
    sub_id = models.IntegerField(primary_key=True)

    def __str__(self):
        return str(self.sub_id)

class question(models.Model) :
    ques_id = models.AutoField(primary_key=True)
    statement = models.CharField(max_length=500)
    op1 = models.CharField(max_length=300)
    op2 = models.CharField(max_length=300)
    op3 = models.CharField(max_length=300)
    op4 = models.CharField(max_length=300)
    ans = models.CharField(max_length=300)
    correct = models.IntegerField()
    incorrect = models.IntegerField()
    TCI = models.FloatField()
    time = models.FloatField()
    clusters = models.IntegerField()
    subject = models.ForeignKey(subject, on_delete=models.CASCADE, related_name='subUser')
    grade = models.IntegerField()

    def __str__(self):
        return str(self.ques_id)

class user(models.Model) :
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=100)
    stars = models.IntegerField()
    badges = models.IntegerField()
    rank = models.IntegerField()
    clusters = models.IntegerField()
    points = models.IntegerField()

    def __str__(self):
        return str(self.user_id)


class answer(models.Model) :
    answer_id = models.IntegerField(primary_key=True)
    user_id = models.ForeignKey(user, on_delete=models.DO_NOTHING, related_name='ansUserID')
    ques_id = models.ForeignKey(question, on_delete=models.DO_NOTHING, related_name='ansQuesID')
    answer = models.IntegerField()
    is_skipped = models.PositiveSmallIntegerField()
    subject = models.ForeignKey(subject, on_delete=models.DO_NOTHING, related_name='ansSub')
    time_taken = models.FloatField()

    def __str__(self):
        return str(self.answer_id)