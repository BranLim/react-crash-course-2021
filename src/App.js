import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      reminder: true
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2.30pm',
      reminder: false,
    }

  ]);
  return (
    <div className="App">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
