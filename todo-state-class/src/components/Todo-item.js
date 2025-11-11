import React, { Component } from "react";

class TodoItem extends Component{

    //handle click event using parent class method
    handleclick=()=>{
        this.props.toggleComplete(this.props.todo.id);
    }

    //updating UI of child component in DOM
    render(){
        const {todo} = this.props;
        return (
            <div
            
            onClick={this.handleclick}
            style={{
          border: '1px solid #ddd',
          padding: '15px',
          margin: '10px auto',
          width: '300px',
          borderRadius: '5px',
          backgroundColor: todo.completed ? '#d4edda' : '#f8d7da',
          cursor: 'pointer'
        }}
            >
            <h3>{todo.title}</h3>
            <p>Status: {todo.completed ? "Completed":"pending"}</p>
            <p><i>Click to toggle completed</i></p>
            </div>
        );
    }
}

export default TodoItem;