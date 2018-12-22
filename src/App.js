import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import QuesTitle from './components/questitle';
import QuesList from './components/queslist';





class App extends Component {
  constructor(props, context){
    super(props,context);

    this.state = {
      option:''
    }
  }







    questions = () =>{

      return [
        {
          "question" : "性別",
          "options" : ["男","女"]
        },
        {
          "question" : "年齡",
          "options" : ["18以下","18~25","26~35","35以上"]
        },
        {
          "question" : "婚姻狀況",
          "options" : ["已婚","未婚"]
        },
      ];
    }





  render() {




    return (
      <div className="App">
        <QuesTitle />
        <QuesList  questions={this.questions} />
      </div>
    );
  }
}

export default App;
