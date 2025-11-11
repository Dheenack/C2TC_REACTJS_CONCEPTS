import React, { Component } from "react";
import TodoItem from "./Todo-item";

class TodoList extends Component{ //create child class
    // default object data created at constructor
    constructor(props){
        super(props)
        this.state={
            todos:[
                {id:1,title: "Learn React",completed:false},
                {id:2,title: "watch demon slayer",completed:true},
                {id:3, title: "learn spring boot",completed:false}
            ]
        };
    }

    //toggle function
    toggleComplete=(id)=>{
        const updateTodos =this.state.todos.map(todo=>{
            if (todo.id===id){
                return {...todo,completed:!todo.completed};
            }
            return todo;
        });
        this.setState({todos:updateTodos});
    };

    //render fn to update UI
    render(){
        return(
            <div>
                {this.state.todos.map(todo=>(
                    <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={this.toggleComplete}
                    />
                ))}
            </div>
        );
    }
}

export default TodoList;
