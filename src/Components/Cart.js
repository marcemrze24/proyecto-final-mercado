import { Row, Col, Container } from "react-bootstrap";
import CartCheckout from "./CartCheckout";
import CartDetail from "./CartDetail";
import Header from "./Header";
import "./Cart.css";

export const Cart = () => {
    return (
        <>
            <Header />
            <Container className="cart-container mb-5 mt-5">
                <Row xs={1} lg={2}>
                    <Col className="px-4 my-4">
                        <h1 className="text-capitalize fw-semibold text-start">
                            shopping cart
                        </h1>
                        <CartDetail />
                    </Col>
                    <CartCheckout />
                </Row>
            </Container>
        </>
    );
};
