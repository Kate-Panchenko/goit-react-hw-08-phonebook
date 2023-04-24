import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import {
  Form,
  Label,
  Field,
  Button,
} from 'components/RegisterFrom/Forms.styled';
// import { useAuth } from 'hooks/useAuth';

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(5).max(20).required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
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
        <Button type="submit">Log in</Button>
      </Form>
    </Formik>
  );
};
