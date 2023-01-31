import { useContext } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { CartContext } from "./CartContext";

const CartCheckout = () => {
    const { totalCart, emptyCart } = useContext(CartContext);
    return (
        <Col lg={4}>
            <Card className="rounded-0 text-capitalize">
                <Card.Header className="p-4 pb-3">
                    <Row>
                        <Col>
                            <h5>order summary</h5>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className="p-4 pb-3">
                    <Row>
                        <Col>
                            <p>subtotal</p>
                            <p>shipping</p>
                            <Button
                                variant="link"
                                className="p-0 mb-4 text-success text-decoration-none"
                            >
                                Add coupon code
                            </Button>
                        </Col>
                        <Col className="text-end">
                            <p>$ {totalCart()}</p>
                            <p>free</p>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="p-4 pb-3 fs-5">
                    <Row>
                        <Col>
                            <p>total</p>
                        </Col>
                        <Col className="text-end">
                            <p>$ {totalCart()}</p>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
            <Button
                variant="success"
                className="rounded-0 mt-2 px-5 py-3 text-uppercase w-100"
            >
                Checkout
            </Button>
            <Button
                variant="danger"
                className="rounded-0 mt-2 px-5 py-3 text-uppercase w-100"
                onClick={emptyCart}
            >
                Empty cart
            </Button>
        </Col>
    );
};

export default CartCheckout;
