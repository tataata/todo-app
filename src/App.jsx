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

  // delete all 2: add deleteAll handler
  const deleteAllItems = () => {
    console.log('delete all')
    setTasks([])
  }

  const addTask = (textOfItem) => {
    // should add the text to a new todo in state
    setTasks([...tasks, {task: textOfItem, status: 'open', id: uuid() }])
    // localStorage.setItem('todos', JSON.stringify([...tasks, newTask]))
  }

  const editTask = (itemToUpdate) => {
    // find item in array of tasks, change the task (text from input field)
    let updatedTasks = tasks.map(item => item.id == itemToUpdate.id ? { ...item, task: itemToUpdate.task } : item)
    // change state by calling setTasks
    setTasks(updatedTasks)
  }



  return (
    <>
     <header>
        <h1>Todo list</h1>
      </header>
      <main>
        <AddItem addTask={addTask} />
        {/* delete all 3: pass the props */}
        <List tasks={tasks} deleteItem={deleteTask} deleteAllItems={deleteAllItems} editItem={editTask} /> 
      </main>
      <footer>
        <p>Have fun!</p>
      </footer>
    </>
  )
}

export default App
