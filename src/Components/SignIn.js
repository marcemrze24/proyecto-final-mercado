import React, { useContext, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SignInContext } from "./SignInContext";

const SignIn = () => {
    const { signIn } = useContext(SignInContext);
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
    });
    const handleInputChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };
    const handleNewUser = (e) => {
        e.preventDefault();
        signIn(newUser);
        navigate(-1);
    };

    return (
        <Container className="my-5 w-25 pt-5">
            <Row>
                <Form onSubmit={handleNewUser}>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="carlos@hotmail.com"
                            name="email"
                            value={newUser.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="my-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={newUser.password}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Row>
                        <Col lg={12} className="border-bottom pb-4">
                            <Button
                                variant="success"
                                type="submit"
                                className="w-100 fw-semibold py-2"
                            >
                                Create user
                            </Button>
                        </Col>
                        <Col lg={12} className="text-center pt-4">
                            <Button
                                variant="danger"
                                className="w-50 fw-semibold py-2"
                                onClick={() => {
                                    navigate(-1);
                                }}
                            >
                                Go Back
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>
    );
};

export default SignIn;
