import logo from './logo.svg';
//import './App.css';
import UserManager from './components/UserManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{
        textAlign: "center",
        marginTop: "20px",
        color: "#1e3a8a",
        fontSize: "2rem",
      }}>
        🌐 HOC Example – CRUD with Beautiful Design
      </h1>
      <UserManager />
      </header>
    </div>
  );
}

export default App;
