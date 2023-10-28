import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AddItem.css'


const AddItems = (props) => (
  <div className="AddItems">
    <Formik
      // Replace state with this:
      initialValues={{ textOfItem: ''}}
      // validation
      validationSchema={ Yup.object({
        textOfItem: Yup.string()
        .max(30, 'Task cannot be longer than 30 letters!')
        .min(3, 'Task needs to be at least 3 letters')
        .required('Please enter a to do')
        .matches(/^[a-zA-Z0-9 ]+$/, 'Enter only letters, numbers and no special symbols')
      })}
      onSubmit={(values , { resetForm }) => {
        console.log(values);
        // Change what we pass to addTask
        props.addTask(values.textOfItem)
        // Reset the from 
        resetForm({
          values: { textOfItem: ''}
        })
      }}
    > 
      <Form >
          <Field type='text' placeholder='Add a to do' name='textOfItem' />
          <button type="submit">Add</button>
          <div><p className="error-message"><ErrorMessage name='textOfItem' /></p></div>
        </Form>
    </Formik>

  </div>
)

export default AddItems