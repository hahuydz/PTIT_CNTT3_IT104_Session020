import React,{Component} from "react"
type PropsType = {
    company: string;
}
export default class Child extends Component<PropsType>{
    render(){
        console.log( "gia rei nhan ve tu class con",this.props);
        return(
            <div>
                <h1>Child Component</h1>
                <p>Company: {this.props.company}</p>
            </div>
        )
    }
}