function List({ tasks }) {

  return (
    <>
      {tasks.length === 0 ? <h2>There are no todos.</h2> :  <h2>List of todos</h2>}
      <ul>
        {tasks.map(item => <li key={item.id}>{item.status == "closed" ? "✔ " : ""} {item.task}</li>)}
      </ul>
    </>
  )
}

export default List
