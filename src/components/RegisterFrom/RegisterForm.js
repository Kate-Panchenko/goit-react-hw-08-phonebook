import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, Field, Button } from './Forms.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().min(4).max(20).required(),
  email: yup.string().required(),
  password: yup.string().min(5).max(20).required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          Username
          <Field type="text" name="name" placeholder="Name" id={nanoid()} />
          <ErrorMessage name="name" />
        </Label>
        <Label>
          Email
          <Field type="email" name="email" placeholder="Email" id={nanoid()} />
          <ErrorMessage name="email" />
        </Label>
        <Label>
          Password
          <Field
            type="password"
            name="password"
            placeholder="Password"
            id={nanoid()}
          />
          <ErrorMessage name="password" />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </Formik>
  );
};
