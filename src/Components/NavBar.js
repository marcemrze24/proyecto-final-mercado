import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
//
function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className="px-5">
            <Container>
                <Navbar.Brand href="/" className="fs-4">
                    Shopper.
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link
                            to={"/products/women"}
                            className="text-decoration-none text-danger"
                        >
                            Women
                        </Link>
                        <Link
                            to={"/products/men"}
                            className="mx-5 text-decoration-none text-danger"
                        >
                            Men
                        </Link>
                        <Link
                            to={"/products/kids"}
                            className="text-decoration-none text-danger"
                        >
                            Kids
                        </Link>
                    </Nav>
                    <Nav>
                        <Nav.Item>
                            <CartWidget />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
