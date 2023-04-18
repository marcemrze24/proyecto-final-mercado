import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
    return (
        <Container fluid>
            <Row className="bg-light footer-shadow" xs={1}>
                <Col
                    className="text-center rrss d-flex justify-content-evenly mx-auto pt-3"
                    md={8}
                    sm={9}
                    lg={7}
                    xxl={6}
                >
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </Col>
                <Col
                    className="mx-auto footer-links d-flex flex-column flex-sm-row justify-content-sm-evenly align-items-center my-3"
                    md={10}
                    lg={9}
                    xxl={8}
                >
                    <a href="/">Home</a>
                    <a href="/">Services</a>
                    <a href="/">About</a>
                    <a href="/">Terms</a>
                    <a href="/">Privacy Policy</a>
                </Col>
                <Col className="footer-copyright text-center">
                    <p>
                        Copyright © 2017{" "}
                        <span className="fw-bold">Marcelo Mercado</span> . All
                        Right Reserved
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
