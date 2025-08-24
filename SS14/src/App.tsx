import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props:{}){
        super(props);
        this.state={
            email:"",
            password:""
        };
    }
    handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
    handleChangeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("gia tri nguoi dung nhap",e.target.value);
        this.setState({email:e.target.value})
    }
    handleChangePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({password:e.target.value})
    }
  render() {
    return (
      <div>
        <form action="" onClick={this.handleSubmit}>
            <h1>Form dang nhap</h1>
            <label htmlFor="">Email</label>
            <input
             type="text"
             onChange={this.handleChangeEmail} 
             /><br />
            <label htmlFor="">Password</label>
            <input
             type="text"
             onChange={this.handleChangePassword} 
             /><br />
            <button>Login</button>
        </form>
      </div>
    )
  }
}