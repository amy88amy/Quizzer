
# coding: utf-8

# In[10]:


import pandas as pd
from scipy import stats
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import numpy as np


# In[11]:


qu = pd.read_csv('question.csv',index_col=False)
df = pd.read_csv('user.csv',index_col=False)
ans = pd.read_csv('answer.csv',index_col=False)
iz=pd.read_csv('quiz.csv',index_col=False)


# In[19]:


qu['TCI']=(qu['incorrect']/(qu['correct']+qu['incorrect']))*0.4+qu['time']*0.6
clmns = ['TCI']


n_clusters=3
#Cluster the data
kmeans = KMeans(n_clusters, random_state=0).fit(qu[clmns])
labels = kmeans.labels_




# In[20]:


cluster_qu=pd.DataFrame()
cluster_qu['TCI']=qu.TCI.values
cluster_qu['cluster']=kmeans.labels_
cluster_qu['closest_mean']=qu.clusters
cluster_qu['ques_id']=qu.ques_id
cluster_qu['time']=qu.time.values
cluster_qu['correct']=qu.time.values
cluster_qu['incorrect']=qu.time.values


# In[21]:


clmns = ['points']


#Cluster the data
kmeanss = KMeans(n_clusters, random_state=0).fit(df[clmns])
labels = kmeanss.labels_

#Add the column into our list
df['rank'] = df['points'].rank(ascending=0).astype(int)



# In[22]:


cluster_map = pd.DataFrame()
cluster_map['points'] = df.points.values
cluster_map['cluster'] = kmeanss.labels_
cluster_map['closest_mean']=df.clusters
cluster_map['user_id']=df.user_id
cluster_map['rank']=df.rank

cluster_ans=pd.DataFrame()
cluster_ans['q_id']=ans.Question_id
cluster_ans['user_id']=ans.user_id




# In[23]:


def find(id):
    
    ans = pd.read_csv('answer.csv',index_col=False)

    cluster_map = pd.DataFrame()
    cluster_map['points'] = df.points.values
    cluster_map['cluster'] = kmeanss.labels_
    cluster_map['closest_mean']=df.clusters
    cluster_map['user_id']=df.user_id
    cluster_map['rank']=df.rank

    cluster_ans=pd.DataFrame()
    cluster_ans['q_id']=ans.Question_id
    cluster_ans['user_id']=ans.user_id
    c=cluster_map[cluster_map.user_id.values==id].closest_mean.values
    #print(c)
    if(c==2):
        a=0;
    if(c==1):
        a=1;
    if(c==0):
        a=2;
    #print cluster_ans
    #print(ans)
    ds1 = pd.DataFrame()
    ds1['q_id']=qu.ques_id
    ds1['closest_mean']=qu.clusters
    ds1['TCI']=qu.TCI
    
    ds2 = pd.DataFrame()
    ds2['q_id']=(ans.loc[ans['user_id'] == id, 'Question_id'])
    #print(ds2)
    df1=ds1.append(ds2, ignore_index=True)
    
    df1=df1.drop_duplicates(['q_id'],keep=False)
    #print(df1)
    d=df1[df1.closest_mean==a].TCI.values.min()#min TCI value Question
    k=cluster_qu[cluster_qu.TCI==d].ques_id.values
    print("Next Question number id")
    print(k)
    return k
    


# In[24]:


def attempt(u_id,q_id,status,time,option,quiz_name):
    ans = pd.read_csv('answer.csv',index_col=False)
    if(status==1):
        qu.loc[qu['ques_id'] == q_id, 'correct']+=1
        t=qu.loc[qu['ques_id']==q_id,'time']
        c=qu.loc[qu['ques_id']==q_id,'correct']
        i=qu.loc[qu['ques_id']==q_id,'incorrect']
    
        
        p=df.loc[df['user_id']==u_id,'points']
        tci=(qu.loc[qu['ques_id'] == q_id, 'TCI'])
        if(time<=t.values):
            diff=t-time
            df.loc[df['user_id']==u_id,'points']=(tci.values*p.values/100)+p+(diff.values/2)
        else:
            diff=time-t
            print(diff)
            df.loc[df['user_id']==u_id,'points']=(tci.values*p.values/100)+p-(diff/2)
        qu.loc[qu['ques_id']==q_id,'time']=(t*(c+i)+time)/(c+i)
        df['rank'] = df['points'].rank(ascending=0)
        
    else:
        qu.loc[qu['ques_id'] == q_id, 'incorrect']+=1
    print("attempted")
    
    an = pd.DataFrame([[1111,option,time,u_id,status,quiz_name,q_id]], 
    columns=['id','answer','time_taken','user_id','isskipped','Quiz_name','Question_id'])
    ass=ans.append(an,ignore_index=True)
    
    ass.to_csv('answer.csv',index=False)    
    df.to_csv('user.csv',index=False)
    qu.to_csv('question.csv',index=False)
    
    



# In[25]:



def start_quiz(u_id):
   
    import datetime
    iz=pd.read_csv('quiz.csv',index_col=False) 
   #print(iz)
    quiz = pd.DataFrame([[3,'AMC-3',datetime.date.today(),u_id]], columns=['quiz_name_id','name','Quiz_Date','user_id'])
    
    zz=iz.append(quiz,ignore_index=True)
    zz.to_csv('quiz.csv',index=False) 
    
    for x in range(0, 3):
        k=find(u_id)
        attempt(u_id,k[0],1,5,3,'AMC-3')
    
    


# In[26]:


start_quiz(1)


# In[78]:


def stats(id):
    ans = pd.read_csv('answer.csv',index_col=False)
    cluster_ans=pd.DataFrame()
    cluster_ans['q_id']=ans.Question_id
    cluster_ans['user_id']=ans.user_id
    cluster_ans['subject']=ans.subject
    cluster_ans['isskipped']=ans.isskipped

    ann=cluster_ans[cluster_ans.user_id.values==id ].values
    ann=cluster_ans[ cluster_ans.subject.values==1].isskipped.values
    l=ann.shape[0]
    cnt=0
    for x in range(0, l):
        if(ann[x]==1):
            cnt=cnt+1
    avg=cnt/l
    print(avg)


# In[79]:


stats(1)

