import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "./LoginContext";

const Login = () => {
    const { user, validateUser } = useContext(LoginContext);

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        validateUser(values);
    };

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Container className="my-5 w-50">
            <Row>
                <h1 className="mb-5">
                    Welcome to <span className="fw-bold">Shopper.</span>
                </h1>
            </Row>
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
                <div className="d-flex justify-content-between">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Link to={"/sign"} className="btn btn-success">
                        Sign in
                    </Link>
                </div>
            </Form>
        </Container>
    );
};

export default Login;
