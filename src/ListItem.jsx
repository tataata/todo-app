import { useState } from "react"
import EditItem from "./EditItem"

function ListItem ({ item, deleteItem, editItem }){
  const [ edit, setEdit ] = useState(false)

  const toggleEdit = (value) => {
    // here we switch state edit from true to false, and back
    //  if(edit === false){
    //   setEdit(true)
    //  } else if (edit === true) {
    //   setEdit(false)
    //  }
    //  shorter version:
    setEdit(value)
  }

  return (
    <li>
      {/* Is edit true? render an input field. If  it is false, ender the item */}
      { edit === true ? (
        <>
          <EditItem item={item} toggleEdit={toggleEdit} editItem={editItem} />
        </>
      ) : (
        <>
         {item.task}
         <button onClick={ () => toggleEdit(true)}>Edit</button>
         <button onClick={() => deleteItem(item.id)}>Delete</button>
        </>
      )}
    </li>
  )


}

export default ListItem