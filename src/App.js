import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Loader from './components/loader/loader';
import CreateTask from './components/create/create';
import Hoc from './components/hoc/hoc';
import TaskWrapper from './components/task-wrapper/task-wrapper';
import UpdatePost from './components/updatePost';
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
      <Router>
            <div className={(this.state.isLoading)?"App background-gradient2":"App background-gradient3"}>
                { (this.state.isLoading)?<Loader></Loader>:
                    <Hoc>
                      <Route exact path="/" component={TaskWrapper} />
                      <Route exact path="/create" component={CreateTask} />
                      <Route exact path="/updatePost/:id" component={UpdatePost} />
                    </Hoc> 
                }
                
            
            
            </div>
      </Router>
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
