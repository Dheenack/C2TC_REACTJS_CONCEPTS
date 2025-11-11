import React, { useState } from "react";

function TodoItem({todo}){
       
    const [color,setColor] =useState(todo.completed?"green":"red");
    function handleClick(){
        if(todo.completed){
            setColor("green");
            todo.completed=!todo.completed;
        }
        else{
            todo.completed=!todo.completed;
            setColor("red");
        }
    }
    
    return(
        <div 
              style={{
        border: '1px solid #ddd',
        padding: '15px',
        margin: '10px auto',
        width: '300px',
        borderRadius: '5px',
        backgroundColor: color
        }}
        >
            <h3>{todo.title}</h3>
            <p>Status:{todo.completed?"Completed":"Pending"}</p>
            <button onClick={handleClick}>Toggle</button>
        </div>
    );
}

export default TodoItem;