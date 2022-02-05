import Alert from 'react-bootstrap/Alert'

const userValidate = (values) => {
    const errors = {};

    if(!values.email){
        errors.email = <Alert variant={'warning'}>Email requerido</Alert>
    }
    if(!values.password){
        errors.password = <Alert variant={'warning'}>Password requerido</Alert>
    };
    return errors;
}

export default userValidate