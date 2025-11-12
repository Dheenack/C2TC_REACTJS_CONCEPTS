import React, { useState } from 'react'

export const EventHandler = () => {

  const [count,SetCount] = useState(0);
  const [text,SetText] = useState("");
  const [color,SetColor] = useState("green")

  function handleClick(){
    SetCount(count+1);
  }

  const handleHover = () =>{
    SetColor("red");
  }

  return (
    <div>EventHandler
      <h1 style={{color:color}}>Event handling Examples</h1>
      <button onClick={handleClick}>
        click me to increase count: {count}
      </button>

      <br/><br/>

      <button onMouseOver={handleHover} onMouseOut={()=>SetColor("green")}>
        Hover to change color
      </button>
      <br/><br/>
      <input
      type='text'
      placeholder='Write anything...?'
      onChange={(e)=>SetText(e.target.value)}
      />
      <br/>
      <p>You typed: {text}</p>
      <br/>

      <button onClick={()=>alert(`hello,${text||"user"}`)}>Greet</button>

    </div>
    
  );
}
