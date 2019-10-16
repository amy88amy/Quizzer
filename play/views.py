from django.shortcuts import render, render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from . models import user, question, answer
from django.shortcuts import get_object_or_404
from . serializers import userSerializer, questionSerializer, ansSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from . check import  attempt, find, stats, question_of_the_day


"""class quiz(APIView) :
    def get(request, *args, **kwargs):
        user_id = kwargs.get('user_id', '')
        var = start_quiz(user_id)
        return Response(var)"""
class qod(APIView) :
    def get(request, self) :
        id_q=question_of_the_day()
        print(type(id_q))
        ques_obj = question.objects.filter(ques_id=id_q)
        srl = questionSerializer(ques_obj, many=True)
        response = Response(srl.data)
        response["Access-Control-Allow-Origin"] = "*"
        return response

class quesList(APIView) :
    def get(request, *args, **kwargs) :
        user_id = kwargs.get('user_id', '')
        a = int(user_id)
        print("user_id")
        print(user_id)
        #sub_id, grade pass in find function

        ques_id=find(a)
        #print(type(int(ques_id)))
        q = int(ques_id)
        ques_obj = question.objects.filter(ques_id=q)
        srl = questionSerializer(ques_obj, many=True)
        response = Response(srl.data)
        response["Access-Control-Allow-Origin"] = "*"
        return response
        #template = '/home/suyash/Desktop/EdmodoR/edmarket/templates/quizextend.html'
        #context = {'ques_obj' : ques_obj, 'user_obj' : user_id}
        #return render(request, template , context)

"""
def quesView(request, *args, **kwargs) :
    user_id = kwargs.get('user_id', '')
    user_object = get_object_or_404(user, user_id=user_id)
    ques_obj = question.objects.filter(ques_id=user_object.q_id.ques_id)
    template = '/home/suyash/Desktop/EdmodoR/edmarket/templates/quizextend.html'
"""


class leadList(APIView) :
    def get(self, request, *args, **kwargs) :
        user_id = kwargs.get('user_id', '')
        user_object = user.objects.order_by('rank')[:10]
        srl = userSerializer(user_object, many=True)
        response = Response(srl.data)
        response["Access-Control-Allow-Origin"] = "*"
        return response
        #template = '/home/suyash/Desktop/EdmodoR/edmarket/templates/leadextend.html'
        #context = {'usr' : user_all, 'usr_obj':user_object}
        #return render(request, template, context)

class login(APIView) :
    def post(self, request) :
        if request.method == "POST" :
            username = request.POST.get('username', '')
            password = request.POST.get('password', '')

            request.session['username'] = username
            request.session['password'] = password

        usern = request.session['username']
        passn = request.session['password']

        login_objj = user.objects.filter(username=usern, password=passn)

        srl = userSerializer(login_objj, many=True)
        response = Response(srl.data)
        response["Access-Control-Allow-Origin"] = "*"
        #print (login_objj.first())
        if login_objj.first() is not None :
            return response
        else :
            return HttpResponseRedirect('/invalid/')

    def get(self, request):
        #if request.session['username'] is not None :
            #usern = request.session['username']
            #passn = request.session['password']
            usern = 'Amit Shah'
            passn = 'amit'
            login_objj = user.objects.filter(username=usern, password=passn)
            srl = userSerializer(login_objj, many=True)
            response = Response(srl.data)
            response["Access-Control-Allow-Origin"] = "*"
            return response


class answerList(APIView) :
    """
    def get(self, request) :
        usern = request.session['username']
        user_id = user.objects.filter(username= usern)
        obj = answer.objects.filter(user_id=user_id[0].user_id)
        srl  = ansSerializer(obj, many=True)
        attempt(user_id,obj[0].ques_id,obj[0].is_skipped,obj[0].time_taken,obj[0].answer,100)
        return Response(srl.data)
    """
    def post(self, request) :
        #usern = request.session['username']
        #passn = request.session['password']
        user_id = user.objects.filter(username= 'Amit Shah', password='amit')
        #if request.method == "GET" :
        ans = request.POST.get('answer')
        ques = request.POST.get('ques_id')
        q = int(ques)
        #is_skipped = request.GET.get('ques_id')
        sub = request.GET.get('sub_idd')
        #quizId = request.GET.get('ques_id')
        #timeTaken = request.GET.get('ques_id')
        #print(answer())
        #a = answer(answer_id=11, answer=ans, is_skipped=1, time_taken=5.0, ques_id=1000, quiz_id=100, subject_id=1, user_id=user_id.first())
        #a.save()
        #obj = answer.objects.filter(user_id=user_id[0].user_id)
        #srl  = ansSerializer(obj, many=True)
        #attempt(user_id,obj[0].ques_id,obj[0].is_skipped,obj[0].time_taken,obj[0].answer,100)
        attempt(user_id.first().user_id, q, 1, 5, ans,sub)
        response = Response(1)
        response["Access-Control-Allow-Origin"] = "*"
        #return Response(srl.data)
        return response

class statsView(APIView) :
    def get(request, *args, **kwargs) :
        user_id = kwargs.get('user_id', '')
        u = int(user_id)
        stats(id=u, sub_id=1)
        #return render_to_response('/home/amruta/Desktop/EdmodoR/edmarket/templates/stats.html')
        #print (type(st))
        with open('stats.csv', 'r') as alpha :
            response = HttpResponse(alpha, content_type='application/force-download')
            response['Content-Disposition'] = 'attachment; filename=%s' % 'stats.csv'
            response['X-Sendfile'] = '/home/amruta/Desktop/EdmodoR/edmarket/templates/'
        return response