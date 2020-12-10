 import React,{ useState} from 'react'; 
import './Login.css'; 
  const Login =(props)=>{
    console.log(props.validation)
    const [details,setdetails]=useState({email: "" ,password:"",dizi:[]});
    const [check,setCheck]=useState(false);
    const submitHandler=e=>{
      e.preventDefault();
     // Loginfunc(details);
    }
    function LoginCheck(){
     props.loginHandler(details);
     }
  return(
  <form onSubmit={submitHandler}>
    <div className="form-inner">
        <h2>GİRİŞ</h2> 
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={e=>setdetails({...details,email:e.target.value})}  ></input>
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={e=>setdetails({...details,password:e.target.value})}  ></input>
       </div>
               <input type="submit" onClick={()=>LoginCheck(details)} value="GİRİŞ"/>
       <a href="./Kayit">KAYIT</a>
    </div>
  </form>
  )
  }
  export default Login;