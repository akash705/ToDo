import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from './components/loader/loader';
import Task from './components/tasks/task'
import Hoc from './components/hoc/hoc';
import InitialState from './components/initialState/initialState';
import './App.css';

class App extends Component {
  state={
    isLoading:true
  }
  componentDidMount(){
    // Aritifical Delay For Loading Screen.....
    setTimeout(data=>{
      this.setState((state)=>{
        return {
          isLoading:false
        }
      });
    },2000);
    
  }
  render() {
    return (
      <div className={(this.state.isLoading)?"App background-gradient2":"App background-gradient3"}>
        { (this.state.isLoading)?<Loader></Loader>:
            <Hoc>
              <InitialState></InitialState>
              {(this.props.tasks.length)?<Task></Task>:null}
            </Hoc> }
      </div>
    );
  }
}


// Redux==============
var mapToProperty=(state)=>{
  return{
    tasks:state.tasks
  }
}
var dispatchProperty=(dispatcher)=>{
  return {
      dispatch:()=>dispatcher()
  }
}
export default connect(mapToProperty,dispatchProperty)(App);
