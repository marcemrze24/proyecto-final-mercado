import React, { useContext, useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "./LoginContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./SignIn.css";

const SignIn = () => {
    const { loading, register } = useContext(LoginContext);
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        city: "",
        state: "",
        country: "",
        zip: "",
    });
    const MySwal = withReactContent(Swal);
    const regEx = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };
    const handleInputChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };
    const handleNewUser = (e) => {
        e.preventDefault();
        if (!regEx.email.test(newUser.email)) {
            MySwal.fire({
                title: <p className="fs-4 lh-sm">Enter a valid email.</p>,
            });
            return;
        }
        if (!regEx.password.test(newUser.password)) {
            MySwal.fire({
                title: (
                    <p className="fs-4 lh-sm">
                        The password must have between 4 and 12 digits.
                    </p>
                ),
            });
            return;
        }
        register(newUser);
    };

    return (
        <Container fluid className="container-bg">
            <Row>
                <Form onSubmit={handleNewUser}>
                    <div className="d-flex">
                        <div className="form-floating mb-3">
                            <i className="fas fa-envelope icon-fix fa-lg"></i>
                            <input
                                type="text"
                                className="form-control"
                                id="floatingFirstName"
                                placeholder="John"
                                name="first_name"
                                value={newUser.first_name}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="floatingFirstName">
                                First name
                            </label>
                        </div>
                        <div className="form-floating mb-3">
                            <i className="fas fa-envelope icon-fix fa-lg"></i>
                            <input
                                type="text"
                                className="form-control"
                                id="floatingLastName"
                                placeholder="Doe"
                                name="last_name"
                                value={newUser.last_name}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="floatingLastName">Last name</label>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <i className="fas fa-envelope icon-fix fa-lg"></i>
                        <input
                            type="text"
                            className="form-control"
                            id="floatingEmail"
                            placeholder="johndoe@hotmail.com"
                            name="email"
                            value={newUser.email}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="floatingEmail">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <i className="fas fa-envelope icon-fix fa-lg"></i>
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            name="password"
                            value={newUser.password}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="d-flex">
                        <div className="form-floating mb-3">
                            <i className="fas fa-envelope icon-fix fa-lg"></i>
                            <input
                                type="text"
                                className="form-control"
                                id="floatingCity"
                                placeholder="City"
                                name="city"
                                value={newUser.city}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="floatingCity">City / Town</label>
                        </div>
                        <div className="form-floating mb-3">
                            <i className="fas fa-envelope icon-fix fa-lg"></i>
                            <input
                                type="text"
                                className="form-control"
                                id="floatingState"
                                placeholder="State / Region / Province"
                                name="state"
                                value={newUser.state}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="floatingState">
                                State / Region / Province
                            </label>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="form-floating mb-3">
                            <i className="fas fa-envelope icon-fix fa-lg"></i>
                            <input
                                type="text"
                                className="form-control"
                                id="floatingCountry"
                                placeholder="Country"
                                name="country"
                                value={newUser.country}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="floatingCountry">Country</label>
                        </div>
                        <div className="form-floating mb-3">
                            <i className="fas fa-envelope icon-fix fa-lg"></i>
                            <input
                                type="number"
                                className="form-control"
                                id="floatingZip"
                                placeholder="johndoe@hotmail.com"
                                name="zip"
                                value={newUser.zip}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="floatingZip">
                                ZIP / Postal code
                            </label>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between gap-3 mt-4">
                        <button
                            type="submit"
                            className="btn btn-dark rounded-0 btn-lg px-5"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Create user"}
                        </button>
                        <div className="d-flex justify-content-center align-items-center">
                            <Link
                                to={"/login"}
                                className="btn btn-link text-muted sign-btn px-1 text-decoration-none"
                            >
                                <i className="fas fa-arrow-left me-1"></i>
                                Go back
                            </Link>
                        </div>
                    </div>
                </Form>
            </Row>
        </Container>
    );
};

export default SignIn;
