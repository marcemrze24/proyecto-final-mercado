import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

function ItemListContainer() {
    return (
        <Nav>
            <NavDropdown title="Clothing" id="nav-dropdown">
                <NavDropdown.Item>Clothing - ex</NavDropdown.Item>
                <NavDropdown.Item>Clothing - ex</NavDropdown.Item>
                <NavDropdown.Item>Clothing - ex</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Clothing - ex</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Shoes" id="nav-dropdown">
                <NavDropdown.Item>Shoes - ex</NavDropdown.Item>
                <NavDropdown.Item>Shoes - ex</NavDropdown.Item>
                <NavDropdown.Item>Shoes - ex</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Shoes - ex</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Accesories" id="nav-dropdown">
                <NavDropdown.Item>Accesories - ex</NavDropdown.Item>
                <NavDropdown.Item>Accesories - ex</NavDropdown.Item>
                <NavDropdown.Item>Accesories - ex</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Accesories - ex</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Shop Collection" id="nav-dropdown">
                <NavDropdown.Item>Shop Collection - ex</NavDropdown.Item>
                <NavDropdown.Item>Shop Collection - ex</NavDropdown.Item>
                <NavDropdown.Item>Shop Collection - ex</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Shop Collection - ex</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}

export default ItemListContainer;
