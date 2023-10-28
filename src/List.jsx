import ListItem from './ListItem'

function List({ tasks, deleteItem, editItem }) {

  return (
    <>
      {tasks.length === 0 ? (
        <h2>There are no todos.</h2>
      ) : (
        <>
          <h2>List of todos</h2>
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
