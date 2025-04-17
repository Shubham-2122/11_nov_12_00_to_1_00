import React, { Component } from 'react'
import Header from '../layout/Coman/Header';

class Uselife extends Component {
    constructor(){
        super();
        this.state = {
            name : "Het patel"
        }

    }
    // mouting state
    componentDidMount(){
        console.log("component mouting data")
    }
    // yes or not
    // shouldComponentUpdate(){
    //     console.log("data update pr not")
    // }
    componentDidUpdate(){
        console.log("component will update..!")
    }

    componentWillUnmount(){
        console.log("clen data")
    }

  render() {
    return (
      <div>
        <Header />
        {/* https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ */}
        {/* life react */}
        {/* 1) mouting ;- inta :- value define , constr , reder , componet mouting
        2) updated :- state change
        3) unmotuing ;- we cane chnage anyting */}

        <h1>{this.state.name}</h1>

        <button onClick={()=>{this.setState({name : "dharmik"})}}>Chnage name</button>

      </div>
    )
  }
}

export default Uselife
