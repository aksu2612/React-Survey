import React, { Component} from 'react'; 
import axios from 'axios';
import NumericInput from 'react-enhanced-numeric-input';  
import TimeField from 'react-simple-timefield';
import moment from 'moment';
class AddSinav extends Component {
    constructor(props) {
        super(props);
        this.state={
          SinavAdi:'',
            MaxSure: '00:05:00',
            MaxSoruSayisi:0, 
            fillBolge:[],
            timeValue:0,
            momentValue:5,      
            time: '00:05:00',

            dateToFormat :'1976-04-19T12:59-0500',
            start : moment(5)  

        }
        this.onPosts=this.onPosts.bind(this);
        this.handleName=this.handleName.bind(this);
        this.onChangeNumber=this.onChangeNumber.bind(this);    
        this.onChangeTime=this.onChangeTime.bind(this); 
       
       this.handleBolgeCLick=this.handleBolgeCLick.bind(this); 
 
    }

 componentDidMount(){ 
      this.handleBolgeCLick(); 
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
    async onPosts(){ 
      try{ 
        let params = {
          SinavAdi:this.state.AnketAdi, 
          MaxSure:this.state.MaxSure, 
          MaxSoruSayisi :this.state.MaxSoruSayisi 
          }
          
          const url= 'https://localhost:44377/api/ExamInfoes';
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
          alert("Sınav Başarı ile Kaydedildi");
          console.log(res);  
          }
          catch(e)
          {
            console.log(e);
          } 
        
    }
    handleName(props){

        this.setState({
            AnketAdi:props.target.value
        })
    }
    onChangeNumber(props){
      this.setState({
        MaxSoruSayisi:props.target.value
      })
      console.log(this.state.MaxSure)
    }
     onChangeTime(event){
     
      this.setState({ MaxSure:event.target.value })
 
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
    handleBolge(props){
      console.log(props.target.value);
        this.setState({
            BolgeID:props.target.value
        })
    }
    
  
 
      render() { 
        const {time} = this.state;
        return (
            <div className="about">
            <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-12">
                <div className="md-form">
                  <i className="fas fa-pencil-alt prefix"></i>
                  <textarea id="form10" className="md-textarea form-control" rows="3" onChange={value=>this.handleName(value)} ></textarea>
                  <label htmlFor="form10">Sınav Adı Yazınız.</label>
                </div>
                <h5>Bölge Seçiniz</h5>
                <select className="browser-default custom-select custom-select-lg mb-3" onChange={value=>this.handleBolge(value)}  >
                  <option selected value='0'> Tüm Bölgeler </option> 
                  {this.state.fillBolge.map((e)=> 
                    <option value={e.ID} key={e.ID}>{e.BolgeAd}</option>
                  )}

                </select> 
                <h5>Max Soru Sayısı</h5>  
                <NumericInput className="form-control" placeholder="0"    onChange={(value)=>this.onChangeNumber(value)}/>
                <h5>Sınav Süresi </h5>
                <input
                      type="time"
                      step="2"
                      value={this.state.MaxSure}
                      className="form-control"
                      placeholder="Time"
                      onChange={(ev) => {this.setState({MaxSure:ev.target.value})}}
                    />       
                    <br/>       
                  <button className="form-control" onClick={this.onPosts} >Sınavı Kaydet</button>
                          {
                        
                          }
                  </div>
               
                </div>
            </div>
          </div>
        );
      }
}

export default AddSinav
