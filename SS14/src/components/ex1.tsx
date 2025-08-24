import React, { Component } from 'react'
type InitState = {
    userName: string
}
export default class Bai1 extends Component<{}, InitState> {
    constructor(props: {}){
        super(props);
        this.state={
            userName:"Xuân Vinh"
        }
    }
  render() {
    return (
      <div>
        <p>Họ và tên : {this.state.userName} </p>
      </div>
    )
  }
}