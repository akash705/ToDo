import React, { Component } from 'react';
import {connect} from 'react-redux';


import Task from './../tasks/task';
import InitialState from './../initialState/initialState';

class TaskWrapper extends Component {
    state = {  }
    render() {
        //  + icon 
        var a = [(<InitialState key="1"></InitialState>)];
        if(this.props.tasks.length){
                a.push((<Task key="2"></Task>));
        } 
        
        return a;
    }
}
var mapsToProperty=(state)=>{
    return {
        tasks:state.tasks
    }
}
export default connect(mapsToProperty)(TaskWrapper);