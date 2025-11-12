import React, { Component } from 'react';
import './App.css';

class Counter extends Component{
  constructor(props){
    super(props)

    this.state={
      count:0,
    };

    console.log("Constructor: component is created");

    // Event Binding (Method 1: Binding in constructor)
    this.increment= this.increment.bind(this);
  }

  // Lifecycle Method 1: Called after component mounts
  componentDidMount(){
    console.log("ComponentDidMount: Component mounted on screen");
  }

  // Lifecycle Method 2: Called after state/props update
  componentDidUpdate(prevState){
    console.log(
      `ComponentDidUpdate: Count changed from
      ${prevState.count},
      to
      ${this.state.count}`
    );
  }

  // Lifecycle Method 3: Called before component unmounts
  componentWillUnmount(){
    console.log("componentWilUnmount: Component will be removed");
  }

  // Event handler (bound in constructor)
  increment(){
    this.setState({count: this.state.count + 1});
  }

  // Event handler (arrow function auto-binds this)
  decrement = ()=>{
    this.setState({count:this.state.count - 1});
  };

  render(){
    console.log("Render: Rendering UI");
    return(
      <div
      style={{
        textAlign:'center',
        marginTop:"40px",
        backgroundColor:"green"
      }}
      >
        <h2>ReactJs Component lifecycle & Event Binding examples</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>{" "}
        <button onClick={this.decrement}>Decrement</button>{" "}
        <button onClick={()=>{this.setState({count:0})}}>Reset</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Counter/>
      </header>
    </div>
  );
}

export default App;
