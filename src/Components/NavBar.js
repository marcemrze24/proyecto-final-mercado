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
                        <Nav.Link>
                            <Link
                                to={"/products/women"}
                                className="text-decoration-none text-danger"
                            >
                                Women
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                to={"/products/men"}
                                className="mx-lg-5 text-decoration-none text-danger"
                            >
                                Men
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                to={"/products/kids"}
                                className="text-decoration-none text-danger"
                            >
                                Kids
                            </Link>
                        </Nav.Link>
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
