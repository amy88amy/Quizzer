import React, { Component } from 'react';
import logo from './logo.svg';

import ReactDOM from 'react-dom';


class App extends React.Component
{
    render()
    {
        return(
         {}
          );
      }
}

class Question_of_the_day extends React.Component
{

  constructor(props)
  {
    super(props);
    this.data = [];
    this.Question_of_the_day_API();
    super();
    this.state = { 
      open: false,
    };
    
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
    this.forceUpdate();
    //console.log(this.state.bgcolor, this.state.height_value);
  }

  Question_of_the_day_API() {  
    fetch('http://localhost:8000/home/q_day/')
    .then(response => response.json())
    .then( (json) => { 
      console.log(json);
       this.data = json[0];
       this.forceUpdate();
      }) 
  }
    render()
    {
        return(
          <div>
            <div className={ "Rounded-Rectangle-1-copy-4" + (this.state.open ? ' in' : '') }>
              
              <style dangerouslySetInnerHTML=
                {{__html: `
                  .Rounded-Rectangle-1-copy-4 {
                    width: 60vw;
                    height: 8.492248062015504vh;
                    opacity: 0.3;
                    border-radius: 4px;
                    background-color: #000000;
                    box-shadow: 0px 6px 24px 0 rgba(0, 0, 0, 0.08);
                    margin-left:1.7349063150589867vw;
                    margin-top:2.3255813953488373vh;
                    float:left;
                  }
                  .Rounded-Rectangle-1-copy-4.in {
                    width: 60vw;
                    height: 20vh;
                    opacity: 0.3;
                    border-radius: 4px;
                    background-color: #000000;
                    box-shadow: 0px 6px 24px 0 rgba(0, 0, 0, 0.08);
                    margin-left:1.7349063150589867vw;
                    margin-top:2.3255813953488373vh;
                    float:left;
                  }
                `}} 
              />

              <div id="QUESTION-OF-THE-DAY" >
                  <b>Highly Rated Question</b>
              </div>
              
              <div id="Which-one-of-the-following-is-NOT-an-element-in-the-Periodic-Ta">
                <div>{this.data.statement}</div>
              </div>

              <div className="shape-18-div">
                <a onClick={this.toggle.bind(this)}>
                  <img src={"img/shape-18.png"} srcset={"img/shape-18@2x.png 2x,img/shape-18@3x.png 3x"} className="Shape-18" />
                </a>
              </div>

              <div id="demo" className={"collapse" + (this.state.open ? ' in' : '') }>
                  <div>
                    <span className="space"> 1.{this.data.op1} </span><br/>
                    <span className="space"> 2.{this.data.op2} </span><br/>
                    <span className="space"> 3.{this.data.op3} </span><br/>
                    <span className="space"> 4.{this.data.op4} </span><br/>
                    <p className="space">Answer : {this.data.ans}</p>
                  </div>
                  <style dangerouslySetInnerHTML=
                    {{__html: `
                      .space {
                        margin-left: 1vw;
                        padding : auto;
                      }
                    `}} 
                  />
              </div>


              <style dangerouslySetInnerHTML=
                {{__html: `
                  .collapse {
                    display: none;
                  }
                  .collapse.in {
                    display: block;
                    font-family: Montserrat;
                    font-size: 1.5503875968992247vh;
                    font-weight: 300;
                    line-height: 2;
                    text-align: left;
                    color: #ffffff; 
                  }
                `}} 
              />

            </div>
          </div>

          );
      }
}

const app4 = document.getElementById('Question_of_the_day');
ReactDOM.render(<Question_of_the_day/>,app4);

// Component showing About Us Buttton

class About_us extends React.Component
{

    handleClick()
    {
        ReactDOM.render(<About_us_page/>,document.getElementById('rep_lead'));
    }

    render()
    {
        return(
         <div>
              <div id="Rounded-Rectangle-1-copy">
                <div id="LEARN-MORE">
                  <button className="About_us" onClick={this.handleClick}>About Us</button>
                  <style dangerouslySetInnerHTML={{__html: `
                    .About_us {
                     height : 4vh;
                     width : 20vw;
                     position : absolute;
                     left : -6vw;
                      background : none;
                      border : none;

                     top : -1vh;
                       }
                  `}} />  
                </div>
              </div>
         </div>
          );
      }
}


class Subject extends React.Component
{
  constructor(opts){
    super(opts);
    this.hadleQuiz = this.hadleQuiz.bind(this);
    this.subject_id = 0;
  }

  hadleQuiz (id){
    this.subject_id = id;
    ReactDOM.render(<Question subject={this.subject_id}/>,document.getElementById('rep_lead'));
    console.log("this is hadleQuiz"); 
    console.log(this.subject_id); 
  }
  render()
  {
    return(
    <div>
    <div id="full" >
      <div id="root">{/*<h1>{this.props.mes}</h1>*/}</div>
      <div id = "home_page">
        <div id= "_Home-Scroll container-fluid"> 
          <div className="row">
            <div className="col-xs-4 col-md-4 nopadding " >

        
            </div>
            <div  className="col-xs-8 col-md-8 fullstyle " >
            
              <div id="rcorners2">
                <p>Choose Subject to start Quiz!</p>
              </div>
          
              <div id="english1">
                <p >ALL SUBJECTS</p>
            
              </div>
              <div id="science">
                <p >SCIENCE</p>
              </div>
          

              <div id="mathematics">
                <p>MATHEMATICS</p> 
              </div>

          
          
              <div id= "english123">
                <img className="englishimage" src={"img/rect.jpg "}  />

                <a onClick={()=>{this.hadleQuiz(1)}}>
                <img className="Vector-Smart-Object underenglishtag" src={"img/all_subjects.png "}/> </a>
              </div>
          
              <div >
                <img className="rectangle1" src={"img/rect.jpg "} />
                 <a onClick={()=>{this.hadleQuiz(2)}}>
                <img className="Vector-Smart-Object underrectangle" src={"img/science"} /> </a>
              </div>
              <div >
                <img className="rectangle2" src={"img/rect.jpg "}  />
                 <a onClick={()=>{this.hadleQuiz(3)}}>
                <img className="Vector-Smart-Object underrectangle2" src={"img/math.png"} /> </a>
              </div>
              <div id="geography"> 
                <p >GEOGRAPHY</p>
            
              </div>
              <div id="history">
                <p >HISTORY</p>
              </div>
              <div id="all_subject">
                <p >ENGLISH</p>
              </div>

              <div>
                <img  className="rectangle3" src={"img/rect.jpg "}/>
                 <a onClick={()=>{this.hadleQuiz(4)}}>
                <img className="Vector-Smart-Object underrectangle3" src={"img/geography.png"}/> </a>
              </div>
              <div id= "rectangle4">
                <img className="rectangle4" src={"img/rect.jpg "} />
                 <a onClick={()=>{this.hadleQuiz(5)}}>
                <img className="Vector-Smart-Object underrectangle4" src={"img/history.png"} /> </a>
              </div>
              <div id= "rectangle5">
                <img className="rectangle5" src={"img/rect.jpg "} />
                 <a onClick={()=>{this.hadleQuiz(6)}}>
                <img className="Vector-Smart-Object underrectangle5" src={"img/eng.png"} /> </a>
              </div>
     
          
          
          
      
   
        

           </div>


        </div>

      </div>
    </div>
  </div>
</div>
)
}

}
// Component showing About Us Page

class About_us_page extends React.Component
{
    render()
    {
        return(
            <div className="About_us_block">
              <div className = "about_us_back">
                <h1>ABOUT US</h1>
                <div className="Shape-22"><a href=""><img src={"img/shape-22.png"} srcset={"img/shape-22@2x.png 2x,img/shape-22@3x.png 3x"} /></a>
                            <style dangerouslySetInnerHTML={{__html: `
                        .Shape-22 { 
                          width: 0.97vw;
                            height: 1.73vh;
                            object-fit: contain;
                            background-color: transparent;
                            position: absolute;
                            left: 64.88vw;
                            top: 3.58vh; }
                            `}} />
                        </div>
                <div id="RoundRect">
                  <div id="person1">
                    <img src={"img/00100dPORTRAIT_00100_BURST20180223150921564_COVER.jpg"} id="Image" />
                    <div id="name">
                      Name:- Patil Prasad Sudhir
                    </div>
                    <div id="email">
                      Email:- prasad.patil0996@gmail.com
                    </div>
                  </div>  
                  <div id="person1">
                    <img src={"img/IMG_20180223_141213_Bokeh (1).jpg"} id="Image2" />
                    <div id="name">
                      Name:- Tapadiya Amruta 
                    </div>
                    <div id="email">
                      Email:- amrutatapadiya@gmail.com
                    </div>
                  </div>  
                  <div id="person1">
                    <img src={"img/00000IMG_00000_BURST20180223151549738_COVER (copy).jpg"} id="Image" />
                    <div id="name">
                      Name:- Wadje Shashank Venkatrao
                    </div>
                    <div id="email">
                      Email:- shashank.wadje44@gmail.com
                    </div>
                  </div>  
                  <div id="person1">
                    <img src={"img/IMG_20180223_135008635_HDR.jpg"} id="Image" />
                    <div id="name">
                      Name:- Wattamwar Suyash
                    </div>
                    <div id="email">
                      Email:- suyashwattamwar@gmail.com
                    </div>
                  </div>        
                    

                </div>

              </div>
            </div>
          );
      }
}

// Component showing User Details
class Details extends Component
{

  constructor(props)
  {
    super(props);
    this.data = [{},{}];  
    this.APIDetails();
  }
  
  APIDetails() {  
    fetch('http://localhost:8000/home/')
      .then(response => response.json())
    .then( (json) => { 
      console.log(json);
       this.data = json[0];
       console.log(this.data.rank);
       ReactDOM.render(<Rank rank = {this.data.rank}/>,document.getElementById("Rank"));
       ReactDOM.render(<VIEW_LEADERBOARD/>,document.getElementById('app'));
    this.forceUpdate();
      })

    
  }

  render()
  {
    return(
       <div>
        <img src={"img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum.png"}
               srcset={"img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum@2x.png 2x,img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum@3x.png 3x"}
               className="ce6ee6705c0a35988f3d86700--perfect-hair-color-emmy-rossum img-circle" /*style="left:9.65vw;top:2.35vh;"*//>
        <img src={"img/shape-10.png"} srcset={"img/shape-10@2x.png 2x,img/shape-10@3x.png 3x"} className="Shape-10"/>

        <div className="layer-1">
          {this.data.stars}
        </div>

        <div className="Welcome-Andrea">
          Welcome {this.data.username}!
        </div>

        <img src={"img/shape-19.png"} srcset={"img/shape-19@2x.png 2x,img/shape-19@3x.png 3x"} className="Shape-19"/>

        <div className="-Badges-earned">
          {this.data.badges} Badges earned
        </div>

        <img src={"img/shape-20.png"} srcset={"img/shape-20@2x.png 2x, img/shape-20@3x.png 3x"} className="Shape-20"/>

        <div className="Good-start-43-questions-answered">
          Good start! Improving rank shows Progress.
        </div>

        <img src={"img/shape-21.png"} srcset={"img/shape-21@2x.png 2x, img/shape-21@3x.png 3x"} className="Shape-21"/>

        <div className="Participated-in-8-discussions">
          Quizzer helps you in your evaluation 
        </div>
      </div>
      );
  } //render ends here.
} //Class Details end here  

class Rank extends React.Component
{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div id="Rounded-Rectangle-1-copy-3" className="nopadding1">
    
              <div id="Your-Rank">
                Your Rank
            </div>
              <div id="Ellipse-1"> 
                  <div id="layer">
                      {this.props.rank}
                    </div>  
              </div> 
            <div  class="VIEW-LEADERBOARD">
                        <div id="app"></div>
                    </div>
            </div> 
      </div>
      )
  }
}
class Leaderboard_Entry extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render(){
    return(
      <div>
        <div className="layer">
                          <style dangerouslySetInnerHTML={{__html:`
                          .layer{ 
                            width: 0.35vw;
                        height: 1.73vh;
                            font-family: Montserrat;
                        font-size: 2.22vh;
                          font-weight: 500;
                          line-height: 1.56;
                          text-align: left;
                          color: #ffffff;
                        top : 13.6vh;
                        left: 3.95vw;
                          position: relative;
                          margin-bottom : 5px;
                        }
                          `}} />
                          <p>
                            {this.props.pass}
                          </p>
                </div>
                <div className="Rounded-Rectangle-2">
                         <style dangerouslySetInnerHTML={{__html:`
                        .Rounded-Rectangle-2 { 
                              width: 62.63vw;
                          height: 7.16vh;
                          object-fit: contain;
                        background-color: #ffffff;
                          top:16.2vh;
                          left:2.8vw;
                          margin-bottom : 20px;
                          border-radius: 10px 8px 8px 10px;
                          position: relative;}
                        `}} />
                      
                        <div className="ed1">
                          <style dangerouslySetInnerHTML={{__html:`
                          .ed1{                         
                              width: 4.02vw;
                              position:absolute;
                              height: 7.08vh;
                              left:-0.0vw;                            
                              }
                            `}} />
                          <img src={"img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum.png"}
                      srcset={"img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum@2x.png 2x,img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum@3x.png 3x"}
                      className="ed1 img-circle"/>
                        </div> {/* ed1 ends here */}
                        <div className="layer-21">
                       <style dangerouslySetInnerHTML={{__html:`
                        .layer-21{                     
                            width: 0.90vw;
                            height: 1.23vh;
                            font-family: Montserrat;
                            font-size: 1.73vh;
                            text-align: left;
                            color: #333333;
                          top:2.90vh;
                          position: absolute;
                          left:54.4vw;}
                          `}}/>{this.props.entry.badges}
                    </div> {/* layer-21 ends here */}
                        <div className="Shape-19-copy">
                        <style dangerouslySetInnerHTML={{__html:`
                            .Shape-19-copy{ 
                              width: 1.66vw;
                          height: 2.71vh;
                              background-color: transparent;
                          top:01.40vh;
                          left: 25.90vw;
                          position: absolute;}
                              `}} />
                        <img src={"img/shape-19.png"} srcset={"img/shape-19@2x.png 2x,img/shape-19@3x.png 3x"} className="Shape-19-copy"/>
                      </div> {/* Shape-19-copy ends here */}
                      <div className="layer-2">
                        <style dangerouslySetInnerHTML={{__html:`
                          .layer-2{                      
                            width: 0.90vw;
                          height: 1.23vh;
                          font-family: Montserrat;
                          font-size: 1.73vh;
                          text-align: left;
                          color: #333333;
                          top:2.90vh;
                          position: absolute;
                          left:61.06vw;}
                        `}}/>{this.props.entry.stars}
                    </div> {/* layer-2 ends here */}
                        <div className="Shape-10-copy">
                        <style dangerouslySetInnerHTML={{__html:`
                            .Shape-10-copy { 
                              width: 1.25vw;
                          height: 2.10vh;
                          background-color: transparent;
                          left:29.47vw;
                          top:1.40vh;
                          position: absolute;}
                            `}} />
                      <img src={"img/shape-10.png"} srcset={"img/shape-10@2x.png 2x,img/shape-10@3x.png 3x"} className="Shape-10-copy"/>
            </div> {/* Shape-10-copy ends here */}
                      <div className="Lisa-Horshington1">
                      <style dangerouslySetInnerHTML={{__html:`
                      .Lisa-Horshington1 {
                          left:7.84vw;
                          height: 1.85vh;
                          font-family: Montserrat;
                          font-size: 1.72vh;
                          font-weight: bold;
                          text-align: left;
                          color: #333333;
                          width: 10vw;
                          top:2.5vh;
                          position: absolute;}
                      `}} />
                      <p>
                        {this.props.entry.username}
                      </p>
                    </div>  { /*Lisa-Horshington1 ends here */}
                          
                </div> 
      </div>
      )
  }
} 


var lis = [];
var l = [];


class ALL_ENTRIES extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
        data: 0
      }
        this.temp = 0;
      console.log("constructor");
      this.Entry_function();
  }

   
  Entry_function()
  {

      for(var i=0;i<5;i++)
      {
        console.log(l[i]);
          lis.push(<Leaderboard_Entry entry={l[i]} pass={i+1}/>);             
       }
       this.forceUpdate();       
  }

  render()
    {
    return(
    <div>
        {lis}
    </div>
    )
  }
}     

class Leaderboard extends React.Component
{

    render()
    {
      return(
            <div>
              <div className="col-md-8">
                <div className="row">
                    <div className="Rectangle-1-copy-4">
                        <style dangerouslySetInnerHTML={{__html: `
                    .Rectangle-1-copy-4 { 
                          width: 70vw;
                      height:150vh;
                      background-color: #f2716f;
                      position: absolute;
                      margin-left:-0.4vw
                    `}} />
                        <div className="Leaderboard">
                            <style dangerouslySetInnerHTML={{__html: `
                          .Leaderboard { 
                            width: 7.7vw;
                            height: 1.73vh;
                            font-family: Montserrat;
                            font-size: 2.24vh;
                            line-height: 1.56;
                            text-align: center;
                            color: #ffffff;
                            position: absolute;
                            top:3.5vh;
                            left:30.5vw; }
                            `}} />
                          <p>
                            Leaderboard
                          </p>
                    </div>
                        <div className="Shape-22"><a href=""><img src={"img/shape-22.png"} srcset={"img/shape-22@2x.png 2x,img/shape-22@3x.png 3x"} /></a>
                            <style dangerouslySetInnerHTML={{__html: `
                        .Shape-22 { 
                          width: 0.97vw;
                            height: 1.73vh;
                            object-fit: contain;
                            background-color: transparent;
                            position: absolute;
                            left: 64.88vw;
                            top: 3.58vh; }
                            `}} />
                        </div>
                        <div className="TOP-5">
                            <style dangerouslySetInnerHTML={{__html: `
                        .TOP-5{ 
                          width: 2.84vw;
                          height: 1.35vh;
                          font-family: Montserrat;
                          font-size: 1.73vh;
                          font-weight: bold;
                          line-height: 2;
                          text-align: center;
                          color: #ffffff;
                          position: absolute;
                          top:8.4vh;
                          left:2.29vw; }
                        `}} />
                        <p>
                          TOP-5
                        </p>
                    </div>
                            <div>
                        <ALL_ENTRIES/>
                    </div>

                    </div>  {/* Rectangle-1-copy-4 ends here */}
                </div> {/* Row ends here */}
            </div> {/* col-md-8 ends here */}
          </div>
      );
    }
}

// Component rendered for clicking the Quiz on Main Page
class Quiz extends Component {

  constructor(opts){
    super(opts);
    this.handleQuiz = this.handleQuiz.bind(this);
    this.message = "shashank";
  }Subject
subject
  handleQuiz (){
    ReactDOM.render(<Subject mes={this.message} />,document.getElementById('rep_lead'));
    console.log('The link was clicked.'); 
  }

  render()
  {
    return(
        <div>
        
    <div id="Rounded-Rectangle-1-copy-5">   
<div id="ELEMENTARY">
          <p>ELEMENTARY</p> 
        </div>
        </div>
        <div id="Rounded-Rectangle-1-copy-6"> 
<div id="MIDDLE">
            <p>MIDDLE</p>
        </div>
        </div>
        <div id="Rounded-Rectangle-1-copy-7"> 
        <div id="HIGH">
          <p>HIGH</p>
        </div>
        </div>
          <div id="Rectangle-4-copy" >
          <a onClick={this.handleQuiz}>
            <div className="ElEMENTARYIMAGE">           
                <style dangerouslySetInnerHTML={{__html: `
              .ElEMENTARYIMAGE {
                margin-left: 4.2vw; 
              margin-top: 1vh;
              width: 5vw;
              height: 8vh;
              object-fit: contain;
              background: transparent;
              cursor: pointer;
              }
              .ElEMENTARYIMAGE:hover {
                transform : scale(1.05);
              }
              `}} />
            <img  src={"img/vector-smart-object(2).png"} 
            srcset={"img/vector-smart-object@2x(2).png 2x,img/vector-smart-object@3x(2).png 3x"} />
          </div>
          </a>
        </div>
<div id="Rectangle-4-copy-2">
            <a onClick={this.handleQuiz}>
            <div className="MIDDLEIMAGE">           
              <style dangerouslySetInnerHTML={{__html: `
              .MIDDLEIMAGE {
                margin-left: 4.0vw; 
              margin-top: 4vh;
              width: 5vw;
              height: 10.5vh;
              object-fit: contain;
              background: transparent;
              cursor: pointer;
              }
              .MIDDLEIMAGE:hover {
                transform : scale(1.05);
              }
              `}} />
        
            <img  src={"img/vector-smart-object(1).png"}
              srcset={"img/vector-smart-object@2x(1).png 2x,img/vector-smart-object@3x(1).png 3x"}/>
          </div>
          </a>
        </div>


  <div id= "Rectangle-4">

          <a onClick={this.handleQuiz}>
          <div className="HIGHIMAGE">           
              <style dangerouslySetInnerHTML={{__html: `
              .HIGHIMAGE {
                margin-left: 4.5vw; 
              margin-top: 0vh;
              width: 5vw;
              height: 10.5vh;
              object-fit: contain;
              background: transparent;
              cursor: pointer;
              }
              .HIGHIMAGE:hover {
                transform : scale(1.05);
              }
              `}} />
               
            <img  src={"img/vector-smart-object1.png"} align="middle"
            srcset={"img/vector-smart-object@22x.png 2x,img/vector-smart-object@33x.png 3x"}/>
          </div>
          </a>
        </div>
        
       
                    </div>

    );
  }

}

var currentLink = null;
  function changeLinkColor(link) {
    if(currentLink!=null) {
          console.log("Inside of tfe if");
          
      if(link=="1")
      {
        <div>
        <style dangerouslySetInnerHTML={{__html: `
             .option2 {
                border : 5px solid blue; 
              }
            `}} />
        <style dangerouslySetInnerHTML={{__html: `
             .option3 {
                border : 5px solid blue; 
              }
            `}} />
        <style dangerouslySetInnerHTML={{__html: `
             .option4 {
                border : 5px solid blue; 
              }
            `}} />
        </div>
      }
      else if(link=="2")
      {
        <div>
        <style dangerouslySetInnerHTML={{__html: `
             .option1 {
                border : 5px solid blue; 
              }
            `}} />
        <style dangerouslySetInnerHTML={{__html: `
             .option3 {
                border : 5px solid blue; 
              }
            `}} />
        <style dangerouslySetInnerHTML={{__html: `
             .option4 {
                border : 5px solid blue; 
              }
            `}} />
        </div>
      }
      else if(link=="3")
      {
        <div>
        <style dangerouslySetInnerHTML={{__html: `
             .option1 {
                border : 5px solid blue; 
              }
            `}} />
        <style dangerouslySetInnerHTML={{__html: `
             .option2 {
                border : 5px solid blue; 
              }
            `}} />
        <style dangerouslySetInnerHTML={{__html: `
             .option4 {
                border : 5px solid blue; 
              }
            `}} />
        </div>
      }
      else
      {
        <div>
        <style dangerouslySetInnerHTML={{__html: `
             .option1 {
                border : 5px solid blue; 
              }
            `}} />
        <style dangerouslySetInnerHTML={{__html: `
             .option2 {
                border : 5px solid blue; 
              }
            `}} />
        <style dangerouslySetInnerHTML={{__html: `
             .option3 {
                border : 5px solid blue; 
              }
            `}} />
        </div>

      }  

    }
    if(link=="1")
    {
         <style dangerouslySetInnerHTML={{__html: `
             .option1 {
                border : 5px solid blue; 
              }
            `}} />
            currentLink = "option1";
    }
      else if(link=="2")
      {
         <style dangerouslySetInnerHTML={{__html: `
             .option2 {
                border : 5px solid blue; 
              }
            `}} />
             currentLink = "option2";
      }
      else if(link=="3")
      {
         <style dangerouslySetInnerHTML={{__html: `
             .option3 {
                border : 5px solid blue; 
              }
            `}} />
            currentLink = "option3";
      }
      else
      {
         <style dangerouslySetInnerHTML={{__html: `
             .option4 {
                border : 5px solid blue; 
              }
            `}} />
            currentLink = "option4";
      }
   
    console.log("Out of te if");
  }


// Component to be rendered after clicking the quiz showing question 
// Component to be rendered after clicking the quiz showing question 
class Question extends Component
{

  constructor(props)
  {
    super(props);
    this.data = {}; 
    this.noq = 0;
    this.noc = 0;
    this.APIQuestion= this.APIQuestion.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
     this.startTimer= this.startTimer.bind(this);
    this.stopTimer= this.stopTimer.bind(this);
    this.APIQuestion();
    this.startTimer();
    this.option_selected = 0;
    this.message = '';
    this.correct = 3;
    this.state = {
      border_value1: 'solid 1px #cccccc',
      height_value1: '5.1vh',
      border_value2: 'solid 1px #cccccc',
      height_value2: '5.1vh',
      border_value3: 'solid 1px #cccccc',
      height_value3: '5.1vh',
      border_value4: 'solid 1px #cccccc',
      height_value4: '5.1vh',
      sec:0,
      min:0
    }
    
  }
componentWillUnmount () {
    clearInterval(this.timer)
  }
  tick () {
    if(this.state.sec<59)
    this.setState({sec: (this.state.sec + 1)})
  else
    {this.setState({min: (this.state.min + 1)})
    this.setState({sec: 0})}
  }
  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  resetTimer()
  {clearInterval(this.timer)
    this.setState({sec:0})
    this.setState({min:0})


  }
  stopTimer () {
    clearInterval(this.timer)
    this.setState({sec:0})
    this.setState({min:0})
  }



  changeLinkColor(temp) {
    if(temp == 1)
    {
      this.option_selected = 1;
      this.setState({border_value1: 'solid 3px #696969',height_value1: '5.1vh',border_value2: 'solid 1px #cccccc',height_value2: '5.2vh',border_value3: 'solid 1px #cccccc',height_value3: '5.2vh',border_value4: 'solid 1px #cccccc',height_value4: '5.2vh'});   
      
    }
    else if(temp == 2) {
      this.option_selected = 2;
      this.setState({border_value1: 'solid 1px  #cccccc',height_value1: '5.2vh',border_value2: 'solid 3px #696969',height_value2: '5.1vh',border_value3: 'solid 1px  #cccccc',height_value3: '5.2vh',border_value4: 'solid 1px  #cccccc',height_value4: '5.2vh'});
    }
    else if(temp == 3) {
      this.option_selected = 3;
      this.setState({border_value1: 'solid 1px  #cccccc',height_value1: '5.2vh',border_value2: 'solid 1px  #cccccc',height_value2: '5.2vh',border_value3: 'solid 3px  #696969',height_value3: '5.1vh',border_value4: 'solid 1px  #cccccc',height_value4: '5.2vh'});
    }
    else {
      this.option_selected = 4;
      this.setState({border_value1: 'solid 1px  #cccccc',height_value1: '5.2vh',border_value2: 'solid 1px  #cccccc',height_value2: '5.2vh',border_value3: 'solid 1px  #cccccc',height_value3: '5.2vh',border_value4: 'solid 3px  #696969',height_value4: '5.1vh'});
    }
    console.log("out  if");
    this.forceUpdate();
  }


// Api that fetches 
  APIQuestion()
  { 
    fetch('http://localhost:8000/quiz/quiz_user_id=7/')
      .then(response => response.json())
      .then((data) => {
        console.log(data[0]);
        this.data = data[0];
        this.forceUpdate();
      })
  }
  handleSubmit(event) {
  
    event.preventDefault();
    const data=new FormData(event.target);
    var self = this;
    self.stopTimer();
    fetch('http://localhost:8000/home/answer/',{
      method:'POST',
      body: data,
    }).then(function(){
      
      self.startTimer();
    });
    if(this.option_selected != 0)
    {
       this.data.ans==this.option_selected ? this.message='Correct answer..Good going !' : this.message='Incorrect Answer..Better Luck !'
    }
    else
    {
      this.message = 'Question Skipped';
    }
    if(window.confirm(this.message))
    {
      this.option_selected = 0;
      this.setState({border_value1: 'solid 1px  #cccccc',height_value1: '5.2vh',border_value2: 'solid 1px  #cccccc',height_value2: '5.2vh',border_value3: 'solid 1px  #cccccc',height_value3: '5.2vh',border_value4: 'solid 1px  #cccccc',height_value4: '5.2vh'});

    }
    this.noq = this.noq + 1;
    if(this.noq == 5)
    {
      alert("Your Test is done! Congratulations");
      window.location.reload();
    }
    else
    {
      self.forceUpdate(); 
      self.APIQuestion();
      
    }
   
  }


  render(){
  

   return(
    <div>
      <div className="row">
          <style dangerouslySetInnerHTML={{__html: `
             .row {
                width: 100%;
                height: 100%; 
              }
            `}} 
          />
      </div>
      
      <form  id="myForm" onSubmit={this.handleSubmit}> 

        <div>
        
        <div className="Rectangle-4-copy-2">
          
          <style dangerouslySetInnerHTML={{__html: `
             .Rectangle-4-copy-2 {
              left: 1vw; 
              width: 64vw; 
              top: 2vh; 
              position: absolute;
              height: 21vh;
              border-radius: 1vw;
              background-color: #b4b7d7;  }
              `}} />
          <div className="Vector-Smart-Object">
            <img src={"vector-smart-object/vector-smart-object.png"} srcset={"vector-smart-object/vector-smart-object@2x.png 2x, vector-smart-object/vector-smart-object@3x.png 3x"}/>
            <style dangerouslySetInnerHTML={{__html: `
              .Vector-Smart-Object {
                margin-left: 2vw; 
              margin-top: 5.2vh;
              width: 5vw;
              height: 10.5vh;
              object-fit: contain;
              background: transparent;  }
              `}} />
          </div>
        
          <div className="edit1">
            <style dangerouslySetInnerHTML={{__html: `
              .edit1 
              { 
                  position: absolute; 
                right: 1vw; top: 2vh; }
              `}} />
            <div className="Shape-22">
              <a href="">X</a>
              <style dangerouslySetInnerHTML={{__html: `
                .Shape-22 { 
                width: 1vw;
                height: 1vh;
                color: #ffffff;
                text-decoration: none;
              `}} />
            </div> {/* Shape-22 ends here */}
          </div> {/* edit1 ends here */}

          <div className="edit2">
            <style dangerouslySetInnerHTML={{__html: `
              .edit2 
              { 
                  position: absolute; 
                margin-left: 8vw; 
                top: 5vh; }
              `}} />
            <div className="ELEMENTARY-English---5th-Grade"><p><b>Quizzer Test</b></p>
                <style dangerouslySetInnerHTML={{__html: `
                  .ELEMENTARY-English---5th-Grade{ 
                    font-family: Montserrat;
                  font-size: 1.4vw;
                  text-align: left;
                  color: #ffffff;
                `}} />
              </div>
            </div>

            <div className="edit3">
                <style dangerouslySetInnerHTML={{__html: `
                .edit3 { 
                  position: absolute; 
                margin-left: 8vw; 
                top:10vh; }
              `}} />
              <div className="This-course-helps-you-improve-the-printing-and-typesetting-indu"><p>Welcome to the all new dynamic platform where you can test your skills by answering questions. So Hurry up and carry on the good work. Do Well. CHEERS...!</p>
                <style dangerouslySetInnerHTML={{__html: `
                  .This-course-helps-you-improve-the-printing-and-typesetting-indu{ 
                    font-family: Montserrat;
                  font-size: 1.1vw;
                  text-align: left;
                  color: #ffffff;
                  margin-right: 2vw;
                `}} />
              </div>
            </div>

            <div className="edit4">
                <style dangerouslySetInnerHTML={{__html: `
                .edit4 { 
                  position: absolute; 
                margin-left: 1vw; 
                margin-top: 7vh; }
              `}} />
              
              {/* <div className="VIEW-DISCUSSION">
                <a><u>
                <style dangerouslySetInnerHTML={{__html: `
                    .VIEW-DISCUSSION { 
                    text-decoration: none;
                    color: #333333; 
                    height: 1vh;
                  font-family: Montserrat;
                  font-size: 1.1vw;
                  text-align: left;
                  color: #333333;}
                    `}} />VIEW DISCUSSION
                  </u></a>
                </div> */}
            </div>

            <div className="edit5">
                <style dangerouslySetInnerHTML={{__html: `
                .edit5
                { 
                  position: absolute;
                  margin-left: 14vw;
                  margin-top: 7vh; }
                `}} />
              {/* <div className="VIEW-ANSWER-HISTORY">
                <a><u>
                <style dangerouslySetInnerHTML={{__html: `
                  .VIEW-ANSWER-HISTORY { 
                    text-decoration: none; 
                    color: #333333;
                    height: 1vh;
                  font-family: Montserrat;
                  font-size: 1.1vw;
                  text-align: left;
                  color: #333333; }
                  `}} />VIEW ANSWER HISTORY
                  </u></a>
                </div> */}
            </div>

            <div className="edit6">
              <style dangerouslySetInnerHTML={{__html: `
                .edit6 { 
                  margin-top: 18.6vh; 
                margin-left: 1vw; }
                `}} />
              <div id="question" className="Which-sentence-shows-correct-punctuation"><p>{this.data.statement}</p>
                <style dangerouslySetInnerHTML={{__html: `
                  .Which-sentence-shows-correct-punctuation{
                    font-family: Montserrat;
                  font-size: 1.4vw;
                  text-align: left;
                  color: #333333;
                  `}} />
                </div>
            </div>
            <input type="hidden" name="ques_id" value={this.data.ques_id} />
            <input type="hidden" name="sub_idd" value={this.props.subject} />
            {console.log("this is it"+this.props.subject)}

            
            <div>
              {/* OPTION 1 */}
              <div id = "option_rect1" className="Rounded-Rectangle-4-1" onClick={() => {this.changeLinkColor(1)}}>
                  <style dangerouslySetInnerHTML={{__html: `
                      .Rounded-Rectangle-4-1{ 
                        position: absolute; 
                        margin-left: 1vw; 
                        margin-top: 2vh;
                        width: 35vw;
                        height: ${this.state.height_value1};
                        border-radius: 8px;
                        background-color: transparent;
                        border: ${this.state.border_value1};
                        cursor : pointer; 
                      }
                      .Rounded-Rectangle-4-1:hover{ 
                        position: absolute; 
                        margin-left: 1vw; 
                        margin-top: 2vh;
                        width: 35vw;
                        height: 5.2vh;
                        border-radius: 8px;
                        border: solid 2px #696969;
                        cursor : pointer;
                      }
                  `}} 
                  />

                  <div className="option1" id="option1" >
                    {this.data.op1}
                    <style dangerouslySetInnerHTML={{__html: `
                    .option1 { 
                      position: absolute;
                      margin-left: 4vw; 
                      margin-top: 1.5vh; }
                    `}} />
                {/*</div>
                <div className="Rounded-Rectangle-4-copy-1">
                    <style dangerouslySetInnerHTML={{__html: `
                    .Rounded-Rectangle-4-copy-1 { 
                    float:left;
                    width: 2.6vw;
                    height: 5vh;
                    border-radius: 8px 0 0 8px;
                    background-color: inherit;
                    border: solid 1px #cccccc; }
                    `}} />
                  */}
                    
                  {/*<div className="glyphicon glyphicon-ok"> 
                  <p>
                    <a>
                    <style dangerouslySetInnerHTML={{__html: `
                      .glyphicon glyphicon-ok { 
                          color: black; 
                          margin-left: 8.7vw; 
                          margin-top: 20.1vh; 
                          text-decoration: none; 
                          position:absolute;
                          font-size: 1vw;
                        }
                      `}} />
                      </a> 
                      </p>
                    </div>*/}
                    
                </div>
                <label class="container">
                  
                    <span className="checkmark"></span>
                </label>                
              </div>

            {/* OPTION 2 */}
              <div className="Rounded-Rectangle-4-2" onClick={() => {this.changeLinkColor(2)}}>
                  <style dangerouslySetInnerHTML={{__html: `
                  .Rounded-Rectangle-4-2 { 
                    position: absolute; 
                  margin-left: 1vw; 
                  margin-top: 10vh;
                  width: 35vw;
                  height: ${this.state.height_value2};
                  border-radius: 8px;
                  background-color: transparent;
                  border: ${this.state.border_value2}; 
                  cursor : pointer;
                  }

                  .Rounded-Rectangle-4-2:hover { 
                    position: absolute; 
                  margin-left: 1vw; 
                  margin-top: 10vh;
                  width: 35vw;
                  height: 5.2vh;
                  border-radius: 8px;
                  background-color: transparent;
                  border: solid 2px #696969;
                  cursor : pointer;
                  }
                  `}} />
                  <div className="option2" id="option2">
                    <style dangerouslySetInnerHTML={{__html: `
                    .option2 { 
                      position: absolute;
                      margin-left: 4vw; 
                      margin-top: 1.5vh; }
                    `}} />
                  {this.data.op2}
                </div>
                {/*
                /*<div className="Rounded-Rectangle-4-copy-2">
                     <style dangerouslySetInnerHTML={{__html: `
                    .Rounded-Rectangle-4-copy-2 { 
                      position: absolute; 
                    margin-left: 0vw; 
                    margin-top: 0vh;
                    width: 2.6vw;
                    height: 5.1vh;
                    border-radius: 8px 0 0 8px;
                    background-color: transparent;
                    border: solid 1px #cccccc; }
                    `}} />
                  <div className="glyphicon glyphicon-ok">
                    <a>
                      <style dangerouslySetInnerHTML={{__html: `
                      .glyphicon glyphicon-ok{ 
                          color: black; 
                          margin-left: 0.7vw; 
                          margin-top: 1.1vh; 
                          text-decoration: none; 
                          font-size: 1vw;
                        }
                      `}} />
                    </a> 
                  </div>
                </div>
                */}
                <label className="container">
                 
                    <span class="checkmark"></span>
                </label>
                
              </div>

              {/* OPTION 3 */}
              <div className="Rounded-Rectangle-4-3" onClick={() => {this.changeLinkColor(3)}}>
                  <style dangerouslySetInnerHTML={{__html: `
                  .Rounded-Rectangle-4-3 { 
                    position: absolute; 
                  margin-left: 1vw; 
                  margin-top: 18vh;
                  width: 35vw;
                  height: ${this.state.height_value3};
                  border-radius: 8px;
                  background-color: transparent;
                  border: ${this.state.border_value3};
                  cursor : pointer; 
                  }
                  .Rounded-Rectangle-4-3:hover { 
                    position: absolute; 
                  margin-left: 1vw; 
                  margin-top: 18vh;
                  width: 35vw;
                  height: 5.2vh;
                  border-radius: 8px;
                  background-color: transparent;
                  border: solid 2px #696969; 
                  cursor : pointer;
                  }
                  `}} />
                  <div className="option3" id="option3">
                    <style dangerouslySetInnerHTML={{__html: `
                    .option3 { 
                      position: absolute;
                      margin-left: 4vw; 
                      margin-top: 1.5vh; }
                    `}} />
                  {this.data.op3}
                </div>
                {/*
                /*
                  <div className="Rounded-Rectangle-4-copy-3">
                     <style dangerouslySetInnerHTML={{__html: `
                    .Rounded-Rectangle-4-copy-3 { 
                      position: absolute; 
                    margin-left: 0vw; 
                    margin-top: 0vh;
                      width: 2.6vw;
                    height: 5.1vh;
                    border-radius: 8px 0 0 8px;
                    background-color: transparent;
                    border: solid 1px #cccccc;}
                    `}} />
                  <div className="glyphicon glyphicon-ok">
                    <a>
                      <style dangerouslySetInnerHTML={{__html: `
                      .glyphicon glyphicon-ok{ 
                          color: black; 
                          margin-left: 0.7vw; 
                          margin-top: 1.1vh; 
                          text-decoration: none; 
                          font-size: 1vw;
                        }
                      `}} />
                    </a> 
                  </div>
                  </div>
                */}
                <label class="container">
                 
                    <span class="checkmark"></span>
                </label>
                
              </div>

              {/* OPTION 4*/}
              <div className="Rounded-Rectangle-4-4" onClick={() => {this.changeLinkColor(4)}}>
                  <style dangerouslySetInnerHTML={{__html: `
                  .Rounded-Rectangle-4-4 { 
                    position: absolute; 
                  margin-left: 1vw; 
                  margin-top: 26vh;
                  width: 35vw;
                  height: ${this.state.height_value4};
                  border-radius: 8px;
                  background-color: transparent;
                  border: ${this.state.border_value4};
                  cursor : pointer; 
                  }
                  .Rounded-Rectangle-4-4:hover { 
                    position: absolute; 
                  margin-left: 1vw; 
                  margin-top: 26vh;
                  width: 35vw;
                  height: 5.2vh;
                  border-radius: 8px;
                  background-color: transparent;
                  border: solid 2px #696969; 
                  cursor : pointer;
                  }
                  `}} />
                  <div className="option4" id="option4">
                    <style dangerouslySetInnerHTML={{__html: `
                    .option4 { 
                      position: absolute;
                      margin-left: 4vw; 
                      margin-top: 1.5vh; 
                      }
                    `}} />
                  {this.data.op4}
                </div>
                {/*
                  /*<div className="Rounded-Rectangle-4-copy-4">
                     <style dangerouslySetInnerHTML={{__html: `
                    .Rounded-Rectangle-4-copy-4 { 
                      position: absolute; 
                    margin-left: 0vw; 
                    margin-top: 0vh;
                      width: 2.6vw;
                    height: 5.1vh;
                    border-radius: 8px 0 0 8px;
                    background-color: transparent;
                    border: solid 1px #cccccc; }
                    `}} />
                  <div className="glyphicon glyphicon-ok"><a>
                      <style dangerouslySetInnerHTML={{__html: `
                      .glyphicon glyphicon-ok{ 
                          color: black; 
                          margin-left: 1.7vw; 
                          margin-top: 2.1vh; 
                          text-decoration: none; 
                          font-size: 1vw;
                        }
                      `}} />
                  </a> 
                </div>
                </div>
                */}
                <label class="container">
                  
                    <span class="checkmark"></span>
                </label>
                
              </div>
              
            </div>
            



            <div className="Rounded-Rectangle-1-copy-2">
                <style dangerouslySetInnerHTML={{__html: `
                    .Rounded-Rectangle-1-copy-2 { 
                      position: absolute;
                      width: 13.1vw;
                    height: 5.3vh;
                    border-radius: 3vw;
                    background-color: #ffffff;
                    border: solid 1px #a173a9;
                    margin-top: 50vh;
                    margin-left: center; }
                    `}} />
              <div >
                <button className="SKIP">
                  SKIP
                </button>
                
              </div>
                 <style dangerouslySetInnerHTML={{__html: `
                   .SKIP { 
                height: 5vh;
                width : 13vw;
                font-family: Montserrat;
                font-size: 1.3vw;
                font-weight: bold;
                letter-spacing: 0.1vw;
                text-align: center;
                color: #a173a9;
                margin-top: 0vh;
                   background : none;
                    border : none; }
              `}} />
            </div>

            <div className="Rounded-Rectangle-1-copy">
                <style dangerouslySetInnerHTML={{__html: `
                    .Rounded-Rectangle-1-copy { 
                      position: absolute;
                      width: 13.1vw;
                    height: 5.3vh;
                    border-radius: 3vw;
                    background-color: #f2716f;
                    margin-top: 50vh;
                    margin-left: 15vw; 
                    text-align: center;
                 
                    }
                    `}} />
              <div>
                <p>
                  <button className="SUBMIT">
                  Submit
                  </button>
                
                  <style dangerouslySetInnerHTML={{__html: `
                    .SUBMIT {
                      height: 5vh;
                      width : 13vw;
                      font-family: Montserrat;
                      font-size: 1.3vw;
                      font-weight: bold;
                      letter-spacing: 0.1vw;
                      text-align: center;
                      color: #ffffff;
                      margin-top: 0vh;
                      background : none;
                      border : none;
                       }
                  `}} />  
                </p>
              </div>
            </div>
             <div className='timer'>
                <style dangerouslySetInnerHTML={{__html: `
                .timer { 
                  margin-top:-9vh;
                  color:black;
                  margin-left:48vw;
                  font-size:6vh;
                  font-family: Montserrat;
                  width:  7vw;
                  height: 8.488372093023256vh;
                  border-radius: 18px;
                  background-color: #ffffff;
                  border: solid 1px #a173a9;
                  }
                  `}} />
        {this.state.min}:{this.state.sec}
      
      </div>
            <div className="edit7">
                <style dangerouslySetInnerHTML={{__html: `
                .edit7 { 
                  position: absolute;
                  top: 13vh;
                  margin-left: 20.5vw;
                  z-index: 2;
                  width: 20vw;
                height: 20vh;
                object-fit: contain;
                background: transparent;
                top:20vh }
                  `}} /> 
              <img src={"vector-smart-object-badge/vector-smart-object.png"} srcset={"vector-smart-object-badge/vector-smart-object@2x.png 2x, vector-smart-object-badge/vector-smart-object@3x.png 3x"} className="edit7" /*style="height: 20vh; width: 20vw;"*/ />
            </div>
            
            <div className="Rectangle-4-copy-3">
                <style dangerouslySetInnerHTML={{__html: `
                .Rectangle-4-copy-3 { 
                      position: absolute;
                      margin-left: 38vw; 
                      top: 47vh; 
                      overflow: hidden; 
                      text-overflow: ellipsis;
                      width: 25.8vw;
                    height: 28.7vh;
                    border-radius: 0.8vw;
                    background-color: #f0f0f0; }
                    `}} />
              <div className="-more-right-answers-to-earn-a-badge-Get-it-quick-to-move-stra"><p>Every correct answer helps you build your profile. Don't lose the hunger for badges..!</p>
                    <style dangerouslySetInnerHTML={{__html: `
                    .-more-right-answers-to-earn-a-badge-Get-it-quick-to-move-stra { 
                      width: 19vw;
                    font-family: Montserrat;
                    font-size: 2.4vh;
                    line-height: 1.5;
                    text-align: center;
                    color: #9294ae;
                    margin-top: 15vh;
                    margin-left: 3.5vw; }
                    `}} />
              </div>
            </div> {/* Rectangle-4-copy-3 ends here */}

          </div>{/* Rectangle-4-copy-2 ends here */}
          
        </div>
              <input type="hidden" id="answer"  name="answer" value={this.option_selected}/>
             {/* {this.data.ans==this.option_selected ? this.correct=1 : this.correct=2} */}
              <input type="hidden" id="correct"  name="correct" value={this.correct}/>

              
              {console.log(this.option_selected)}   


        </form>

      </div>

      );
  }
}




// Component to be rendered on clicking the View leaderboard

class VIEW_LEADERBOARD extends React.Component 
{

  constructor(props)
  {
      super(props);
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
      this.APIcall = this.APIcall.bind(this);
      this.LeaderboardApi = this.LeaderboardApi.bind(this);
      this.data = {};
      this.LeaderboardApi();
    }

  APIcall()
  { 
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
    .then( (json) => { 
    this.data = json
    ReactDOM.render(<div><h1>{this.data.title}</h1></div>,document.getElementById('rep_lead'))
        })
  }

  LeaderboardApi()
  { 
    fetch('http://localhost:8000/lead/lead_user_id=7/')
      .then(response => response.json())
    .then( (json) => { 
    l = json;
    console.log(l);
        })
  }

    handleClick () 
    {
        ReactDOM.render(<Leaderboard />,document.getElementById('rep_lead'));
    }

      
    render()
    {
    return (
    <div>
      <div className = "VIEW_LEADERBOARD" onClick={() => this.handleClick()}>VIEW LEADERBOARD</div> 
    </div>    
    );  
    }
}

const app2 = document.getElementById('Rounded-Rectangle-1');
ReactDOM.render(<Details/>,app2);
const app1 = document.getElementById('quiz_link');
ReactDOM.render(<Quiz/>,app1);
const app3 = document.getElementById('About_us');
ReactDOM.render(<About_us/>,app3);



export default App;
