import { useState, useEffect } from 'react'
import './RandomTodo.css'

function RandomTodo() {
  // prepare the app for data fetching
  const [randomTodo, setRandomTodo] = useState('...');
  // fetch return a promise
  // this will create the infinite loop
  // as it will be triggering the rerender ==> useEffect
  useEffect(() => {
    async function fetchRandomTodo() {
      const response = await fetch('https://www.boredapi.com/api/activity')
      const resData = await response.json()
      setRandomTodo(resData.activity)
    }

    // call the function in the scope of the useEffect
    fetchRandomTodo()
  }, [])
  
  return (
    <>
      <hr></hr>
      <h2>Bored? Maybe <span className="text--lowercase">{randomTodo}</span>?</h2>
      {/* https://www.boredapi.com/api/activity */}
      {/* {"activity":"Repaint a room in your house",
           "type":"recreational",
           "participants":1,
           "price":0.3,
           "link":"",
           "key":"4877086",
           "accessibility":0.4} */}
    </>
  )
}

export default RandomTodo