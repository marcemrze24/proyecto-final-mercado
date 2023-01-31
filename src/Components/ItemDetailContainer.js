import { useEffect, useState } from "react";
import { GetDataById } from "../helpers/GetData";
import ItemDetail from "./ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const ItemDetailContainer = () => {
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const { itemId } = useParams();
    useEffect(() => {
        GetDataById(Number(itemId)).then((data) => setItem(data));
    }, [itemId]);

    return (
        <Container className="my-5">
            <Row className="pb-5 text-end">
                <Col>
                    <Button
                        variant="primary"
                        className="rounded-0"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        Go back
                    </Button>
                </Col>
            </Row>
            {item && <ItemDetail {...item} />}
        </Container>
    );
};

export default ItemDetailContainer;
