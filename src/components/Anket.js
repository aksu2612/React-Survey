import React ,{Component}  from "react";  
import axios from 'axios'; 
import AnketSoruTur0 from './AnketSoruTur0';
import AnketSoruTur1 from './AnketSoruTur1';
import AnketSoruTur2 from './AnketSoruTur2';
import AnketSoruTur3 from './AnketSoruTur3';
import AnketSoruTur4 from './AnketSoruTur4';



class Anket extends Component {
  constructor(props) {
    super(props);
  
      this.state={ 
        QuestionTypeID:0,
        QuestionText: '', 
        SurveyID: 0,
        QuestionTypeConst:'' ,
        FBolge:[] , 
        Image:'',
        ImageFile:null,
      }
      this.questionType=this.questionType.bind(this);
      this.postData=this.postData.bind(this); 
      this.handleSurveyType=this.handleSurveyType.bind(this);
      this.handlerExam=this.handlerExam.bind(this);
      this.handleBolgeCLick=this.handleBolgeCLick.bind(this); 
}
componentDidMount(){ 
  this.handleBolgeCLick();
}     
handleBolgeCLick(){
  const url='https://localhost:44377/api/Bolges'; 
  axios.get(url)
  .then(response=> { this.setState({FBolge: response.data}); }) 
  .catch(error=>{ 
    console.log(error)
  }) 

  return(this.state.FBolge); 
}
  async  postData(){   
    try{
  
//    let params = {
//        QuestionText:this.state.QuestionText, 
//        SurveyID:this.state.SurveyID, 
 //       QuestionTypeID:this.state.QuestionTypeID,  
 //       Image:this.state.Image

//      }
    let params2={
      Image:this.state.Image,
       ImageFile:this.state.ImageFile
      }
 //     const url= 'https://localhost:44377/api/'+this.state.QuestionTypeConst;
 //     let res = await axios.post(url , params  ,
 //     {
 //       method:'POST',
 //       url:url,
 //       data:params,
 //       headers:{
 //         "Content-type":"application/json",
 //         "Access-Control-Allow-Origin":'*'
 //       }
 //     });
  //    alert("Anket Sorusu Kaydedildi");
 //     console.log(res);  
      const url2= 'https://localhost:44377/api/QuestionTypeImage/uploadfile';
      const formData=new FormData();
      formData.append(this.state.Image,this.ImageFile);
      let res2 = await axios.post(url2 , formData  ,
        {
          method:'POST', 
          url:url2, 
          data:formData,
          headers:{
            "Content-type":"multipart/form-data",
            "Access-Control-Allow-Origin":'*'
          }
        });
      }
      catch(e)
      {
        console.log(e);
      } 
    
    }
  handleSurveyType(props){

  this.setState({
    SurveyID:parseInt(props.target.value)
  });
       console.log(props.target.value);
  }
  handlerExam(props){     
    this.setState({
      QuestionText: props.target.value
     });
  }

  questionType(props) {
    this.setState({
      QuestionTypeID:props.target.value
    });
    if(props.target.value==0){
      this.setState({ 
        currentView: "AnketSoruTur0",
        QuestionTypeConst:"QuestionTypeYesNoes/"
      }); 
    }
    if(props.target.value==1){
      this.setState({ 
        currentView: "AnketSoruTur3",
        QuestionTypeConst:"QuestionTypeYesNoes/"
      }); 
    }
    if(props.target.value==2){
      this.setState({ 
        currentView: "AnketSoruTur2",
        QuestionTypeConst:"QuestionTypeThrees/"
      }); 
      
    }
    if(props.target.value==3){
      this.setState({ 
        currentView: "AnketSoruTur1",
        QuestionTypeConst:"QuestionTypeFiveChoseSurveys/"
      });
    }
    if(props.target.value==4){ 
      this.setState({ 
        currentView: "AnketSoruTur4",
        QuestionTypeConst:"QuestionTypeImages/"
      }); 
    } 
    console.log(this.state.QuestionTypeID);
    console.log( props.target.value)
  }  
  anketResim=(props)=>{
      this.setState({
        Image:props.name,
        ImageFile:props,
      })
    console.log(props);
  }
 
render(){
  return (
    <div className="about">
      <div className="container">
      <div className="row align-items-center my-5" >
        <div className="col-lg-12">
          <select className="browser-default custom-select custom-select-lg mb-3"  onChange={value=>this.handleSurveyType(value)}  >
            <option value="0">Anket Seçiniz</option>
            {this.props.FAnket.map((e)=> 
            <option value={e.ID} key={e.ID}>{e.AnketAdi}</option>
          )}
          </select>
          <select className="browser-default custom-select custom-select-lg mb-3" onChange={value=>this.questionType(value)} >
            <option value="0">Soru Tipi Seçiniz</option>
            {this.props.Question.map((e)=> 
            <option value={e.ID} key={e.ID}>{e.QuestionTypeName}</option>
          )}
            
          </select>
          <div className="md-form">
            <i className="fas fa-pencil-alt prefix"></i>
            <textarea id="form10" className="md-textarea form-control" rows="3"  onChange={value=>this.handlerExam(value)}></textarea>
            <label htmlFor="form10">Sorunuzu Yazınız.</label>
          </div>
     
         
          { this.state.currentView == 'AnketSoruTur0' && (
              <AnketSoruTur0 />
          )}
         
          { this.state.currentView == 'AnketSoruTur1' && ( 
             <AnketSoruTur1  />
          )}
          { this.state.currentView == 'AnketSoruTur2' && (
              <AnketSoruTur2 />
          )}
           { this.state.currentView == 'AnketSoruTur3' && (
              <AnketSoruTur3 />
          )}
               { this.state.currentView == 'AnketSoruTur4' && (
              <AnketSoruTur4 parentCallBack={this.anketResim}/>
          )}
         
 
       
          <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" onClick={this.postData} >Soruyu Kaydet</button>
    
          </div>
        </div> 
       </div>
    </div>
  );
}
} 
export default Anket;