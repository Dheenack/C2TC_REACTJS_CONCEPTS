import "./App.module.css";
import s from'./App.css';



function App() {

  const inlineStyle = {
    color:"white",
    backgroundColor:"blue",
    padding:"10px",
    borderRadius:"8px"
    };
  return (
    <div className="App">
      <header className="App-header">
        <h1>React styling examples</h1>

        {/* Inline Styling */}
        <p style={inlineStyle}>This is styled using Inline CSS</p>

        {/* External CSS */}
        <p className="external">This is styled using External CSS</p>

        {/* CSS Module */}
        <p className={s.}>This is styled using CSS Module</p>
      </header>
    </div>
  );
}

export default App;
