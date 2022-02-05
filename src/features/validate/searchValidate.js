import Alert from 'react-bootstrap/Alert'

const searchValidate = (values) => {
    const errors = {};
    if(!values.search){
        errors.search = <Alert variant={'warning'}>Por favor ingrese una palabra</Alert>
    }
    return errors
}

export default searchValidate