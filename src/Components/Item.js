import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function Item({ name, price, image, category, id }) {
    return (
        <Card className="border-0">
            <Card.Img variant="top" src={image} />
            <Card.Body className="px-0">
                <Card.Title>{name}</Card.Title>
                <Card.Text className="fs-5">$ {price}</Card.Text>
                <Link className="btn btn-outline-primary" to={`/item/${id}`}>
                    View More
                </Link>
                <Card.Footer>Category: {category}</Card.Footer>
            </Card.Body>
        </Card>
    );
}

export default Item;
