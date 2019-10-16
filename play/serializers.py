from rest_framework.serializers import ModelSerializer
from . models import question, user, answer

class questionSerializer(ModelSerializer):
	class Meta:
		model=question
		fields=('ques_id','statement','op1','op2','op3','op4', 'ans', 'correct')

class userSerializer(ModelSerializer):
    class Meta:
        model=user
        fields=('user_id','username','badges','stars', 'rank')

class ansSerializer(ModelSerializer) :
    class Meta:
        model=answer
        #fields=('answer_id', 'user_id', 'ques_id', 'answer', 'is_skipped', 'subject', 'quiz_id', 'time_taken')
        fields='__all__'