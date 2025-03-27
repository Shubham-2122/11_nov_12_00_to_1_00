// props :- it's a protiy 
// data read :- we can not change data
// props :- one component to another component use trs
// props we can not use
// props as well paramter
// constru and super props 

import React, { Component } from 'react'

class Class_props extends Component {
    constructor(props) {
        super(props);
        this.data = props;
    }
    render() {
        return (
            <div className='col-md-4'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.data.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.data.title}</h5>
                        <p className="card-text">{this.data.desc}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Class_props;
