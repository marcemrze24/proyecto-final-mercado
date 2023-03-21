import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { CartContext } from "./CartContext";
import "./CartDetail.css";

const CartDetail = () => {
    const { cart, removeCartItem } = useContext(CartContext);
    return (
        <>
            {cart.map((item) => (
                <Row
                    key={item.id}
                    className="border-top border-bottom py-3 align-items-center"
                >
                    <Col xs={2}>
                        <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid"
                        />
                    </Col>
                    <Col>
                        <span className="item-category text-muted text-capitalize">
                            {item.category}
                        </span>
                        <h6 className="item-name fw-bold">{item.name}</h6>
                    </Col>
                    <Col className="text-center">
                        <h6 className="mb-1">{item.counter}</h6>
                    </Col>
                    <Col xs="auto">
                        <span>${item.price * item.counter}</span>
                        <button
                            className="btn text-danger"
                            onClick={() => {
                                removeCartItem(item.id);
                            }}
                        >
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </Col>
                </Row>
            ))}
        </>
    );
};

export default CartDetail;
