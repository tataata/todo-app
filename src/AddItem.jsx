import { useState, useRef, useId } from "react"
import './AddItem.css'

function AddItem( { addTask } ) {
  // The state will move to the initialValues in Formik

  // Get the value of the input via useState
  // -- when I want to provide instant validation feedback
  // -- when I want to reset the value on submition
  const [ text, setText ] = useState('')
  const [ enteredTextIsValid, setEnteredTextIsValid ] = useState(true)

  // Get the value of the input via ref
  // Ref is ok when I need a value only once, on submition
  const textInputRef = useRef()

  const todoItemId = useId()

  // FORMIK: 
  // handleFromSubmit --> in==onSubmit
  const handlerFormSubmit = (event) => {
    // we don't need to prevent default in Formik
    event.preventDefault()
    // we dn't nee it in Formik
    const enteredText = textInputRef.current.value
    // Check if the input is empty
    if (enteredText.trim() === '') {
      setEnteredTextIsValid(false);
      return // stop function here
    } else {
      setEnteredTextIsValid(true);
    }

    // the values we pass here is foudn in "values" object in Formik
    addTask(text)

    // reset of the text is in resetFrom function in formik
    setText("")
    console.log(text + ' <-- grabbed with useState')
    console.log(enteredText + ' <-- grabbed with useRef')
  }

  // we don't need it in Formik
  const textInputClasses = enteredTextIsValid ? '' : 'form-invalid'

  return (
    // from is transformed into Form component
    // onSubmit is defined in Formik 
    <form onSubmit={handlerFormSubmit} className={textInputClasses}>
      {/* Label and input is transformed in Field */}
      <label htmlFor="{todoItemId}">What to do?</label>
      <input
        id="{todoItemId}"
        ref={textInputRef}
        placeholder="write here"
        // Validation is defined with the shcma from yup
        pattern="^[a-zA-Z0-9 ]+$"
        type="text"
        // Formik takes care of setting the value and reacting to the keystroke
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      {/* Validation makes sure only valid datae is passed */}
      <button>Add Task</button>
      {!enteredTextIsValid && <p className="error-message">The field can't be empty</p>}
    </form>
  );
}

export default AddItem;
