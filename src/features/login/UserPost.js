import axios from 'axios'
import { handleResponse, handleError } from './Handles.js'
import { LoginURL } from '../../routes/URLs.js';

const UserPost = (values) => {
    let email = values.email;
    let password = values.password;
    let user = {email, password};

    axios.post( LoginURL, user )
    .then(function(response){
        handleResponse(response)
    })
    .catch(function (error){
        handleError(error)    
    })

    return(
       alert('login')
    )
}

export default UserPost
