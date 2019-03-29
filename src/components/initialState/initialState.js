import React, { Component } from 'react';
import {connect} from 'react-redux';
import Hoc from './../hoc/hoc';

import './initialState.css';

class InitialStateButton extends Component {
    state = {  }
    render() { 
        var a=null;
        if(this.props.tasks && this.props.tasks.length){
            // creating Button on Corner
        }else{
            // center
            a=(
                <Hoc>
                    <div className="centerButton d-flex justify-content-center align-items-center">
                        <div className="center position-relative">
                            <i className="fa fa-plus absolute-center" aria-hidden="true"></i>
                        </div>
                    </div>
                    <p className="p-0 m-0 text-center w-100">
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

export default connect(mapToProperty,null)(InitialStateButton);