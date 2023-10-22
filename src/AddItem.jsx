import { useState } from "react";

function AddItem( { addTask } ) {
  const [ text, setText ] = useState('');
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      addTask(text);
      setText("");
    }}>
      <input
        placeholder="Add a todo"
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button>Add Task</button>
    </form>
  );
}

export default AddItem;
