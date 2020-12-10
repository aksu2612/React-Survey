import React, { Component } from 'react'; 
import Home from './Home';
import Login from  './Login';  
import axios  from 'axios';
 class App extends Component{
  constructor(){
    super();
    this.state={
       isAuthenticated :true, 
       homes: [],
       person:null,
       user: {
        email:"",
        password:""
      }
    } 
    this.loginHandler = this.loginHandler.bind(this);
  } 
  
  
      loginHandler(props) {
   // GET request using fetch with error handling 
     const url='https://localhost:44377/api/Admins'; 
      axios.get(url)
      .then(response=> { props.dizi= response.data;}) 
      .then(response=>{ console.log(props.dizi.Eposta)  }) 
      .catch(error=>{ 
        console.log(error)
      })
      props.dizi.map((e)=>{
        if(e.Eposta==props.email && e.Sifre==props.password){  
        alert("giriş yapıldı");
        this.setState({
          isAuthenticated:false, 
        })
        }
        else{ 
          alert("Bilgilerinizi Kontrol Ediniz !!!");
        //  alert("Giriş Bilgilerinizi Kontrol Ediniz"); 
                 /*navigate to HomePage*/
        } 
      }  ) 
/*
           fetch(url  ,payload )
           .then(res=>res.json())
           .then(json=>{ 
               console.log(json);
          console.log(payload.Name);
          console.log(payload.Location);
           });
     */
   
    }
 
  render()
  {
    var {isAuthenticated,homes}=this.state;
  
    if( !isAuthenticated){
      return <Home/>
    }
    else {
      return (
        <div className="Apps">  
          <Login loginHandler={this.loginHandler}  />  
        </div> 
        ); 
    } 
  }
}
 
export default App;