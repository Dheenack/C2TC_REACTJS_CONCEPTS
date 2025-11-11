import React from "react";

import TodoItem from "./Todo-item";

function TodoList({todos}){
    return (
        <div
        style={{ marginTop: '20px' }}
        >
        {
            todos.map(todo=>(
                <TodoItem key={todo.id} todo={todo} />
            ))
        }
        </div>
    );
}

export default TodoList;
