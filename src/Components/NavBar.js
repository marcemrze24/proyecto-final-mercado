import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
//
function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className="px-5">
            <Container>
                <Navbar.Brand href="#home" className="fs-4">
                    Shopper.
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link1">Catalog</Nav.Link>
                        <Nav.Link href="#link2">Shop</Nav.Link>
                        <Nav.Link href="#link3">Pages</Nav.Link>
                        <Nav.Link href="#link4">Blog</Nav.Link>
                        <Nav.Link href="#link5">Docs</Nav.Link>
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
