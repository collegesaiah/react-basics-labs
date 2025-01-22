import './App.css';
import Task from './components/Task';


function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash the plates and cups"/>
      <Task title="Laundry" deadline="Tomorrow" description="Iron uniform for work"/>
      <Task title="Tidy" deadline="Today" description="Bedroom and Living room"/>
    </div>
  );
}

export default App;
