import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "./LoginContext";

const Login = () => {
    const { user, login, loading } = useContext(LoginContext);

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        login(values);
    };

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Container className="my-5 w-100 pt-5">
            <Row className="pt-5 mt-5">
                <Col lg={8}>
                    <h1 className="mb-5">
                        Welcome to <span className="fw-bold">Shopper.</span>
                    </h1>
                    <p className="text-muted fs-5 w-75">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi nam deserunt, iste error suscipit vel odit.
                        Commodi, voluptas modi doloremque enim fuga velit
                        nesciunt quam voluptatum quisquam perferendis neque
                        deserunt.
                    </p>
                </Col>
                <Col lg={4} className="mt-5">
                    {user.error && <p className="text-danger">{user.error}</p>}
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email adress</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="my-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={values.password}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Row>
                            <Col lg={12} className="border-bottom pb-4">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100 fw-semibold py-2"
                                    disabled={loading}
                                >
                                    Log In
                                </Button>
                            </Col>
                            <Col lg={12} className="pt-4 text-center">
                                <Link
                                    to={"/sign"}
                                    className="btn btn-success w-50 fw-semibold py-2"
                                >
                                    Sign in
                                </Link>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
