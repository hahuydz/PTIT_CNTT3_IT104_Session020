import React, { Component } from 'react'
type InitialState = {
  taskName: string;

}
type Task = {
  id: number;
  name: string;
  Completed: boolean;
}
export default class Event extends Component <{}, InitialState> {
    constructor(props: {}) {
        super(props);
        this.state = {
        taskName: "hahuyiuem"
        }
    }
  render() {
    return (
      <div>
        hoc ve event
        

        
      </div>
    )
  }
}
