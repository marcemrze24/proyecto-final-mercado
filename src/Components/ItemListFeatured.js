import React from "react";
import { Col, Row } from "react-bootstrap";
import Item from "./Item";
import "./ItemListFeatured.css";

const ItemListFeatured = (props) => {
    const featuredProducts = props.product.slice(0, 5);
    return (
        <Row>
            <Col xs={12} className="text-center mt-5 px-5">
                <h2 className="fw-semibold my-4 featured-title fs-1">
                    Featured Products
                </h2>
                <p className="text-muted featured-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cumque qui vel porro blanditiis rem impedit sequi earum
                    nihil omnis molestiae.
                </p>
            </Col>
            {featuredProducts.map((item, index) => {
                return (
                    <Col
                        key={index}
                        className="p-3 mx-auto"
                        xs={9}
                        md={5}
                        lg={4}
                        xl={3}
                        xxl={2}
                    >
                        <Item {...item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ItemListFeatured;
