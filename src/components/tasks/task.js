import React, { Component } from 'react';
import './task.css';

class Post extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="card no-radius bg-dark border-dark">
                    <div className="card-body">
                        <h5 className="card-title">
                            Title
                        </h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <button type="button" className="closeButton btn btn-outline-dark">
                                &times;
                        </button>
                    </div>
                    <div>
                        </div>
                </div>
            </div>
         );
    }
}
 
export default Post;