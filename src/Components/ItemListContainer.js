import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import ProductCard from "./ProductCard";

function ItemListContainer() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md="10" lg="8" xl="6">
                    <h2 className="text-center fw-semibold pb-2">
                        Top month Sellers
                    </h2>
                    <Nav className="justify-content-center pb-5">
                        <Nav.Item>
                            <Button variant="link" className="text-danger">
                                Women
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button variant="link" className="text-danger">
                                Men
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button variant="link" className="text-danger">
                                Kids
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
            <Row lg={4} md={3} sm={2} className="g-4">
                <Col>
                    <ProductCard />
                </Col>
                <Col>
                    <ProductCard />
                </Col>
                <Col>
                    <ProductCard />
                </Col>
                <Col>
                    <ProductCard />
                </Col>
                <Col>
                    <ProductCard />
                </Col>
                <Col>
                    <ProductCard />
                </Col>
                <Col>
                    <ProductCard />
                </Col>
                <Col>
                    <ProductCard />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    lg="8"
                    xl="6"
                    className="d-flex py-5 justify-content-center"
                >
                    <Button variant="link" className="text-danger">
                        Discover more
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemListContainer;
