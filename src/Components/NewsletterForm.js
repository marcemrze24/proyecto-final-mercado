import React from "react";
import { Row, Col } from "react-bootstrap";
import "./NewsletterForm.css";

const NewsletterForm = () => {
    return (
        <Row className="newsletter-bg py-5 my-5">
            <Col
                className="text-center mx-auto"
                xs={12}
                sm={10}
                md={10}
                lg={9}
                xl={8}
                xxl={6}
            >
                <h1 className="fw-bold">Subscribe to our Newsletter</h1>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus tenetur, dicta est cumque ea sapiente doloribus totam
                    nam, similique excepturi dignissimos atque ipsa voluptate
                    consequatur quis quas in? Nisi, maxime!
                </p>
                <form>
                    <div className="form-floating mb-3">
                        <i className="fas fa-envelope icon-fix fa-lg"></i>
                        <input
                            type="email"
                            className="form-control"
                            id="floatingEmail"
                            placeholder="Email"
                        />
                        <label htmlFor="floatingEmail">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <i className="fas fa-user icon-fix fa-lg"></i>
                        <input
                            type="text"
                            className="form-control"
                            id="floatingUser"
                            placeholder="Name"
                        />
                        <label htmlFor="floatingEmail">First Name</label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-outline-dark rounded-0 btn-lg"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        Subscribe
                    </button>
                </form>
            </Col>
        </Row>
    );
};

export default NewsletterForm;
