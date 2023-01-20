import { Row, Col } from "react-bootstrap";
import Item from "./Item";

export const ItemList = ({ product }) => {
    return (
        <Row lg={4} md={3} sm={2} className="g-4">
            {/*START:  COl > CARD */}
            {product.map((item) => {
                return (
                    <Col key={item.id}>
                        <Item {...item} />
                    </Col>
                );
            })}
            {/*END:  COl > CARD  */}
        </Row>
    );
};
