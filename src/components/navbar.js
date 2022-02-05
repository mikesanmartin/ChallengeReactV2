import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const SiteNavbar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    React Challenge
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href='/home'>Home</Nav.Link>
                    <Nav.Link href='/search'>Buscador de platos</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default SiteNavbar