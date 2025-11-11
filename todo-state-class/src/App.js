import React, { Component } from "react";
import TodoList from "./components/Todo-list";

class App extends Component{
  render(){
    return (
      <div style={{textAlign:"center",marginTop:"50px"}}>
        <h1>Todo List (Class Component with State)</h1>
        <TodoList/>
      </div>
    )
  }
}

export default App;
