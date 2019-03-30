import  { Component } from 'react';

class HOC extends Component {
    state = {  }
    render() { 
        return ( this.props.children );
    }
}
 
export default HOC;