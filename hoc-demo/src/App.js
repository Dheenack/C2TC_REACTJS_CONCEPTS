import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickCounter/>
        <HoverCounter/>
      </header>
    </div>
  );
}

export default App;
