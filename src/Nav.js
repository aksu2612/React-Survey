import React from 'react';
import {Link} from 'react-router-dom'
import './App.css'
function Nav(){
 return(
     <div className="navbar">
         <nav  >

             <h1>logo</h1>
             <ul>
                 <Link to="/" > <li>Home</li></Link>
                 <Link to="/Deneme" > <li>Deneme</li> </Link> 
           
                 <Link to="/Login"  > <li>Login</li> </Link> 
             </ul>
         </nav>
     </div>
 )
}
export default Nav;
