import { useState } from "react"
import './AddItem.css'

function AddItem( { addTask } ) {
  // The state will move to the initialValues in Formik

  // Get the value of the input via useState
  const [ text, setText ] = useState('')

  // const todoItemId = useId()

  // FORMIK: 
  // handleFromSubmit --> in==onSubmit
  const handlerFormSubmit = (event) => {
    // we don't need to prevent default in Formik
    event.preventDefault()

    // the values we pass here is foudn in "values" object in Formik
    addTask(text)

    // reset of the text is in resetFrom function in formik
    setText('')
  }

  return (
    // from is transformed into Form component
    // onSubmit is defined in Formik 
    <form onSubmit={handlerFormSubmit}>
      <input
        placeholder="Write task here"
        // Validation is defined with the shcma from yup
        pattern="^[a-zA-Z0-9 ]+$"
        type="text"
        minLength={2}
        maxLength={30}
        // Formik takes care of setting the value and reacting to the keystroke
        value={text}
        onChange={event => {
          setText(event.target.value);
        }}
      />
      {/* Validation makes sure only valid datae is passed */}
      <button disabled={text.length < 3 || text.length > 30} >Add Task</button>
    </form>
  );
}

export default AddItem;
