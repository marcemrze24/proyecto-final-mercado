import { Row, Col, Container } from "react-bootstrap";
import Item from "./Item";

export const ItemList = ({ product }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <p className="text-uppercase fs-6 fw-bold px-3 mt-5">
                        {product.length > 0 && product.length} products
                    </p>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} xl={4} className="p-3">
                {product.map((item, index) => {
                    return (
                        <Col key={index} className="py-3">
                            <Item {...item} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};
