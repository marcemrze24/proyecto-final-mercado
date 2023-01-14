import { Card, Button } from "react-bootstrap";
function ProductCard({ name, description, price, image, category }) {
    return (
        <Card className="border-0">
            <Card.Img variant="top" src={image} />
            <Card.Body className="px-0">
                <Card.Title>{name}</Card.Title>
                <Card.Text className="fs-5">$ {price}</Card.Text>
                <Button variant="outline-success" className="mb-4">
                    View More
                </Button>
                <Card.Footer>Category: {category}</Card.Footer>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
