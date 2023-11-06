const express = require('express')
// // ...rest of the initial code omitted for simplicity.
// const { query, body, validationResult } = require('express-validator');
// add validator
const { query, body, validationResult } = require('express-validator');

const app = express()
const port = 3030


app.get('/hello', query('person').notEmpty().escape(), (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello, ${req.query.person}!`);
  }
  res.send({ errors: result.array() });
});


// Middleware to read the incoming data in json format: 
// First send a request without the middlware so that we see that we need it! (data is undefined otherwise)
app.use(express.json());

let mockdata = [
  {text: "sleep", status: "open", id: "01"},
  {text: "eat", status: "open", id: "02"},
  {text: "make a call", status: "open", id: "03"},
  {text: "write", status: "open", id: "04"},
]

// export default mockdata /

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Hello ! !! ! ! world! Hello !!! I AM COMING!')
})



// app.route('/todos')
app.get('/todos', (req, res) => {
  console.log('Get todos')
  res.status(200).json({
    success: true,
    data: mockdata
  })
})

// Create schema for valid todo:
const validTask = [
  body('task')
    .notEmpty()
    .withMessage('Please enter a task. It should be a string or sentence')
    .trim()
    .escape(),
  body('status')
    .isIn(['open', 'done'])
    .withMessage('Please enter a valid status')
    .trim()
    .escape(),
  body('id')
    .notEmpty()
    .withMessage('Add id')
    .trim()
    .escape(),
]

// POST todos
app.post('/todos', validTask, (req, res) => {
  console.log(req.body);
  // res.status(201).json({
  //   success: true,
  //   message: 'Data was saved'
  // })
  const result = validationResult(req);
  if (result.isEmpty()) {
    res.status(201).json({
      success: true,
      message: 'Data was saved'
    })
  } else {
    res.status(400).send({ errors: result.array() });
  }

})
  

// // Create schema for valid todo:
// const validTask = [
//   body('task')
//     .notEmpty()
//     .withMessage('Please enter a task. It should be a string or sentence')
//     .trim()
//     .escape(),
//   body('status')
//     .isIn(['open', 'done'])
//     .withMessage('Please enter a valid status')
//     .trim()
//     .escape(),
//   body('id')
//     .notEmpty()
//     .withMessage('Add id')
//     .trim()
//     .escape(),
// ]


app.listen(port, () => {
  console.log(`Example app loads on port ${port}`)
})

// Error handling ========================================

// Use a wildcard to respons to a request to to any not defined path.
app.use('*', (req, res, next) => {
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can't find the ${req.originalUrl} on the server :-(`
  // })
  let err = new Error(`Can't find the ${req.originalUrl} on the server global :-(`);
  err.statusCode = 404; 
  next(err);
});

// Add the error response as last middleware: 
// This will trigger the `next()` function in the previous middleware to call this function:
app.use((err, req, res, next) => {
  console.log('i am in error middleware: ', err);
  res.status(err.status || err.statusCode || 500).json({
    error: {
      status: err.status || err.statusCode,
      message: err.message || 'Internal Server Error',
    },
  });
});