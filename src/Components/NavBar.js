import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Offcanvas } from "react-bootstrap";
import CartWidget from "./CartWidget";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useCart } from "react-use-cart";

function NavBar() {
    const { totalItems } = useCart();
    return (
        <Navbar bg="light" expand="false" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="fs-3 ">
                    My Store!
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false">
                    <Button variant="primary">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="currentColor"
                                class="bi bi-cart"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </span>{" "}
                        <Badge bg="secondary">{totalItems}</Badge>
                    </Button>
                </Navbar.Toggle>
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-false"
                    aria-labelledby="offcanvasNavbar-expand-false"
                    placement="end"
                    className="w-50"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title
                            id="offcanvasNavbar-expand-false"
                            className="fs-3 fw-bold"
                        >
                            My Cart
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <CartWidget />
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavBar;
