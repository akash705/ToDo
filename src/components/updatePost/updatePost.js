import React, { Component } from 'react';
import {connect} from 'react-redux';

import Hoc from './../hoc/hoc';
import actionCreators from '../../store/action-creators/action-creators';

class UpdatePost extends Component {
    state = { 
        title:'',
        description:'',
        status:'active',
        expiry:new Date().toISOString().substr(0, 10)
     };
    //  status must be either ACTIVE COMPLETED
    componentDidMount(){
        let filter = this.props.tasks[this.props.match.params.id];
        if(!filter){
            return this.props.history.goBack();
        }

        this.setState((state)=>{
            return {
                ...state,
                title:filter.title,
                description:filter.description,
                status:filter.status,
                expiry:new Date(filter.expiryDate).toISOString().substr(0, 10)
            }
        })
    }
    
    GetFormattedDate=(date)=> {
        var todayTime = new Date(date);
        var Month = todayTime .getMonth() + 1;
        var Day = todayTime .getDate();
        var Year =todayTime .getFullYear();
        return Year + "-" + Month + "-" + Day;
    }
    
    updateTask=()=>{
            // checking all Data
            if(!this.checkForValue(this.state.title)){
                alert('TItle is Required');
                return 0;
            }
            if(!this.checkForValue(this.state.description)){
                alert('Description is Required');
                return 0;
            }
            let format=this.GetFormattedDate(this.state.expiry);
            this.props.dispatchE({
              index:this.props.match.params.id,
              data:{
                title:this.state.title,description:this.state.description,expiryDate:format
                ,status:this.state.status
              }
            });
            this.props.history.goBack();
    }
    
    checkForValue=(data)=>{
        return data && data.trim();
    }
    
    valueChanged=(type,ev)=>{
        let data={
            [type]:ev.target.value
        }
        this.setState((state)=>{
            return {
             ...data
            }
          });    
    }
    
    render() { 
        return ( 
            <Hoc>
                    <div className="card create-card">
                        <div className="card-body">
                            <h5 className="card-title text-dark">Update Task</h5>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter a Title" aria-label="Title" 
                                value={this.state.title} onChange={(ev)=>this.valueChanged("title",ev)} 
                                />
                            </div>
                            <p className="p-0 m-0 text-dark">
                                    <label >Description:</label>
                            </p>
                            <div className="input-group mb-3">
                                    <textarea className="form-control"
                                     value={this.state.description} onChange={(ev)=>this.valueChanged("description",ev)} />
                            </div>
                            <p className="p-0 m-0 text-dark">
                                    <label >Expiry:</label>
                            </p>
                            <div className="input-group mb-3">
                            <input type='date' className="form-control" value={this.state.expiry} onChange={(ev)=>this.valueChanged("expiry",ev)} />
                                <span className="input-group-addon">
                                    <span className="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                            

                            
                            <p className="p-0 m-0 text-dark">
                                    <label >Status:</label>
                            </p>
                            <div className="input-group mb-3">
                                    <select className="form-control"  value={this.state.status} onChange={(ev)=>this.valueChanged("status",ev)}>
                                        <option value="active">Active</option>
                                        <option value="completed">Completed</option>
                                    </select>
                            </div>
                        </div>
                        <div className="card-footer text-muted bg-dark">
                            <button className="btn btn-outline-danger" onClick={this.updateTask}>
                                Update
                            </button>
                        </div>
                    </div>
            </Hoc>
         );
    }
}
var mapsToProperty=(state)=>{
    return {
        tasks:state.tasks
    }
}
var dispatchEvent=(dispatcher)=>{
    return {
        dispatchE:(data)=>dispatcher(actionCreators.Update(data))
    }
};
export default connect(mapsToProperty,dispatchEvent)(UpdatePost);