import React, { Component } from 'react';
// import Calendar from 'react-calendar';
import {connect} from 'react-redux';

// import {withRouter} from 'react-router-dom';


import Hoc from './../hoc/hoc';
import './card.css';
import actionCreators from '../../store/action-creators/action-creators';

class update extends Component {
    state = { 
        title:'',
        description:'',
        status:null,
        expiry:new Date()
     };
    //  status must be either ACTIVE COMPLETED
    componentDidMount(){
        const { id } = this.props.match.params.id;
        let filterArray =( this.props.tasks)? this.props.tasks.filter(data=>{
            return data.id===id;
        }):[];
        if(!filterArray || !filterArray.length ){
            this.props.history.pop();
        }
    }
    createTask=()=>{
            // checking all Data
            if(!this.checkForValue(this.state.title)){
                alert('TItle is Required');
                return 0;
            }
            if(!this.checkForValue(this.state.description)){
                alert('TItle is Required');
                return 0;
            }
            this.props.dispatchE({
                index:index,
                data:{title:this.state.title,description:this.state.description,expiryDate:this.state.expiry}
            });
    }
    checkForValue=(data)=>{
        return data && data.trim();
    }
    valueChanged=(type,ev)=>{
        console.log(ev.target.value);
        this.setState({
            [type]:ev.target.value
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
                                value={this.state.description} onChange={(ev)=>this.valueChanged("title",ev)} 
                                />
                            </div>
                            <div className="input-group mb-3">
                                    <textarea className="form-control"
                                     value={this.state.description} onChange={(ev)=>this.valueChanged("description",ev)} />
                            </div>
                            <div className="input-group mb-3">
                                    {/* <Calender onChange={this.valueChanged} value={this.state.expiry}></Calender> */}
                            </div>
                        </div>
                        <div className="card-footer text-muted bg-dark">
                            <button className="btn btn-outline-danger" onClick={this.createTask}>
                                Update
                            </button>
                        </div>
                    </div>
            </Hoc>
         );
    }
}
var mapsToProperty=(state)=>{
    return{
        tasks:state.tasks
    }
}
var dispatchEvent=(dispatcher)=>{
    return {
        dispatchE:(data)=>dispatcher(actionCreators.Update(data))
    }
};
export default connect(mapsToProperty,dispatchEvent)(update);