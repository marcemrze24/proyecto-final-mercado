import { Row, Col, Button } from "react-bootstrap";

export const ItemFooter = () => {
    return (
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
    );
};
