import { Button, Row, Col, Image, Card } from "react-bootstrap";
import ItemCounter from "./ItemCounter";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({
    id,
    name,
    description,
    image,
    price,
    stock,
    category,
}) => {
    const [counter, setCounter] = useState(1);
    const { addToCart, isInCart, updateCartItem, removeCartItem } =
        useContext(CartContext);
    const counterSubstraction = () => {
        counter > 1 && setCounter(counter - 1);
    };
    const counterAddition = () => {
        counter < stock && setCounter(counter + 1);
    };
    const handleAddToCart = () => {
        const item = {
            id,
            name,
            description,
            image,
            price,
            stock,
            category,
            counter,
        };
        !isInCart(id) ? addToCart(item) : updateCartItem(item);
    };
    return (
        <div className="p-3">
            <Row xs={1} md={2}>
                <Col xs={12} sm={12} lg={5} xl={4} className="mx-auto">
                    <Image fluid src={image} />
                </Col>
                <Col>
                    <Card className="border-0">
                        <Card.Body className="px-0">
                            <Card.Title className="fw-semibold pt-2 pb-2">
                                <Link
                                    className="text-decoration-none text-dark item-title"
                                    to={`/item/${id}`}
                                >
                                    {name}
                                </Link>
                            </Card.Title>
                            <Card.Subtitle className="text-muted text-capitalize d-flex justify-content-between opacity-75 py-2">
                                <div className="stars-size">
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-warning"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                </div>
                            </Card.Subtitle>
                            <Card.Text className="text-muted item-price opacity-75 pt-3">
                                ${price}
                            </Card.Text>
                            <Card.Text className="item-description text-muted py-4">
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {isInCart(id) ? (
                        <Col>
                            <Button
                                variant="danger"
                                className="rounded-0 px-4 py-3 text-uppercase"
                                onClick={() => {
                                    removeCartItem(id);
                                }}
                            >
                                Remove
                            </Button>
                        </Col>
                    ) : (
                        <>
                            <Col>
                                <ItemCounter
                                    counter={counter}
                                    handleSubs={counterSubstraction}
                                    handleSum={counterAddition}
                                />
                            </Col>
                            <Col>
                                <Button
                                    variant="dark"
                                    className="rounded-0 px-5 py-3 text-uppercase"
                                    onClick={handleAddToCart}
                                >
                                    Add to cart
                                </Button>
                            </Col>
                        </>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default ItemDetail;
