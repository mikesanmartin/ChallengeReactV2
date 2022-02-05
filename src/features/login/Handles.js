import swal from "sweetalert";
import { GetAccessToken } from "./GetAccessToken";
import HomeRedirect from "../../routes/HomeRedirect";

export function handleResponse(response){
    if(response.status === 200){
        GetAccessToken(response.data);
        return(
            // console.log('aca deberia pasar algo')
            HomeRedirect('/home')
        )
    }
}

export function handleError(error){
    if(error.response){
        swal({
            title: 'Error',
            text: 'Ha ingresado un usuario o contraseña invalido, por favor intente nuevamente',
            icon: 'error',
            button: 'Continuar...'
        })
    }
}