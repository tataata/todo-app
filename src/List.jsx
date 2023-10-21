function List() {
  const tasks = [
    { task: 'Display list of items', status: 'open', id: '01' },
    { task: 'Remove todo', status: 'open', id: '02' },
    { task: 'Edit todo', status: 'open', id: '03' },
    { task: 'Create todo', status: 'open', id: '04' },
  ]
  
  return (
    <>
      <h2>List of todos:</h2>
      <ul>
        {tasks.map(item => <li>{item.task}</li>)}
      </ul>
    </>
  )
}

export default List
