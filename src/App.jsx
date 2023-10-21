import { useState } from 'react'
import './App.css'
import List from './List'

function App() {
  const [ tasks, setTasks ] = useState(
    [
      { task: 'Display list of items', status: 'closed', id: '01' },
      { task: 'Remove todo', status: 'open', id: '02' },
      { task: 'Edit todo', status: 'open', id: '03' },
      { task: 'Create todo', status: 'open', id: '04' },
      { task: 'Style the app', status: 'open', id: '05' },
    ]
  )
  
  const deleteTask = (id) => {
    let remainingTasks = tasks.filter(item => item.id !== id)
    setTasks(remainingTasks);
  }

  return (
    <>
     <header>
        <h1>Todo list</h1>
      </header>
      <main>
        <List tasks={tasks} deleteItem={deleteTask} /> 
      </main>
      <footer>
        <p>Have fun!</p>
      </footer>
    </>
  )
}

export default App
