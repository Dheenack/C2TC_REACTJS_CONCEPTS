import logo from './logo.svg';
import './App.css';
import TodoList from './components/Todo-list';

function App() {
 const todos=[
  {id:1,title:"complete topics",completed:false}
 ];

 return(
  <div class="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <header class="App-header">
      <h1>React Props Todo List</h1>
      <TodoList todos={todos} />
      </header>
      
      

    </div>
  );
}

export default App;
