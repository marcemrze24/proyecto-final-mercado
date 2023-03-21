import React, { useContext, useRef } from "react";
import NavBar from "./NavBar";
import "./Header.css";
import NavbarBanner from "./NavbarBanner";
import { LoginContext } from "./LoginContext";
import { useParams, useLocation } from "react-router-dom";
import menImg from "../images/men.jpeg";
import womenImg from "../images/women.jpg";
import kidsImg from "../images/kids.jpeg";
import shopImg from "../images/shop.jpeg";

const Header = () => {
    const { user } = useContext(LoginContext);
    const { categoryId } = useParams();
    const { itemId } = useParams();
    const headerRef = useRef();
    const location = useLocation();
    const bgImageHandler = () => {
        if (categoryId === "men") {
            return {
                background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${menImg}) center/cover no-repeat`,
            };
        }
        if (categoryId === "women") {
            return {
                background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${womenImg}) center/cover no-repeat`,
            };
        }
        if (categoryId === "kids") {
            return {
                background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${kidsImg}) center/cover no-repeat`,
            };
        }
        if (location.pathname === "/shop") {
            return {
                background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${shopImg}) center/cover no-repeat`,
            };
        }
    };
    if (!user.logged) {
        return <NavBar />;
    }
    if (itemId) {
        return <NavBar />;
    }
    if (location.pathname === "/cart") {
        return <NavBar />;
    }
    return (
        <header style={bgImageHandler()}>
            <NavBar headerRef={headerRef} />
            <NavbarBanner category={categoryId} />
        </header>
    );
};

export default Header;
