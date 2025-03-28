// state :- as varibale store
// state :- data change but same file use
// state we can change 
// state :- this.state = defined
// state change :- this.setstate 


import React, { Component } from 'react'
import Image from './Image';

class Class_state extends Component {
    constructor() {
        super();
        this.state = {
            name: "yug patel",
            count: 0,
            isimage: true,
            data : {
                front : "front-end",
                back : "Back-end"
            }
        }
    
    }
    
    handlechnage=()=>{
        this.setState({
            name : "shubham jadav"
        })
    }



    render() {
        return (
            <div>
                <h1>Tthis class state data</h1>
                <h2>hello name :- {this.state.name}</h2>

                <button onClick={()=>{this.setState({name : "divag patel"})}}>Change Name</button>

                <button onClick={this.handlechnage}>change data 1</button>

                <h2>hello course :- {this.state.data.front}</h2>

                <h2> counter :- {this.state.count}</h2>

                <button className='btn btn-dark' onClick={()=>{this.setState({count : this.state.count + 1})}}>increment</button>
               <button className='btn btn-danger' onClick={()=>{this.setState({count : this.state.count - 1 })}}>Decrement</button>
                <button className='btn btn-primary' onClick={()=>{this.setState({count : 0})}}>Reset</button>
                <button className='btn btn-primary' onClick={()=>{this.setState({count : this.state.count = 0})}}>Reset</button>
            
                <br />
                
                <button className='' onClick={()=>{this.setState({isimage : false})}}>Hide</button>
                <button className='' onClick={()=>{this.setState({isimage : true})}}>Show</button>
                <button className='' onClick={()=>{this.setState({isimage : !this.state.isimage })}}>Toggle</button>

                {(this.state.isimage)?<Image /> : false}


            </div>
        )
    }
}

export default Class_state
