import React, { Component } from 'react'

export class AnketSoruTur1 extends Component {
    render() {
        return (
            <div>
              <h3>Örnek</h3>
                  <div className="custom-control custom-radio">
          <input type="radio" className="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios"  />
          <label className="custom-control-label" htmlFor="defaultGroupExample1">A</label>
        </div>
     

      
        <div className="custom-control custom-radio">
          <input type="radio" className="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" />
          <label className="custom-control-label" htmlFor="defaultGroupExample2">B</label>
        </div>
       
        
        <div className="custom-control custom-radio">
          <input type="radio" className="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios"/>
          <label className="custom-control-label" htmlFor="defaultGroupExample3">C</label>
        </div>
      
      
        <div className="custom-control custom-radio">
          <input type="radio" className="custom-control-input" id="defaultGroupExample4" name="groupOfDefaultRadios"/>
          <label className="custom-control-label" htmlFor="defaultGroupExample4">D</label>
        </div>
      

        <div className="custom-control custom-radio">
          <input type="radio" className="custom-control-input" id="defaultGroupExample5" name="groupOfDefaultRadios"/>
          <label className="custom-control-label" htmlFor="defaultGroupExample5">E</label>
        </div>
        <br/>
            <br/>
            </div>
        )
    }
}

export default AnketSoruTur1
