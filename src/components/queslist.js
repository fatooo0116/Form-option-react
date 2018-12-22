import React, { Component } from 'react';


import QuesItem from './quesitem';


class QuesList extends Component{
    constructor(props, context){
      super(props,context);

      this.state = {
        formOption:""
      }
    }




    componentDidMount(){

      console.log(this);

      console.log('[App.js] Inside componentDidMount()');

      let form_option = {};
      const qs = this.props.questions();
      qs.map(function(quesInfo, i){
        form_option[quesInfo.question] = "0";
      });


      console.log(form_option);
      var me = this;
      setTimeout(function(){

        me.setState({
            formOption: form_option
          })
          console.log(me.state.formOption);
      },50);

    }


  getState = (key) =>{
    return  this.state.formOption[key];
  }

  setKeyState =(key)=>{
    console.log(key);
  }


  quesItems = () =>{

    const class_this = this;

    const qs = this.props.questions();
    return qs.map(function(quesInfo, i){

      // let isChecked = this.state.formOption[quesInfo.question];

      return (
        <li key={i} ><QuesItem
              key={i}
              question={quesInfo.question}
              options={quesInfo.options}
              ischecked={class_this.getState(quesInfo.question)}
              onTopChangeHandler={class_this.setKeyState}
        /></li>
      )
    });
  }



  render(){


    return(
      <div  className="main_form">
          <p>請撥空填寫</p>
          <ul>
            {this.quesItems()}
          </ul>
      </div>
    );
  }
}

export default QuesList;
