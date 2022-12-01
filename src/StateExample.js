import React from 'react'

export default class StateExample extends React.Component{
state={
    name:"dhanu",
    age:567777
}
  render() {
    return (
      <div>
        StateExample
        <p>{this.state.name} {this.state.age}</p>
      </div>
    )
  }
}

