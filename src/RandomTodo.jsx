import { useState, useEffect } from 'react'
import './RandomTodo.css'

function RandomTodo() {
  // loading state tracking to provide feedback on the screen
  const [isFetching, setIsFetching] = useState(false)
  // prepare the app for data fetching
  const [randomTodo, setRandomTodo] = useState([])
  // state for errors messages
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false;
    async function fetchRandomTodo() {
     
      try {
        setIsFetching(true)
        const response = await fetch('https://www.boredapi.com/api/activity')

        if(!response.ok) {
          setError('...Oh no! Something went wrong. Come back later :-(')
          throw new Error('Error occurred with HTTP connection')
        } else {
          console.log('i ma here')
          const resData = await response.json()
          if (!ignore) {
            setRandomTodo(resData.activity)
          }
        }

      } catch (error) { 
        // Display the technical error message in the console
        console.error(error)
        // display more human language error message for the user in the browser window
        setError('...oh no! It seems that the error occured :-( Come back later')
      }

      setIsFetching(false)
    }
    fetchRandomTodo()
    // cleanup   
    return () => { ignore = true }
  }, [])

  return (
    <>
      <hr></hr>
      <h2>Bored? 
        Maybe 
        {isFetching && '...let us think...'}
        <span className="text--lowcase">
          {error 
            ? ' ' + error
            : ' ' + randomTodo
          }
        </span></h2>
      {/* 
      https://www.boredapi.com/api/activity 
      :
      {"activity":"Match your storage containers with their lids",
      "type":"busywork",
      "participants":1,
      "price":0,
      "link":"",
      "key":"4940907",
      "accessibility":1} */}
    </>
  )
}

export default RandomTodo