import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  });

const NameForm = ({onSave}) => {
    return (
    <Formik 
    initialValues={{
        name: '',
        number: ''
      }} 
      validationSchema={FormSchema}
      onSubmit={value => {
      onSave({
        ...value,
        // id: nanoid(),
      })}}>
        <Form>
            <label>
                Name 
                <Field name="name" type="text" />
                <ErrorMessage name="name" component="span" />
            </label>
            <label> 
                Number 
                <Field name="number" type="number" />
                <ErrorMessage name="number" component="span" />
            </label>
    <button type="submit">Add contact</button>
  </Form>
    </Formik>)
};

export default NameForm
