import { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { CartContext } from "./CartContext";

const CartDetail = () => {
    const { cart, removeCartItem } = useContext(CartContext);
    return (
        <>
            {cart.map((item, index) => (
                <Row
                    className="align-items-center py-4 my-2 border-bottom fs-6"
                    key={index}
                >
                    <Col lg={5} sm={12} xs={12} className="mb-2">
                        <Row className="align-items-center">
                            <Col lg={3} sm={2} xs={3}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{ height: "100px", width: "80px" }}
                                />
                            </Col>
                            <Col lg={9} sm={10} xs={9} className="px-lg-4">
                                <p className="mb-0 fw-semibold">{item.name}</p>
                                <p className="text-muted">{item.category}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2} sm={3} xs={3}>
                        <p className="m-0">$ {item.price}</p>
                    </Col>
                    <Col lg={2} sm={3} xs={3}>
                        <p className="m-0">{item.counter}</p>
                    </Col>
                    <Col lg={2} sm={3} xs={3}>
                        <p className="m-0">
                            $ {parseFloat(item.counter * item.price).toFixed(2)}
                        </p>
                    </Col>
                    <Col lg={1} sm={3} xs={3}>
                        <Button
                            variant="light"
                            className="rounded-circle"
                            onClick={() => {
                                removeCartItem(item.id);
                            }}
                        >
                            <BsTrash />
                        </Button>
                    </Col>
                </Row>
            ))}
        </>
    );
};

export default CartDetail;
