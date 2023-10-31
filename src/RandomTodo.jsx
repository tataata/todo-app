import { useState, useEffect } from 'react'
import './RandomTodo.css'

function RandomTodo() {
  // loading state to provide feedback on the screen while losding
  const [isFetching, setIsFetching] = useState(false)
  // prepare the app for data fetching
  const [randomTodo, setRandomTodo] = useState('')
  const [error, setError] = useState('')

  // fetch return a promise
  // this will create the infinite loop
  // as it will be triggering the rerender ==> useEffect
  useEffect(() => {
    async function fetchRandomTodo() {
      setIsFetching(true)
      // handling HTTP errors
      //  if (response.ok) // 100, 200 -- all good
      // we are curious about 400, 500, when it is not okay
      // 
      // try {} catch {}
      // fetch can fail if htere is no connection so we def want to use try catch
      try {
        const response = await fetch('https://www.boredapi.com/api/activity')

        // if (!response.ok) {
        //   throw new Error('Oh no! HTTP error status: ${response.status!');
        // } else if (response.status === 404) {
        //   throw new Error('Oh no! 404 -- page not found!');
        // } else if (response.status === 500) {
        //   throw new Error('Oh no! 500 -- server error!');
        // }
        if (response.status === 200) {
          const resData = await response.json()
          setRandomTodo(resData.activity)
        } else {
          setError('There was an error fetching the data')
          throw new Error('...Oh no! Something went wrong :-(')
        }

      } catch (error) {
        // TypeError: Failed to fetch
        console.error(error)
        setError(error.message)
      }

      setIsFetching(false) // not fetching anymore
    }

    // call the function in the scope of the useEffect
    fetchRandomTodo()
  }, [])

  
  return (
    <>
      <hr></hr>
      <h2>Bored? Maybe 
        {isFetching && '...let us think...'} 
        <span className="text--lowercase">
        {error ? 
          ' ' + error :
          ' ' + randomTodo
        }
       </span> 
      </h2> 
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