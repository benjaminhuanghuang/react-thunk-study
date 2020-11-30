import React, { Component } from 'react'

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
      <div>
        <h2>{this.state.title}</h2>
        <button className="btn" onClick={()=>{this.changeTitle()}}>点击我改变标题</button>
      </div>
    )
  }
}
export default HelloReduxClass