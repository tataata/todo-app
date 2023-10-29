import { useState, useEffect } from "react"

function EditItem({ item, toggleEdit, editItem }) {
  // item.task contains the text
  const [ text, setText ] = useState(item.task)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Call edit item to change the state in app:
    let updatedItem = { ...item, task: text }
    editItem(updatedItem)
    toggleEdit(false)
  }

  useEffect ( () => {
    console.log('editItem component is mounted');
  }, [])

  useEffect(()=> {
    console.log('change of the text state in editItem component');
  }, [ text ])


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text} 
          onChange={event => { setText(event.target.value) }} />
        <button>Save</button>
      </form>
    </>
    
  )
}

export default EditItem
