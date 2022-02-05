import axios from 'axios'
import Button from 'react-bootstrap/Button'
import searchValidate from '../validate/searchValidate'
import { MenuURL, AccessKey, SearchMenuParameters } from '../../routes/URLs'
import { useState } from 'react'
import { FoodComponent } from '../menu/FoodComponent'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const SearchForm = () => {

    const [menu, setMenu] = useState([])

    return(
        <div className='container'>        
            <div className='content'>
                <Formik 
                initialValues={{search:''}}
                validate={searchValidate}
                onSubmit={
                    async (values) => {
                        const food = values.search
                        const foodQuery = await axios.get(MenuURL + food + SearchMenuParameters + `&apiKey=${AccessKey}`)
                        if(foodQuery.data.response === 'error'){
                            alert('Ha ocurrido un error')
                        }else{
                            const data = await foodQuery.data.results
                            setMenu(data)
                        }
                }
                }>
                    <Form>
                        <Field type='text' name='search' placeholder='Buscador de platos'/>
                        <ErrorMessage name='search'></ErrorMessage>
                        <br/>
                        <Button variant="secondary" type='submit'>Buscar</Button>
                    </Form>
                </Formik>
            </div>
            <div className='content'>
                {FoodComponent(menu)}
            </div>
        </div>
    )
}

export default SearchForm