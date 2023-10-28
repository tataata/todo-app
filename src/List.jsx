import ListItem from './ListItem'

function List({ tasks, deleteItem, deleteAllItems, editItem }) {

  return (
    <>
      {tasks.length === 0 ? (
        <h2>There are no todos.</h2>
      ) : (
        <>
          <h2>List of todos</h2>
          {/* delete all: 1 - add the button with onClick */}
          <button onClick={deleteAllItems}>Delete all tasks</button>
          <ul>
            {tasks.map((item) => {
              return <ListItem key={item.id} item={item} deleteItem={deleteItem} editItem={editItem} />
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default List;
