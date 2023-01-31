import { Row, Col } from "react-bootstrap";
import Item from "./Item";

export const ItemList = ({ product, categoryId }) => {
    return (
        <div>
            <Row>
                {categoryId && (
                    <h1
                        className="text-capitalize text-center pb-5"
                        style={{ fontSize: "3.125rem" }}
                    >
                        {categoryId}
                    </h1>
                )}
            </Row>
            <Row>
                <p
                    className="text-uppercase fs-6 fw-semibold py-4"
                    style={{ color: "gray" }}
                >
                    {product.length > 0 && product.length} products
                </p>
            </Row>
            <Row lg={4} md={3} sm={2} xs={1} className="g-4">
                {/*START:  COl > CARD */}
                {product.map((item) => {
                    return (
                        <Col key={item.id} xs={8}>
                            <Item {...item} />
                        </Col>
                    );
                })}
                {/*END:  COl > CARD  */}
            </Row>
        </div>
    );
};
