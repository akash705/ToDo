import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import actionCreators from '../../store/action-creators/action-creators';
import './task.css';

class Post extends Component {
    state = {  }
    componentDidMount(){
        console.log(this.props.tasks);
    }
    deletePost=(index)=>{
        this.props.dispatchEvent({index:index});
    }
    edit=(index)=>{
        this.props.history.push('updatePost/'+index,{
            params:{
                id:'akash'
            }
        });
        // console.log()
    }
    render() { 
        return ( 
            this.props.tasks.map((data,index)=>{
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
                                <button type="button" className="closeButton btn btn-outline-dark" 
                                    onClick={()=>this.deletePost(index)}>
                                    <i className="fas fa-times"></i>
                                </button>
                                <button type="button" className="closeButton edit btn btn-outline-dark"
                                 onClick={(ev)=>{this.edit(index,ev)}}>
                                    <i className="far fa-edit"></i>
                                </button>
                            </div>
                            <div className="card-footer clearfix ">
                                    <span className="">
                                            Creation Date: {
                                                new Date(data.creationDate).getDate() +" / " + new Date(data.creationDate).getMonth() + " / "+ new Date(data.creationDate).getFullYear()
                                            }
                                    </span>
                                    <span className="float-right">
                                            Expiry Date: {
                                                new Date(data.expiryDate).getDate() +" / " + new Date(data.expiryDate).getMonth() + " / "+ new Date(data.expiryDate).getFullYear()
                                            }
                                    </span>
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
var dispatch=(dispatched)=>{
    return {
        dispatchEvent:(data)=>dispatched(actionCreators.Delete(data))
    }
}
export default connect(mapToProperty,dispatch)(withRouter(Post));