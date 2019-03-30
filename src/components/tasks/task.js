import React, { Component } from 'react';
import { connect } from 'react-redux';

import './task.css';

class Post extends Component {
    state = {  }
    componentDidMount(){
        console.log(this.props.tasks);
    }
    render() { 
        return ( 
            this.props.tasks.map(data=>{
                return (
                    <div className="container-fluid" key={data.id}>
                        <div className="card no-radius bg-dark border-dark">
                            <div className="card-header">
                            { (data.status=="active") ? 
                                        <button className="btn btn-outline-danger">
                                                Active
                                        </button>:(
                                            <button className="btn btn-outline-primary">
                                                    Completed
                                            </button>
                                        ) }
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {data.title}
                                </h5>
                                <p className="card-text">
                                    {data.description}
                                </p>
                                <button type="button" className="closeButton btn btn-outline-dark">
                                    <i className="fas fa-times"></i>
                                </button>
                                <button type="button" className="closeButton edit btn btn-outline-dark">
                                    <i className="far fa-edit"></i>
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