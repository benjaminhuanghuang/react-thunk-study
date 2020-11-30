import React, { Component } from 'react'
import {Wrapper} from "../styles";


interface HelloReduxProps {
  
}

interface HelloReduxState {
  title: string
};


 class HelloReduxClass extends Component<HelloReduxProps, HelloReduxState> {
  constructor(props:any){
    super(props)
    this.state = {
      title:'学习redux'
    }
  }
  changeTitle(){
    let title = '学习redux' + Math.ceil(Math.random()*100)
    this.setState({
      title:title
    })
  }
  render() {
    return (
      <Wrapper>
        <h2>Hello Redux Class Component</h2>
        <h2>{this.state.title}</h2>
        <button className="btn" onClick={()=>{this.changeTitle()}}>点击我改变标题</button>
      </Wrapper>
    )
  }
}
export default HelloReduxClass