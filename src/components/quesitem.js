import React, { Component } from 'react';

import RadioInput from './radioinput';

class QuesItem extends Component{





  onChangeHandler = (event) =>{
    //  console.log(event.target.value);
    // return event.target.value;
    console.log(event.target.value);
      // return event.target.value;
      this.props.onTopChangeHandler(event.target.value);
  }


  generateOpts = (self) => {
    return this.props.options.map(function(option, i){

      return(
          <RadioInput
            key={"option" + i}
            option={ option }
            checked={ self.props.ischecked === option }
            onChanged={ self.onChangeHandler }
          />
        );
      });
  }



  render(){




    return(
      <div>
        <strong>{this.props.question}</strong>
        { this.generateOpts(this) }
      </div>
    )
  }
}

export default QuesItem;
