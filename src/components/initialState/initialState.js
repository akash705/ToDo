import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link,Navigation,withRouter} from 'react-router-dom';


import Hoc from './../hoc/hoc';
import './initialState.css';

class InitialStateButton extends Component {
    state = {  }
    componentDidMount(){
    }
    createPage=()=>{
            this.props.history.push('create');
    }
    render() { 
        var a=null;
        if(this.props.tasks && this.props.tasks.length){
            // creating Button on Corner
            a=(
                <Hoc>
                     <div className="smallButton">
                        <div className="center position-relative" onClick={this.createPage}>
                            <i className="fa fa-plus absolute-center" aria-hidden="true"></i>
                        </div>
                    </div>
                </Hoc>
            )
        }else{
            // center
            a=(
                <Hoc>
                    <div className="centerButton d-flex justify-content-center align-items-center" onClick={this.createPage}>
                        <div className="center position-relative">
                            <i className="fa fa-plus absolute-center" aria-hidden="true"></i>
                        </div>
                    </div>
                    <p className="p-0 m-0 text-center w-100" >
                        Create  + to get started.
                    </p>
                </Hoc>
            )
        }

        return a;
    }
}
 
var mapToProperty=(state)=>{
    return {
        tasks:state.tasks
    }
}

export default connect(mapToProperty,null)(withRouter(InitialStateButton));