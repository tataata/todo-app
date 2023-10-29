import { useState, useEffect } from 'react'
import './RandomTodo.css'

function RandomTodo() {
  // prepare the app for data fetching
  const [randomTodo, setRandomTodo] = useState('...')
  const [error, setError] = useState('')

  // fetch return a promise
  // this will create the infinite loop
  // as it will be triggering the rerender ==> useEffect
  useEffect(() => {
    async function fetchRandomTodo() {
     

      // handling HTTP errors
      //  if (response.ok) // 100, 200 -- all good
      // we are curious about 400, 500, when it is not okay
      // 
      // try {} catch {}
      // fetch can fail if htere is no connection so we def want to use try catch
      try {
        // here is the code that might fail
        const response = await fetch('https://www.boredapi.com/api/actrewivity')
        const resData = await response.json()

        if (!response.ok) {
          // const error = new Error('Failed to fetch random todos')
          // throw error 
          // or a shorter vesion of the 2 previoous lines
          throw new Error('Failed to fetch random todos')
        }
        setRandomTodo(resData.activity)

      } catch (error) {
        // handling the errors here
        // ususally handling an error means to update UI --> one more state
        console.error('Failed to fetch random todos');
        setError('Failed to fetch random todos')
      }
    }

    // call the function in the scope of the useEffect
    fetchRandomTodo()
  }, [])
  
  return (
    <>
      <hr></hr>
      <h2>Bored? Maybe <span className="text--lowercase">{randomTodo}</span>?</h2>
      <p> {error ? error : ''} </p>
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