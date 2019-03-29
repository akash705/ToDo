import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  componentDidUpdate(){
    console.log(this.props.tasks);
  }
  render() {
    return (
      <div className="background-gradient1 App">
        Hello React
      </div>
    );
  }
}


// Redux==============
var mapToProperty=(state)=>{
  return{
    ...state,
    tasks:state.tasks
  }
}
var dispatchProperty=(dispatcher)=>{
  return {
      dispatch:()=>dispatcher()
  }
}
export default connect(mapToProperty,dispatchProperty)(App);
