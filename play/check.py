
"""def start_quiz(u_id):
	start()
	import datetime
	import pandas as pd
	import sqlite3
	import numpy as np
	from sklearn.cluster import KMeans
	file = '/home/shashank/play-app/db.sqlite3'
	cnx = sqlite3.connect(file)
	iz=pd.read_sql_query("SELECT * FROM play_quiz", cnx)
	#print(iz)
	quiz = pd.DataFrame([[3,'AMC-3',datetime.date.today(),u_id]], columns=['quiz_id','quiz_name','quiz_date','user_id_id'])
	zz=iz.append(quiz,ignore_index=True)
	zz.to_sql('play_quiz',cnx, if_exists='replace',index=False)
	return quiz['quiz_id']"""


#It saves all the changed values updates database
def question_of_the_day():
	
	import pandas as pd
	import sqlite3
	import numpy as np
	from sklearn.cluster import KMeans
	file = '/home/amruta/Desktop/EdmodoR/db.sqlite3'
	cnx = sqlite3.connect(file)
	qu=pd.read_sql_query("SELECT * FROM play_question", cnx,index_col=None)

	ds1 = pd.DataFrame()
	ds1['q_id']=qu.ques_id
	ds1['closest_mean']=qu.clusters
	ds1['TCI']=qu.TCI

	a=ds1.TCI.values.max()
	
	a=ds1[ds1.TCI==a].q_id.values
	print(type(a))
	return a


def attempt(u_id,q_id,status,time,option,sub_id):

	import datetime
	import pandas as pd
	import sqlite3
	import numpy as np
	from sklearn.cluster import KMeans

	#from sql import create_engine
	file = '/home/amruta/Desktop/EdmodoR/db.sqlite3'
	cnx = sqlite3.connect(file)

	#retriving tables in dataframe
	ans = pd.read_sql_query("SELECT * FROM play_answer", cnx)
	
	df = pd.read_sql_query("SELECT * FROM play_user", cnx)
	
	qu=pd.read_sql_query("SELECT * FROM play_question", cnx,index_col=None)
	
	#if correctly answered
	if(status==1):
		
		
		qu.loc[qu['ques_id'] == q_id, 'correct']+=1
	
		t=qu.loc[qu['ques_id']==q_id,'time']
		c=qu.loc[qu['ques_id']==q_id,'correct']
		i=qu.loc[qu['ques_id']==q_id,'incorrect']

		p=df.loc[df['user_id']==u_id,'points']
		tci=qu.loc[qu['ques_id'] == q_id, 'TCI']
		
		#if time required 
		if(time<=t.values[0]):
			

			diff=t-time
			h=((tci.values*p.values/100)+p.values+(diff.values/2))
			df.loc[df['user_id']==u_id,'points']=h
			print("points")
			print((tci.values*p.values/100)+p.values+(diff.values/2))

		else:
			diff=time-t
			h=((tci.values*p.values/100)+p.values-(diff/2)).values[0]
			df.loc[df['user_id']==u_id,'points']=h
			print("points")
			print(h)
		k=df.loc[df['user_id']==u_id,'stars'].values[0]
		print(k)
		qu.loc[qu['ques_id']==q_id,'time']=(t*(c+i)+time)/(c+i)
		if((h/1000)>k):
			df.loc[df['user_id']==u_id,'stars']=int(h/1000)


	else:
		qu.loc[qu['ques_id'] == q_id, 'incorrect']+=1
	
	df['rank'] = df['points'].rank(ascending=0)
	
	if not hasattr(attempt, "counter"):
		attempt.counter = 1000
	attempt.counter += 1
	
    
	an = pd.DataFrame([[option,attempt.counter,status,q_id,sub_id,time,u_id]],
	columns=['answer','answer_id','is_skipped','ques_id_id','subject_id','time_taken','user_id_id'])
	ass=ans.append(an,ignore_index=True)
	
	

	ass.to_sql('play_answer',cnx, if_exists='replace',index=False)
	df.to_sql('play_user',cnx, if_exists='replace',index=False)
	qu.to_sql('play_question',cnx, if_exists='replace',index=False)



def find(id):
	import datetime
	import pandas as pd
	import sqlite3
	import numpy as np
	from sklearn.cluster import KMeans

	file = '/home/amruta/Desktop/EdmodoR/db.sqlite3'
	cnx = sqlite3.connect(file)
	ans = pd.read_sql_query("SELECT * FROM play_answer", cnx)
	df = pd.read_sql_query("SELECT * FROM play_user", cnx)
	qu = pd.read_sql_query("SELECT * FROM play_question", cnx)
	print("ansewr Tabel")
	print(ans)
	qu['TCI']=(qu['incorrect']/(qu['correct']+qu['incorrect']))*0.4+qu['time']*0.6
	clmns = ['TCI']


	n_clusters=3
	
	kmeans = KMeans(n_clusters, random_state=0).fit(qu[clmns])
	labels = kmeans.labels_
	print(labels)
	qu['clusters']=labels
	clmns = ['points']


	#Cluster the data
	kmeanss = KMeans(n_clusters, random_state=0).fit(df[clmns])
	labels = kmeanss.labels_

	#Add the column into our list
	
	qu.to_sql('play_question',cnx, if_exists='replace',index=False)
	df.to_sql('play_user',cnx, if_exists='replace',index=False)

	
	c=df.loc[df['user_id']==id,'clusters']
	#print(type(c))
	if(c.values==2):
		a=0
	if(c.values==1):
		a=1
	if(c.values==0):
		a=2
	    
	ds1 = pd.DataFrame()
	ds1['q_id']=qu.ques_id
	ds1['closest_mean']=qu.clusters
	ds1['TCI']=qu.TCI

	ds2 = pd.DataFrame()
	ds2['q_id']=(ans.loc[ans['user_id_id'] == id, 'ques_id_id'])
	print("attempted")
	print(ds2)
	df1=ds1.append(ds2, ignore_index=True)
	df1=df1.drop_duplicates(['q_id'],keep=False)
	print("available")
	print(df1)
	#print(a)
	d=df1[df1.closest_mean==a].TCI.values.min()#min TCI value Question

	k=qu.loc[qu['TCI']==d,'ques_id']
	print(k.values[0])
	

	return k.values[0]
	    
	
def stats(id,sub_id):
	import datetime
	import pandas as pd
	import sqlite3
	import numpy as np
	from sklearn.cluster import KMeans

	file = '/home/amruta/Desktop/EdmodoR/db.sqlite3'

	cnx = sqlite3.connect(file)

	df = pd.read_sql_query("SELECT * FROM play_user", cnx)
	ans = pd.read_sql_query("SELECT * FROM play_answer", cnx)

	cluster_ans=pd.DataFrame()
	cluster_ans['user_id']=ans.user_id_id
	cluster_ans['subject']=ans.subject_id
	cluster_ans['isskipped']=ans.is_skipped

	ann=cluster_ans[cluster_ans.user_id.values==id ].values
	ann=cluster_ans[ cluster_ans.subject.values==sub_id].isskipped.values
	l=ann.shape[0]
	cnt=0
	for x in range(0, l):
	    if(ann[x]==1):
	        cnt=cnt+1
	avg=cnt/l
	avg=avg*100
	sub="maths"
	if(sub_id==2):
		sub="science"
	else:
		sub="English"

	name=df.loc[df['user_id']==id,'username'].values
	print(name)
	import csv
 
	with open('stats.csv', 'wt') as csvfile:
		filewriter = csv.writer(csvfile, delimiter=',',quotechar='|', quoting=csv.QUOTE_MINIMAL)
		filewriter.writerow(['Student_Name','Subject','Stats'])
		filewriter.writerow([name,sub,avg])
	
	#return avg
    
