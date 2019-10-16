import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Img from 'react-image';
import ReactDOM from 'react-dom';






class App extends React.Component {
  render() {
    return (
      <div>
     </div>
    );
  }
}

class Lead extends Component {



   render() {
      return (
         <div>
		<h1>hello</h1> 
         </div>
      );
   }
}

class Quiz extends Component {
constructor(opts){
  super(opts);
  this.handleQuiz = this.handleQuiz.bind(this);
}
handleQuiz () {
				ReactDOM.render(<div><h1>replaced by quiz</h1></div>,document.getElementById('rep_lead'));
				    console.log('The link was clicked.'); 
			};

	
   render() {
      return (
         <div>
					<div id="HIGH">
			 			<p>HIGH</p>
					</div>

					<div id="MIDDLE">
					 	<p>MIDDLE</p>
					</div>

					<div id="ELEMENTARY">
					<p>ELEMENTARY</p> 
		 			</div>

					<div id= "Rectangle-4">
							 <a onClick={this.handleQuiz}>
						 		<img class="Vector-Smart-Object" src="img/vector-smart-object1.png"
					srcset="img/vector-smart-object@22x.png 2x,img/vector-smart-object@33x.png 3x"/></a>
					</div>
		 
		 			<div id="Rectangle-4-copy">
						 		<a onClick={this.handleQuiz}>
			 					<img class="Vector-Smart-Object" src="img/vector-smart-object(1).png"
			     		srcset="img/vector-smart-object@2x(1).png 2x,img/vector-smart-object@3x(1).png 3x"/></a>
					</div>
					<div id="Rectangle-4-copy-2" >
					<a onClick={this.handleQuiz}><img class="Vector-Smart-Object" src="img/vector-smart-object(2).png"
			     srcset="img/vector-smart-object@2x(2).png 2x,img/vector-smart-object@3x(2).png 3x" /></a>
					</div>

         </div>
      );
   }

}


class Layout extends React.Component{

        handleClick () {
				ReactDOM.render(<div><h1>replaced by leaderboard</h1></div>,document.getElementById('rep_lead'));
    {/*console.log('The link was clicked.');*/}
			};
        render(){
		return (
			/*<Router>
				<div>

				       <Switch>
					  <Route exact path='/Lead' component={Lead} />

					  <Link onClick={this.handleClick}  to={'/Lead'}>VIEW LEADERBOARD</Link>

				       </Switch>

	    			 </div>
			</Router>*/
		<div><p onClick={this.handleClick} > VIEW LEADERBOARD</p></div>
		);	
        }
}
var i=0;
		function myFunction(arr) {
		    var out = "";
		    
		    out = arr[i].question ;
		    document.getElementById("question").innerHTML = out;
		    out = arr[i].option1;
		    document.getElementById("option1").innerHTML = out;
 		    out = arr[i].option2;
		    document.getElementById("option2").innerHTML = out;
 		    out = arr[i].option3;
		    document.getElementById("option3").innerHTML = out;
                    out = arr[i].option4;
		    document.getElementById("option4").innerHTML = out;
		    i++;
		}
const app = document.getElementById('app');
ReactDOM.render(<Layout/>,app);
const app1 = document.getElementById('quiz_link');
ReactDOM.render(<Quiz/>,app1);

export default App;
