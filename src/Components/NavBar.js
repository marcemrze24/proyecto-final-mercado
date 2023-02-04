import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
//
function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="px-5 py-3">
            <Container>
                <Link to={"/"} className="text-light text-decoration-none">
                    <Navbar.Brand className="fs-3 fw-semibold">
                        Shopper.
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-between pt-2"
                >
                    <Nav>
                        <Nav.Item className="mx-lg-4 fw-bold">
                            <NavLink
                                to={"/category/women"}
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                              textDecoration: "none",
                                              color: "#FFF5EE",
                                          }
                                        : {
                                              textDecoration: "none",
                                              color: "rgba(255, 255, 255, 0.6)",
                                          }
                                }
                            >
                                Women
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item className="mx-lg-4 fw-bold">
                            <NavLink
                                to={"/category/men"}
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                              textDecoration: "none",
                                              color: "#FFF5EE",
                                          }
                                        : {
                                              textDecoration: "none",
                                              color: "rgba(255, 255, 255, 0.6)",
                                          }
                                }
                            >
                                Men
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item className="mx-lg-4 fw-bold">
                            <NavLink
                                to={"/category/kids"}
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                              textDecoration: "none",
                                              color: "#FFF5EE",
                                          }
                                        : {
                                              textDecoration: "none",
                                              color: "rgba(255, 255, 255, 0.6)",
                                          }
                                }
                            >
                                Kids
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                    <Nav className="pt-sm-3 pt-lg-0">
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
