import * as yup from 'yup'

const LoginValidationSchema = () => {
    let schema = yup.object().shape({
        email: yup.string().required(),
    })
    return schema
};

export default LoginValidationSchema