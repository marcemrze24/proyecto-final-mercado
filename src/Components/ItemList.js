import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

export const ItemList = ({ product }) => {
    return (
        <Row lg={4} md={3} sm={2} className="g-4">
            {/*START:  COl > CARD */}
            {product.map((item) => {
                return (
                    <Col key={item.id}>
                        <ProductCard {...item} />
                    </Col>
                );
            })}
            {/*END:  COl > CARD  */}
        </Row>
    );
};
