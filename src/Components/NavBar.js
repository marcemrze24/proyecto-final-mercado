import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
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
                        <Nav.Item className="mx-lg-4">
                            <NavLink
                                to={"/category/women"}
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                              textDecoration: "none",
                                              color: "red",
                                          }
                                        : {
                                              textDecoration: "none",
                                              color: "gray",
                                          }
                                }
                            >
                                Women
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item className="mx-lg-4">
                            <NavLink
                                to={"/category/men"}
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                              textDecoration: "none",
                                              color: "red",
                                          }
                                        : {
                                              textDecoration: "none",
                                              color: "gray",
                                          }
                                }
                            >
                                Men
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item className="mx-lg-4">
                            <NavLink
                                to={"/category/kids"}
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                              textDecoration: "none",
                                              color: "red",
                                          }
                                        : {
                                              textDecoration: "none",
                                              color: "gray",
                                          }
                                }
                            >
                                Kids
                            </NavLink>
                        </Nav.Item>
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
