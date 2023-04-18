import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "./LoginContext";
import "./Login.css";
import video from "../images/video.mp4";

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
        <div className="login-container">
            <video autoPlay muted loop className="video-container">
                <source src={video} type="video/mp4" />
            </video>
            <Container fluid className="container-bg">
                <Row xs={1} lg={2} className="w-100">
                    <Col className="mx-auto">
                        <h1 className="d-none d-lg-block mb-5 text-light">
                            Welcome to{" "}
                            <span className="fw-bold text-danger">
                                Shopper.
                            </span>
                        </h1>
                        <p className="text-light d-none d-lg-block w-75 lh-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi nam deserunt, iste error suscipit vel
                            odit. Commodi, voluptas modi doloremque enim fuga
                            velit nesciunt quam voluptatum quisquam perferendis
                            neque deserunt.
                        </p>
                    </Col>
                    <Col
                        sm={10}
                        md={8}
                        lg={6}
                        xl={5}
                        xxl={3}
                        className="mx-auto"
                    >
                        <h2 className="login-text text-center text-light fw-semibold mb-5">
                            Login
                        </h2>
                        {user.error && (
                            <p className="text-danger fw-semibold">
                                {user.error}
                            </p>
                        )}
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-floating mb-3">
                                <i className="fas fa-envelope icon-fix fa-lg"></i>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingEmail"
                                    placeholder="Email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="floatingEmail">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <i className="fas fa-key icon-fix fa-lg"></i>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Enter Password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="floatingPassword">
                                    Password
                                </label>
                            </div>
                            <div className="d-flex flex-column justify-content-between gap-3 mt-4">
                                <button
                                    type="submit"
                                    className="btn btn-dark rounded-0 btn-lg px-5"
                                    disabled={loading}
                                >
                                    {loading ? "Loading..." : "Login"}
                                </button>
                                <div className="d-flex justify-content-center align-items-center text-white">
                                    <span>New user?</span>
                                    <Link
                                        to={"/sign"}
                                        className="btn btn-link text-white sign-btn px-1"
                                    >
                                        Sign in
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
