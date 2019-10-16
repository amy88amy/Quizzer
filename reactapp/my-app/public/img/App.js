import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Img from 'react-image';
import ReactDOM from 'react-dom';



class App extends React.Component {

  	render(){
      return(
	    {}
      );
    }
}

// Component showing User Details
class Details extends Component {

	constructor(props) {
		super(props);
		this.data = {};	
		this.APIDetails();
	}

	APIDetails() {	
		fetch('https://jsonplaceholder.typicode.com/posts/1')
  		.then(response => response.json())
 		.then( (json) => { 
 		this.data = json;
 		console.log(this.data);
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

				<div className="layer-1">{this.data.id}</div>

				<div className="Welcome-Andrea">Welcome Andrea!</div>

				<img src={"img/shape-19.png"} srcset={"img/shape-19@2x.png 2x,img/shape-19@3x.png 3x"} className="Shape-19"/>

				<div className="-Badges-earned">{this.data.userId} 2 Badges earned</div>

				<img src={"img/shape-20.png"} srcset={"img/shape-20@2x.png 2x, img/shape-20@3x.png 3x"} className="Shape-20"/>

				<div className="Good-start-43-questions-answered">Good start! 43 questions answered.</div>

				<img src={"img/shape-21.png"} srcset={"img/shape-21@2x.png 2x, img/shape-21@3x.png 3x"} className="Shape-21"/>

				<div className="Participated-in-8-discussions">Participated in 8 discussions</div>
			</div>
			);
	}

}

class Leaderboard extends React.Component {

  	render(){
      return(
	    
      );
    }
}

// Component rendered for clicking the Quiz on Main Page
class Quiz extends Component {

	constructor(opts){
	  super(opts);
	  this.handleQuiz = this.handleQuiz.bind(this);
	}

	handleQuiz (){
	  ReactDOM.render(<Question/>,document.getElementById('rep_lead'));
	  console.log('The link was clicked.'); 
	}

	render(){
	  return(
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
				<img className="Vector-Smart-Object" src={"img/vector-smart-object1.png"}
					srcset={"img/vector-smart-object@22x.png 2x,img/vector-smart-object@33x.png 3x"}/></a>
			</div>
			 
			<div id="Rectangle-4-copy">
			  <a onClick={this.handleQuiz}>
				<img className="Vector-Smart-Object" src={"img/vector-smart-object(1).png"}
				    srcset={"img/vector-smart-object@2x(1).png 2x,img/vector-smart-object@3x(1).png 3x"}/></a>
			</div>

			<div id="Rectangle-4-copy-2" >
			  <a onClick={this.handleQuiz}><img className="Vector-Smart-Object" src={"img/vector-smart-object(2).png"}
				    srcset={"img/vector-smart-object@2x(2).png 2x,img/vector-smart-object@3x(2).png 3x"} /></a>
			</div>
	  	</div>

	  );
	}

}

// Component to be rendered after clicking the quiz showing question 
class Question extends Component {

	constructor(props) {
		super(props);
		this.data = {};	
		this.APIQuestion();
	}

// Api that fetches 
	APIQuestion() {	
		fetch('https://api.myjson.com/bins/1f3avl')
  		.then(response => response.json())
 		.then( (json) => { 
 		this.data = json[0];
 		this.forceUpdate();
    	})
 	}
	render(){
		return(
			<div>
				<div>
					<div className="Rectangle-4-copy-2">
						<style>
							left: 12vw; 
							width: calc(100vw - 15vw); 
							top: 2vh; 
							position: absolute; 
						</style>
						<div>
							<style>
								margin-left: 2vw; 
								margin-top: 5.2vh;
							</style>
							<img src={"vector-smart-object/vector-smart-object.png"} srcset={"vector-smart-object/vector-smart-object@2x.png 2x, vector-smart-object/vector-smart-object@3x.png 3x"} className="Vector-Smart-Object"/>
						</div>
						
						<div>
							<style>
								position: absolute; 
								right: 1vw; top: 2vh;
							</style>
							<a className="Shape-22">X</a>
						</div>

						<div>
							<style>
								position: absolute; 
								margin-left: 8vw; 
								top: 5vh;
							</style>
							<p className="ELEMENTARY-English---5th-Grade">ELEMENTARY English (5th Grade)</p>
						</div>

						<div>
							<style>
								position: absolute; 
								margin-left: 8vw; 
								top:10vh;
							</style>
							<p className="This-course-helps-you-improve-the-printing-and-typesetting-indu">This course helps you improve the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						</div>

						<div>
							<style>
								position: absolute; 
								margin-left: 1vw; 
								margin-top: 7vh;
							</style>
							<u className="VIEW-DISCUSSION"><a><style>text-decoration: none; color: #333333;</style>VIEW DISCUSSION</a></u>
						</div>

						<div>
							<style>
								position: absolute; margin-left: 14vw; margin-top: 7vh;
							</style>
							<u className="VIEW-ANSWER-HISTORY"><a><style>text-decoration: none; color: #333333;</style>VIEW ANSWER HISTORY</a></u>
						</div>

						<div>
							<style>
								margin-top: 18.6vh; 
								margin-left: 1vw;
							</style>
							<p id="question" className="Which-sentence-shows-correct-punctuation">{this.data.question}</p>
						</div>

						<div>
							<p className="Rounded-Rectangle-4">
								<style>
									position: absolute; 
									margin-left: 1vw; 
									margin-top: 2vh;
								</style>
								<p className="Rounded-Rectangle-4-copy">
									<style>
										position: absolute; 
										margin-left: 1vw; 
										margin-top: 2vh;
									</style>
									<a className="glyphicon glyphicon-ok"><style>color: black; margin-left: 0.7vw; margin-top: 1.1vh; text-decoration: none; font-size: 1vw;"</style></a> 
								</p>
								<p id="option1">
									<style> position: absolute; margin-left: 4vw; margin-top: 3vh;</style>
									{this.data.option1}
								</p>
							</p>
							<p className="Rounded-Rectangle-4">
								<style>
									position: absolute; margin-left: 1vw; margin-top: 10vh;
								</style>
								<p className="Rounded-Rectangle-4-copy">
									<style>
										position: absolute; margin-left: 1vw; margin-top: 10vh;
									</style>
									<a className="glyphicon glyphicon-ok">
										<style>
											color: black; margin-left: 0.7vw; margin-top: 1.1vh; text-decoration: none; font-size: 1vw;
										</style>
									</a> 
								</p>
								<p id="option2">
									<style>
										position: absolute; 
										margin-left: 4vw; 
										margin-top: 11vh;
									</style>
									{this.data.option2}
								</p>
							</p>
							<p className="Rounded-Rectangle-4">
								<style>
									position: absolute; margin-left: 1vw; margin-top: 18vh;
								</style>
								<p className="Rounded-Rectangle-4-copy">
									<style>
										position: absolute; margin-left: 1vw; margin-top: 18vh;
									</style>
									<a className="glyphicon glyphicon-ok"><style>color: black; margin-left: 0.7vw; margin-top: 1.1vh; text-decoration: none; font-size: 1vw;</style></a> 
								</p>
								<p id="option3"><style>position: absolute; margin-left: 4vw; margin-top: 19vh;</style>{this.data.option3}</p>
							</p>
							<p className="Rounded-Rectangle-4">
								<style>
									position: absolute; margin-left: 1vw; margin-top: 26vh;
								</style>
								<p className="Rounded-Rectangle-4-copy">
									<style>
										position: absolute; margin-left: 1vw; margin-top: 26vh;
									</style>
									<a className="glyphicon glyphicon-ok">
										<style>
											color: black; margin-left: 0.7vw; margin-top: 1.1vh; text-decoration: none; font-size: 1vw;
										</style>
									</a>
								</p>
								<p id="option4">
									<style>
										position: absolute; margin-left: 4vw; margin-top: 27vh;
									</style>
									{this.data.option4}
								</p>
							</p>
						</div>


						<div className="Rounded-Rectangle-1-copy-2">
							<style>
								position: absolute;
							</style>
							<p className="SKIP">SKIP</p>
						</div>
						<div className="Rounded-Rectangle-1-copy">
							<style>
								position: absolute;
							</style>
							<p className="SUBMIT">
								<form action="" onsubmit="nextRecord()">
		  							<input type="submit" value="Submit"/>
								</form>
							</p>
						</div>

						<div>
							<style>position: absolute; top: 21vh; margin-left: 62vw; z-index: 2;</style>
							<img src={"vector-smart-object-badge/vector-smart-object.png"} srcset={"vector-smart-object-badge/vector-smart-object@2x.png 2x, vector-smart-object-badge/vector-smart-object@3x.png 3x"} className="Vector-Smart-Object" /*style="height: 20vh; width: 20vw;"*/ />
						</div>
						
						<div class="Rectangle-4-copy-3">
							<style>
								position: absolute; margin-left: 59vw; top: 27vh; overflow: hidden; text-overflow: ellipsis;
							</style>
							<p className="-more-right-answers-to-earn-a-badge-Get-it-quick-to-move-stra">3 more right answers to earn a badge. Get it quick to move straight to rank 2!</p>
						</div>

					</div>
					
				</div>
			</div>

			);
	}
}



// Component to be rendered on clicking the View leaderboard

class VIEW_LEADERBOARD extends React.Component {

	constructor(props) {
	    super(props);
	    // This binding is necessary to make `this` work in the callback
	    this.handleClick = this.handleClick.bind(this);
	    this.APIcall = this.APIcall.bind(this);
	    this.data = {};
    }

	APIcall(){	
		fetch('https://jsonplaceholder.typicode.com/posts/1')
  		.then(response => response.json())
 		.then( (json) => { 
 		this.data = json
		ReactDOM.render(<div><h1>{this.data.title}</h1></div>,document.getElementById('rep_lead'))
        })
 	}

    handleClick () {
    		ReactDOM.render(<div><h1>"replaced by quiz"</h1></div>,document.getElementById('rep_lead'));
	};

			
    render(){
		return (
		<div>
			<div onClick={() => this.handleClick()}>VIEW_LEADERBOARD </div> 
		</div>		
		);	
    }
}
setTimeout(30000);
const app2 = document.getElementById('Rounded-Rectangle-1');
ReactDOM.render(<Details/>,app2);
const app = document.getElementById('app');
ReactDOM.render(<VIEW_LEADERBOARD/>,app);
const app1 = document.getElementById('quiz_link');
ReactDOM.render(<Quiz/>,app1);



export default App;
