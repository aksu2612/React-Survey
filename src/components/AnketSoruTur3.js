import React, { Component } from 'react'

export class AnketSoruTur3 extends Component {
    render() {
        return (
            <div>
                       <h3>Örnek</h3>
                <div className="custom-control custom-radio">
                    <input type="radio" className="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios"  />
                    <label className="custom-control-label" htmlFor="defaultGroupExample1">Evet</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" className="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" />
                    <label className="custom-control-label" htmlFor="defaultGroupExample2">Hayır</label>
                </div>
                <br/>
            <br/>
      </div>
        )
    }
}

export default AnketSoruTur3
