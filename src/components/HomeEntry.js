import React, { Component } from 'react'; 
 import AddAnket from './AddAnket'; 
 import AddSinav from './AddSinav';
 import AddBolge from './AddBolge';
class HomeEntry extends Component {
  constructor(props) {
    super(props);
   this.state={
    currentView:''
   }
   this.anketForm=this.anketForm.bind(this);
   this.sinavForm=this.sinavForm.bind(this);
   this.bolgeForm=this.bolgeForm.bind(this);
} 
anketForm(){
this.setState({
  currentView:'Anket'
})
}
sinavForm(){
  this.setState({
    currentView:'Sinav'
  })
}
bolgeForm(){
  this.setState({
    currentView:'Bolge'
  })
}
render(){
  return (
    <div className="about">
      <div className="container">
      <div className="row align-items-center my-5" >
        <div className="col-lg-12">
      
          
 
       
          <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" onClick={this.anketForm}  >Anket Ekle</button>
    
         
          <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"  onClick={this.sinavForm} >Sınav Ekle</button>

          <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"  onClick={this.bolgeForm} >Bölge Ekle</button>
          { this.state.currentView == 'Anket' && ( 
            <AddAnket />
          )} 
          { this.state.currentView == 'Sinav' && ( 
            <AddSinav />
          )} 
            { this.state.currentView == 'Bolge' && ( 
            <AddBolge />
          )} 
         
          </div>
        </div> 
       </div>
    </div>
  );
}
}
  export default HomeEntry;