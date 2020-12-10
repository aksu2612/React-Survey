import React, { Component ,useState} from 'react';
import HomeEntry from './components/HomeEntry'
import Anket from './components/Anket'
import Yarisma from './components/Yarisma'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar'; 
import axios  from 'axios';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      fillAnket:[],
      fillBolge:[],
      fillExam:[],
      fillQuestion:[]
    }
    this.handleSurveyClick=this.handleSurveyClick.bind(this);
    this.handleBolgeCLick=this.handleBolgeCLick.bind(this);
    this.handleQuestionTypeClick=this.handleQuestionTypeClick.bind(this);

  }
    componentDidMount(){
      this.handleSurveyClick();
      this.handleBolgeCLick();
      this.handleExamCLick();
      this.handleQuestionTypeClick();
    }     
    handleBolgeCLick(){
      const url='https://localhost:44377/api/Bolges'; 
      axios.get(url)
      .then(response=> { this.setState({fillBolge: response.data}); }) 
      .catch(error=>{ 
        console.log(error)
      }) 

      return(this.state.fillBolge); 
    }
    handleExamCLick(){
      const url='https://localhost:44377/api/ExamInfoes'; 
      axios.get(url)
      .then(response=> { this.setState({fillExam: response.data}); }) 
      .catch(error=>{ 
        console.log(error)
      }) 

      return(this.state.fillExam); 
    }
    
    handleQuestionTypeClick(){ 
      const url='https://localhost:44377/api/QuestionTypes'; 
      axios.get(url)
      .then(response=> { this.setState({fillQuestion: response.data}); }) 
      .then(response=>{     }) 
      .catch(error=>{ 
        console.log(error)
      }) 
 
      return(this.state.fillQuestion); 
      }
   handleSurveyClick(){ 
     const url='https://localhost:44377/api/SurveyInfoes'; 
     axios.get(url)
     .then(response=> { this.setState({fillAnket: response.data}); }) 
     .then(response=>{     }) 
     .catch(error=>{ 
       console.log(error)
     }) 

     return(this.state.fillAnket); 
     }
  render() {
  
    return (   
      <div className ="App">
        <Router>
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={() => <HomeEntry />} />
            <Route path="/components/Anket" exact component={() => <Anket Question={this.state.fillQuestion}  FAnket={this.state.fillAnket} FBolge={this.state.fillBolge} />} />
            <Route path="/components/Yarisma" exact component={() => <Yarisma FSinav={this.state.fillExam} FBolge={this.state.fillBolge}/>} />
          </Switch>
        
        </Router>
     </div>   
    );
  }
}
 
export default Home;