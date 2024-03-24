import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import {
  Message,
  Container,
  Button,
  Title,
  Text,
  Field,
  DateWrapper,
  Svg,
} from './Form.styled';
import sprite from '../../sprite.svg';
const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'Invalid email format. Example: ivanov@com.ua'
    )
    .required('Email is required'),
  date: Yup.date().min(new Date()).required('Date is required'),
  comment: Yup.string(),
});

export const FormModal = () => {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  return (
    <Container>
      <Title>Book your campervan now</Title>
      <Text>Stay connected! We are always ready to help you.</Text>
      <Formik
        initialValues={{
          name: '',
          email: '',
          date: '',
          comment: '',
        }}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field id="name" name="name" placeholder="Name" $variant="all" />
            {touched.name && errors.name && <Message>{errors.name}</Message>}
            <Field
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              $variant="all"
            />
            {touched.email && errors.email && <Message>{errors.email}</Message>}
            <DateWrapper>
              <Field
                id="date"
                name="date"
                placeholder="Booking date"
                $variant="all"
              />
              {touched.date && errors.date && <Message>{errors.date}</Message>}
              <Svg>
                <use xlinkHref={sprite + '#icon-date'}></use>
              </Svg>
            </DateWrapper>
            <Field
              id="comment"
              name="comment"
              placeholder="Comment"
              $variant="last"
            />
            <Button type="submit">Send</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
