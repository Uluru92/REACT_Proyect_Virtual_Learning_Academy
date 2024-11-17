import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function MenuComponent() {
    return (
        <div>
            <h1>Hola</h1>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Uluru Design</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Hooks" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={'hookusestate'}>Use State</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'hookuseref'}>Use Ref</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'hookuseeffect'}>Use Effect</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Generales" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Carruseles</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'formulario'}>Formularios</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Apis</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Modal</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MenuComponent;