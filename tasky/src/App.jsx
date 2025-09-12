import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Clean dishes ASAP" />
      <Task title="Laundry" deadline="Tomorrow" description="Wash dark colours and hang outside" />
      <Task title="Tidy" deadline="Today" description="Tidy up living room" />
    </div>
  );
}

export default App;