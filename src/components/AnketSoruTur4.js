import React, { Component } from 'react'

export class AnketSoruTur4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            Image:''
          }
          this.onImageChange = this.onImageChange.bind(this)
    }
 
    onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        this.setState({
          file: URL.createObjectURL(img),
          Image:event.target.files[0].name
        });
        this.props.parentCallBack(event.target.files[0]);
      } 
    };
      render() { 
        return (
          <form 
          method="post" 
          enctype="multipart/form-data" 
          action="https://localhost:44377/api/QuestionTypeImage/uploadfile"
        >
            <div>
                <label for="img">Image File</label>
                <input name="img" type="file" />
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
        );
      }
}

export default AnketSoruTur4
