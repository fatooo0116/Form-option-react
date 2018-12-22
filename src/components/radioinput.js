import React, { Component } from 'react';


class RadioInput extends Component{
  constructor(props, context){
    super(props, context)
  }






  render(){
    return(
      <label >
        <input type="radio"
              value={this.props.option}
            //  checked={this.props.checked}
              onChange={this.props.onChanged}
        /> {this.props.option}
      </label>
    )
  }
}

export default RadioInput;
