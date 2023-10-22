# Todo app

## About this project 

This is a simple Todo app that is built for practicing CRUD (Create, Read, Update and Delete)operations: 

1. add a new  item to the list (create)
2. display a list of to do items  (read)
3. edit one item in the list (update)
4. remove an item from the list (delete)


## Tools
- [React](https://react.dev/) with [vite](https://vitejs.dev/) as a boilerplate for the project.

## Setup
1. Navigate to the root folder of the project and run `npm install`


# Tasks

## Task 1. Display a list of items
- Clean up the code in the App component. Add a heading in the return statement of the component that fits your app, for example: My To Do List
- Create a state, using the useState-hook in App. Add some todo-items to the state. Add one object for each todo-item. Use the following structure for each todo-item:
`{ task: 'Learn React', status: 'open', id: '01' }`
- Create a component List. This component should get the array of todo-items as props.
- use a map function to render all the todo-items in return statement of the List component. Each item can be a list-item or a div.
- if the array is empty, (there are no items in state), display a text such as "No tasks today!"
- **Optional:** destructure the props in List.
use the List in the App component and pass the state tasks as props to List.
- Add some more todo items in state in App, and check that they appear on the page.
- Remove all the todo items from the state in App, and check that you see the text "No tasks today" on the page.

### Bonus after task 1: Conditional rendering
1.1. Display the status of the item in the app! You can add an icon (checkmark) or change the colour of the item if it is marked as "closed".

1.2. Add interactivity so that you can change the status of the item from 'open' to 'closed'.
For this you need:
* a button
* a click handler on the button
* a function to change the state of the items (in App.js)
* use conditional expressions (ternary operator)

> Repetition of conditional rendering

*Note:* In the solution, I used an icon to mark a done task. The svg file is in the icons folder. Any othe icons we add can be added in this folder, in the Icons component. This taks can also be solved in many other ways! Any styling that works is good!

## Task 2. Delete an item
* Add a delete button to remove an item in the List component
* Add a function that handles the removing from state in App.
* Pass this function to the button in List

## Task 3. Create: Add new items
- Create a component `AddItem` with an input field and a button with the text `add`.
- Let `App` render the `AddItem` components.
- Create a local state in the `AddItem` component. In this state, you want to save the input when the user is typing. When the user stops typing or clicks the `add` button, this new item should be stored in state of `App`!
- `App` holds the state for the tasks. Add a a function `addOneItem` to `App` to change this state. Pass this function to the event handler on the `add` button in the `AddItem` component.
Remember that the items are objects and have 3 properties: `task`, `id` and `status`. For a new item, the status should be `false`, meaning that the task is open.
- The `id` also needs to have a value. For this you can use the length of the array or a uuid (https://www.npmjs.com/package/uuid)