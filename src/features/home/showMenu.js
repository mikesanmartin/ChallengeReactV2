import { useSelector, useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { removeFromMenu } from '../../store/actions'

const ShowFood = () => {
    const showMenu = useSelector((state) => state); 
    
    const dispatch = useDispatch()
    const removeMenu = (data) => {dispatch(removeFromMenu(data))}

    return(
        <div className='content'>
            <Table striped bordered hover variant='dark' size='sm'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Plato</th>
                        <th>Healt Score</th>
                        <th>Tiempo de preparación (min.)</th>
                        <th>Precio</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {showMenu.menu.map((food) =>
                        <tr key={food.id}>
                            <td><img src={food.image} alt='error'/></td>
                            <td>{food.title}</td>
                            <td>{food.healthScore}</td>
                            <td>{food.readyInMinutes} '</td>
                            <td>$ {food.pricePerServing}</td>
                            <td><Button variant="outline-secondary" onClick={() => removeMenu(food)}>Eliminar del menu</Button></td>
                        </tr>
                    )}
                    <tr>
                        <td>Precio Total</td>
                        <td>Tiempo promedio</td>
                        <td>Health Score</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ShowFood