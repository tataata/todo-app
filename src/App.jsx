import { useState } from 'react'
import { v4 as uuid } from "uuid"; //import uuid v4
import './App.css'
import List from './List'
import AddItem from './AddItem'

function App() {
  const [ tasks, setTasks ] = useState([])
  
  const deleteTask = (id) => {
    let remainingTasks = tasks.filter(item => item.id !== id)
    setTasks(remainingTasks);
  }

  const addTask = (text) => {
    setTasks([...tasks, {task: text, status: 'closed', id: uuid() }])
  }

  return (
    <>
     <header>
        <h1>Todo list</h1>
      </header>
      <main>
        <AddItem addTask={addTask} />
        <List tasks={tasks} deleteItem={deleteTask} /> 
      </main>
      <footer>
        <p>Have fun!</p>
      </footer>
    </>
  )
}

export default App
