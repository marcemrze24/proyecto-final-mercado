import { Card } from "react-bootstrap";
import { AddItemButton } from "./AddItemButton";
function ProductCard() {
    return (
        <Card className="border-0">
            <Card.Img variant="top" src={require("../images/product-15.jpg")} />
            <Card.Body>
                <Card.Title>Product 15</Card.Title>
                <Card.Text>Some product generic information</Card.Text>
                <AddItemButton />
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
