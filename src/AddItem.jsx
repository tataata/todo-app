import { useState, useRef, useId } from "react"
import './AddItem.css'

function AddItem( { addTask } ) {
  // Get the value of the input via useState
  // -- when I want to provide instant validation feedback
  // -- when I want to reset the value on submition
  const [ text, setText ] = useState('')
  const [ enteredTextIsValid, setEnteredTextIsValid ] = useState(true)

  // Get the value of the input via ref
  // Ref is ok when I need a value only once, on submition
  const textInputRef = useRef()

  const todoItemId = useId()

  const handlerFormSubmit = (event) => {
    event.preventDefault()
    const enteredText = textInputRef.current.value
    // Check if the input is empty
    if (enteredText.trim() === '') {
      setEnteredTextIsValid(false);
      return // stop function here
    } else {
      setEnteredTextIsValid(true);
    }
    addTask(text)
    setText("")
    console.log(text + ' <-- grabbed with useState')
    console.log(enteredText + ' <-- grabbed with useRef')
  }

  const textInputClasses = enteredTextIsValid ? '' : 'form-invalid'

  return (
    <form onSubmit={handlerFormSubmit} className={textInputClasses}>
      <label htmlFor="{todoItemId}">What to do?</label>
      <input
        id="{todoItemId}"
        ref={textInputRef}
        placeholder="write here"
        pattern="^[a-zA-Z0-9 ]+$"
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button>Add Task</button>
      {!enteredTextIsValid && <p className="error-message">The field can't be empty</p>}
    </form>
  );
}

export default AddItem;
