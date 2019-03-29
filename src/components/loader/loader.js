import React,{Component} from 'react';
import {connect} from 'react-redux';

import './loader.css';

export class Loading extends Component{
    componentDidMount(){
    }
    render(){
        return (
            <div className="loading-container">
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    <p className="p-0 m-0">
                        Loading
                    </p>
            </div>
        )
    }
}
export default connect(null,null)(Loading)