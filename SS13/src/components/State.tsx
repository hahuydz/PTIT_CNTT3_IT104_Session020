import React, { Component } from 'react'
type Task={
    id: number;
    name: string;
    isComplete: boolean;
}


export default class State extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            taskName:"",
            todos :[
                {   id:1, 
                    name:"hoc reactjs", 
                    isComplete: false
                },
                {   id:2, 
                    name:"hoc reactjs voi hoc vien", 
                    isComplete: false
                },
                {   id:3, 
                    name:"", 
                    isComplete: false
                }
            ] as Task[
            ],
            fullName:"ha huy",
            isActive: true,   
             count: 0
        }
    }
  render() {
    return (
      <div>

        
      </div>
    )
  }
}
