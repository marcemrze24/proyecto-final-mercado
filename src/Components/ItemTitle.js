import { Row, Col, Nav, Button } from "react-bootstrap";

export const ItemTitle = () => {
    return (
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
    );
};
