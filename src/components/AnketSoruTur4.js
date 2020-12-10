import React, { Component } from 'react'

export class AnketSoruTur4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
          }
          this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }
      render() {
        return (
          <div>
            
            <br/>
            <input type="file" onChange={this.handleChange}/>
         
            <img src={this.state.file}/>
            <br/>
            <br/>
          </div>
        );
      }
}

export default AnketSoruTur4
