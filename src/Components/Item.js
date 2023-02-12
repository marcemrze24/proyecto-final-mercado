import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function Item({ name, price, image, id }) {
    return (
        <Card className="border-0">
            <Card.Img
                variant="top"
                style={{ width: "250px", height: "300px" }}
                src={image}
            />
            <Card.Body className="px-0">
                <Card.Title className="fw-semibold">{name}</Card.Title>
                <Card.Text className="fs-5 fw-normal">
                    $ {price}
                    <Link
                        className="btn btn-link text-decoration-none text-success mb-1"
                        to={`/item/${id}`}
                    >
                        View More
                    </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Item;
