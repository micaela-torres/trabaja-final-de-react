import Container from 'react-bootstrap/Container';
import "../Navbar/navbar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import logo from "../../img/logo-color.png";


function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="nav">
                <div className='nav-logo'>
                    <Link to="/">
                        <img src={logo} alt="" width={150} />
                    </Link>
                </div>
                <ul>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nav-texto">
                            <href>
                                <Nav.Link><Link to="/">Productos</Link></Nav.Link>
                            </href>
                            <href>
                                <NavDropdown title="Marcas" id="basic-nav-dropdown">
                                    <NavDropdown.Item><Link to="/marcas/Algabo">Algabo</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/marcas/Iberia">Iberia</Link></NavDropdown.Item>
                                </NavDropdown>
                            </href>
                            <Nav.Link to="/Carrito"><CartWidget /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </ul>
            </Container>
        </Navbar >
    );
}

export default NavBar;