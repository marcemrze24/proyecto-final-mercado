import { Button, Card } from "react-bootstrap";
function ProductCard() {
    return (
        <Card className="border-0">
            <Card.Img variant="top" src={require("../Images/product-15.jpg")} />
            <Card.Body>
                <Card.Title>Product 15</Card.Title>
                <Card.Text>Some product generic information</Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
