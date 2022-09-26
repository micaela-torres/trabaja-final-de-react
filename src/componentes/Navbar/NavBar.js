import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import logo from "../../img/logo-color.png";


function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/">
                    <img src={logo} alt="" width={150} />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Productos</Link></Nav.Link>
                        <Nav.Link><Link to="/Contacto">Contacto</Link></Nav.Link>
                        <NavDropdown title="Marcas" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/marcas/Algabo">Algabo</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/marcas/Iberia">Iberia</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link to="/Carrito"><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;