import { Formik, Form, Field, ErrorMessage } from 'formik';
import userValidate from '../validate/userValidate';
import LoginValidationSchema from './LoginValidationSchema';
import Button from 'react-bootstrap/Button';
import UserPost from './UserPost';

const LoginForm = () => {
    return(
        <div className='content'>
            <Formik
            initialValues={{email:'', password:''}}
            validate={userValidate}
            validationSchema={LoginValidationSchema}
            onSubmit={UserPost}>
                <Form>
                    <Field type='email' name='email' placeholder='Email'/>
                    <ErrorMessage name='email'/>
                    <br/>
                    <Field type='password' name='password' placeholder='Password'/>
                    <ErrorMessage name='password'/>
                    <br/>
                    <Button variant='secondary' type='submit'>Enviar</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginForm