import React,{Component} from "react";
import axios from 'axios'; 
class Yarisma extends Component {
  constructor(props) {
    super(props);

    this.state={
       QuestionText:'',
       Option1: '',
       Option2: '',
       Option3: '',
       Option4: '',
       Option5: '',
       CorrectAnswer: '',
       SurveyID:1,
       BolgeID:1,
       Bolgedizi:this.props.FBolge,
       SinavDizi:this.props.FSinav,
    
    }
    this.postData=this.postData.bind(this); 
    this.handlerA=this.handlerA.bind(this);
    this.handlerB=this.handlerB.bind(this);
    this.handlerC=this.handlerC.bind(this);
    this.handlerD=this.handlerD.bind(this);
    this.handlerE=this.handlerE.bind(this);
 this.handleGroupClick=this.handleGroupClick.bind(this);
 this.onchangeExam=this.onchangeExam.bind(this);
  }
  
   
 
 async  postData(){ 

 try{

  let params = {
     QuestionText:this.state.QuestionText,
     Option1: this.state.Option1,
     Option2:this.state.Option2,
     Option3: this.state.Option3,
     Option4: this.state.Option4,
     Option5: this.state.Option5,
     CorrectAnswer: this.state.CorrectAnswer,
     SurveyID:this.state.SurveyID,
     BolgeID:this.state.BolgeID
   }
   const url= 'https://localhost:44377/api/QuestionTypeFiveChoseExams/';
   let res = await axios.post(url , params  ,
    {
      method:'POST',
      url:url,
      data:params,
     headers:{
       "Content-type":"application/json",
       "Access-Control-Allow-Origin":'*'
     }
   });
   alert("Sınav Sorusu Kaydedildi");
   console.log(res);  
   }
    catch(e)
    {
      console.log(e);
    } 
 
  }
    
 handlerA(props){
  this.setState({Option1:props.target.value})
  }
 handlerB(props){
  this.setState({Option2:props.target.value})
  }
handlerC(props){
  this.setState({Option3:props.target.value})
  }
 handlerD(props){  
  this.setState({Option4:props.target.value})
  }
handlerE(props){
  this.setState({Option5:props.target.value});
  }
 handlerCorrectAnswer(props){ 
 
  if(props.target.id=='defaultGroupExample1')
  { console.log( "cevap1");
  this.setState({CorrectAnswer:this.state.Option1});
  }
  if(props.target.id=='defaultGroupExample2')
  { console.log( "cevap2");
  this.setState({CorrectAnswer:this.state.Option2});
  }
  if(props.target.id=='defaultGroupExample3')
  { console.log( "cevap3");
  this.setState({CorrectAnswer:this.state.Option3});
  }
  if(props.target.id=='defaultGroupExample4')
  { console.log( "cevap4");
  this.setState({CorrectAnswer:this.state.Option4});
  }
  if(props.target.id=='defaultGroupExample5')
  { console.log( "cevap5");
  this.setState({CorrectAnswer:this.state.Option5});
  }

  } 
 onchangeExam(props){ 
  console.log(props.target.value) 
  this.setState({SurveyID: props.target.value }) 
  }
 handleGroupClick(props){ 
  console.log(props.target.value)
    this.setState({BolgeID: props.target.value})
   
}
componentDidMount() {
  this.intervalID = setInterval(
    () => this.tick(),
    1000
  );
}
componentWillUnmount() {
  clearInterval(this.intervalID);
}
tick() {
  this.setState({
    time: new Date().toLocaleString()
  });
}
handlerExam(props){     
  this.setState({
    QuestionText: props.target.value
   });
}

 
render(){
  const {Bolgedizi}=this.state;
  
  const {SinavDizi}=this.state;
  return (
    <div className="about">
      <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-lg-12">

          <select className="browser-default custom-select custom-select-lg mb-3" onChange={value => this.onchangeExam(value)}>
            <option selected>SINAV SEÇİNİZ</option> 
            {this.props.FSinav.map((e)=> 
            <option value={e.Id} key={e.Id}>{e.SinavAdi}</option>
          )}
          </select> 
          <div className="md-form">
            <i className="fas fa-pencil-alt prefix"></i>
            <textarea id="form10" className="md-textarea form-control" rows="3" value={this.state.QuestionText} onChange={value=>this.handlerExam(value)}></textarea>
            <label htmlFor="form10">Sorunuzu Yazınız.</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios" onChange={value=>this.handlerCorrectAnswer(value)}/>
            <label className="custom-control-label" htmlFor="defaultGroupExample1">A</label>
          </div>
          <div className="md-form">
            <input type="text" id="answer1" placeholder="A şıkkı" className="form-control"  onChange={value =>this.handlerA(value)}/>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" onChange={value=>this.handlerCorrectAnswer(value)} />
            <label className="custom-control-label" htmlFor="defaultGroupExample2">B</label>
          </div>
          <div className="md-form">
           <input type="text" id="answer2" placeholder="B şıkkı" className="form-control" onChange={value => this.handlerB(value)}/>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios"onChange={value=>this.handlerCorrectAnswer(value)}/>
            <label className="custom-control-label" htmlFor="defaultGroupExample3">C</label>
          </div>
          <div className="md-form">
            <input type="text" id="answer3" placeholder="C şıkkı" className="form-control" onChange={value => this.handlerC(value)}/>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="defaultGroupExample4" name="groupOfDefaultRadios"onChange={value=>this.handlerCorrectAnswer(value)}/>
            <label className="custom-control-label" htmlFor="defaultGroupExample4">D</label>
          </div>
          <div className="md-form">
            <input type="text" id="answer4" placeholder="D şıkkı" className="form-control"onChange={value => this.handlerD(value)}/>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="defaultGroupExample5" name="groupOfDefaultRadios"onChange={value=>this.handlerCorrectAnswer(value)}/>
            <label className="custom-control-label" htmlFor="defaultGroupExample5">E</label>
          </div>
          <div className="md-form">
            <input type="text" id="answer5" placeholder="E şıkkı" className="form-control"onChange={value => this.handlerE(value)}/>
          </div>
          <select className="browser-default custom-select custom-select-lg mb-3"  onChange={value => this.handleGroupClick(value)}>
            <option value={0}>Tüm Bölgeler</option>
         {this.props.FBolge.map((e)=>
   
         <option value={e.ID} key={e.ID}>{e.BolgeAd}</option>
         )}


                 
 
          </select>
          <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" onClick={this.postData}  >Soruyu Kaydet</button>
     
            </div>
         
          </div>
      </div>
    </div>
  );
}}

export default Yarisma;