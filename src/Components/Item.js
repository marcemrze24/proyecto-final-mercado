import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ name, price, image, id }) {
    return (
        <Card className="border-0">
            <Link to={`/item/${id}`}>
                <Card.Img variant="top" src={image} />
            </Link>
            <Card.Body className="px-0">
                <Card.Subtitle className="text-muted text-capitalize d-flex justify-content-between opacity-75">
                    <Link
                        to={"/shop"}
                        className="text-decoration-none item-subtitle text-secondary"
                    >
                        shop
                    </Link>
                    <div className="stars-size">
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-secondary"></i>
                    </div>
                </Card.Subtitle>
                <Card.Title className="fw-bold pt-2 pb-2">
                    <Link
                        className="text-decoration-none text-dark item-title"
                        to={`/item/${id}`}
                    >
                        {name}
                    </Link>
                </Card.Title>
                <Card.Text className="text-muted item-price opacity-75">
                    ${price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Item;
