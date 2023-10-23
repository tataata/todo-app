import { useState, useRef, useId } from "react"
import './AddItem.css'

function AddItem( { addTask } ) {
  // Get the value of the input via useState
  // -- when I want to provide instant validation feedback
  // -- when I want to reset the value on submition
  const [ text, setText ] = useState('')

  // Get the value of the input via ref
  // Ref is ok when I need a value only once, on submition
  const textInputRef = useRef()

  const todoItemId = useId()

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      addTask(text)
      setText("")
      console.log(text + ' <-- grabbed with useState')
      const enteredText = textInputRef.current.value
      console.log(enteredText + ' <-- grabbed with useRef')
    }}>
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
      <button disabled={text.length < 1}>Add Task</button>
    </form>
  );
}

export default AddItem;
