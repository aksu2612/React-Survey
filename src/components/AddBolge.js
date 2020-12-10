import React, { Component} from 'react'; 
import axios from 'axios';
import NumericInput from 'react-enhanced-numeric-input';  
import TimeField from 'react-simple-timefield';
import moment from 'moment';
class AddBolge extends Component {
    constructor(props) {
        super(props);
        this.state={
            BolgeAd:'',  
        } 
        this.handleName=this.handleName.bind(this);
        this.onPosts=this.onPosts.bind(this);
        
 
    } 
    async onPosts(){ 
      try{ 
        let params = {
          BolgeAd:this.state.BolgeAd,  
          }
          
          const url= 'https://localhost:44377/api/Bolges';
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
          alert("Bölge Başarı ile Kaydedildi");
          console.log(res);  
          }
          catch(e)
          {
            console.log(e);
          } 
        
    }
    handleName(props){

        this.setState({
            BolgeAd:props.target.value
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
                  <label htmlFor="form10">Bölge Adı Yazınız.</label>
                </div>
                
                  <button className="form-control" onClick={this.onPosts} >Bölgeyi Kaydet</button>
                     
                  </div>
               
                </div>
            </div>
          </div>
        );
      }
}

export default AddBolge
