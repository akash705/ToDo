import React, { Component } from 'react';
import { connect } from 'react-redux';

import './task.css';

class Post extends Component {
    state = {  }
    render() { 
        return ( 
            this.props.tasks.map(data=>{
                return (
                    <div className="container-fluid" key={data.id}>
                        <div className="card no-radius bg-dark border-dark">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {data.title}
                                </h5>
                                <p className="card-text">
                                    {data.description}
                                </p>
                                <button type="button" className="closeButton btn btn-outline-dark">
                                        &times;
                                </button>
                            </div>
                            <div className="card-footer clearfix ">
                                    <span className="">
                                            Creation Date: {
                                                new Date(data.expiryDate).getDate() +" / " + new Date(data.expiryDate).getMonth() + " / "+ new Date(data.expiryDate).getFullYear()
                                            }
                                    </span>
                                    <span className="float-right">
                                            Expiry Date: {
                                                new Date(data.expiryDate).getDate() +" / " + new Date(data.expiryDate).getMonth() + " / "+ new Date(data.expiryDate).getFullYear()
                                            }
                                    </span>
                                {/* <span className="float-right">
                                    Expiry Date: {(new Date(data.expiryDate)).toString()}
                                </span>
                                 */}
                            </div>
                        </div>
                    </div>
                )
            })
         );
    }
}
 
var mapToProperty=(state)=>{
    return {
        tasks:state.tasks
    }
}
export default connect(mapToProperty,null)(Post);