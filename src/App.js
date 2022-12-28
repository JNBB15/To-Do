import './App.scss';
import Container from './components/Container';
import checkbox from './components/checkbox';
import FromTodo from './components/FromTodo';
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="App">
      <Container/>
      <checkbox></checkbox>
      <FromTodo></FromTodo>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
