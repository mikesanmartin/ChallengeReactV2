import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { addToMenu } from '../../store/actions'

export const FoodComponent = (data) => {
    const menu = data
    const dispatch = useDispatch()
    const addMenu = (data) => {dispatch(addToMenu(data))}

    return(
        <div>
            {menu.map((data) => 
            <div className='foodComponent' key={data.id}>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant='top' src={data.image}/>
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>Precio ${data.pricePerServing}</Card.Text>
                        <Button variant='secondary' onClick={() => console.log('boton detalle presionado')}>Ver detalles</Button>
                        <Button variant='secondary' onClick={() => addMenu(data)}>Añadir a menu</Button>
                    </Card.Body>
                </Card>
            </div>
            )}
        </div>
    )
}