import React, { useContext, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SignInContext } from "./SignInContext";

const SignIn = () => {
    const navigate = useNavigate();
    const { addUserToDB } = useContext(SignInContext);
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        address: "",
        country: "",
        city: "",
        locality: "",
        zip: "",
    });
    const handleInputChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };
    const handleNewUser = (e) => {
        e.preventDefault();
        addUserToDB(newUser);
        navigate(-1);
    };

    return (
        <Container className="my-5">
            <Form onSubmit={handleNewUser}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="carlos@hotmail.com"
                            name="email"
                            value={newUser.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={newUser.password}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Habana 4310"
                        name="address"
                        value={newUser.address}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formCountry" className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Argentina, Brasil, Paraguay..."
                        name="country"
                        value={newUser.country}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="La Matanza, Quilmes..."
                            name="city"
                            value={newUser.city}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLocality">
                        <Form.Label>Locality</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="La Tablada, Aldo Bonzi..."
                            name="locality"
                            value={newUser.locality}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="1752"
                            name="zip"
                            value={newUser.zip}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>

                <div className="d-flex justify-content-between">
                    <Button
                        variant="danger"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        Go Back
                    </Button>
                    <Button variant="success" type="submit">
                        Create user
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default SignIn;
