import React, { Component } from 'react';
// import Calendar from 'react-calendar';
import {connect} from 'react-redux';


import Hoc from './../hoc/hoc';
import './card.css';
import actionCreators from '../../store/action-creators/action-creators';

class create extends Component {
    state = { 
        title:'',
        description:'',
        status:'active',
        expiry:+new Date
     };
    //  status must be either ACTIVE COMPLETED
     componentDidMount(){
        console.log(this.props);
     }
    createTask=()=>{
            // checking all Data
            if(!this.checkForValue(this.state.title)){
                alert('TItle is Required');
                return 0;
            }
            if(!this.checkForValue(this.state.description)){
                alert('Description is Required');
                return 0;
            }
            console.log(this.state.status,'');
            this.props.dispatchE({
                title:this.state.title,description:this.state.description,expiryDate:this.state.expiry
                ,status:this.state.status
            });
            this.props.history.goBack();
    }
    checkForValue=(data)=>{
        return data && data.trim();
    }
    valueChanged=(type,ev)=>{
        console.log(type);
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
                            <h5 className="card-title text-dark">Create Task</h5>
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
                                     value={this.state.description} value={this.state.description} onChange={(ev)=>this.valueChanged("description",ev)} />
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
                            <button className="btn btn-outline-danger" onClick={this.createTask}>
                                Create
                            </button>
                        </div>
                    </div>
            </Hoc>
         );
    }
}
var dispatchEvent=(dispatcher)=>{
    return {
        dispatchE:(data)=>dispatcher(actionCreators.Create(data))
    }
};
export default connect(null,dispatchEvent)(create);