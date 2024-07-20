import React, { Component } from 'react'
//Creating counter with class component
//Steps : 1) Create component->class comp
//        2) Create state variable count
//        3) Create a method that is capable of seeting this state #count value
export default class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount=()=>{
        this.setState({count:this.state.count+1})
  
    }
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    )
  }
}
