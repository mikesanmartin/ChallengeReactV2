import ShowFood from '../features/home/showMenu';
import Badge from 'react-bootstrap/Badge';

const Home = () => {
    return(
        <div>
            <Badge bg='secondary'>Platos</Badge>
            <ShowFood/>
        </div>
    )
}

export default Home