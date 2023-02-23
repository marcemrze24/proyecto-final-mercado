import { Button, Row, Col, Image } from "react-bootstrap";
import ItemCounter from "./ItemCounter";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

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
        <Row>
            <Col
                lg={7}
                className="d-flex justify-content-center align-content-center"
            >
                <Image fluid src={image} />
            </Col>
            <Col lg={5}>
                <Row>
                    <Col>
                        <span className="text-uppercase">{category}</span>
                        <h1 className="fw-semibold fs-1">{name}</h1>
                        <span className="text-muted fw-semibold fs-4">
                            $ {price}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="lh-sm text-muted fw-semibold pt-4">
                            {description}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ItemCounter
                            counter={counter}
                            handleSubs={counterSubstraction}
                            handleSum={counterAddition}
                        />
                    </Col>
                </Row>
                {isInCart(id) ? (
                    <Row>
                        <Col lg={5}>
                            <Button
                                variant="danger"
                                className="rounded-0 px-5 py-3 text-uppercase"
                                onClick={() => {
                                    removeCartItem(id);
                                }}
                            >
                                Remove
                            </Button>
                        </Col>
                    </Row>
                ) : (
                    <Col lg={7}>
                        <Button
                            variant="success"
                            className="rounded-0 px-5 py-3 text-uppercase w-100"
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </Button>
                    </Col>
                )}
            </Col>
        </Row>
    );
};

export default ItemDetail;
