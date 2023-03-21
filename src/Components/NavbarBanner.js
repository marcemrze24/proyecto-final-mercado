import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavbarBanner.css";

const NavbarBanner = ({ category }) => {
    const location = useLocation();
    if (category || location.pathname === "/shop") {
        return (
            <div className="banner-center">
                <div className="text-white w-50 p-5">
                    <h1 className="text-capitalize text-light banner-text pb-5 separation">
                        {category || "shop"}
                    </h1>
                </div>
            </div>
        );
    }
    return (
        <div className="banner-center">
            <div className="text-white">
                <h1 className="text-capitalize banner-text fw-light">
                    the best fashion,
                </h1>
                <h1 className="text-info banner-text pb-5">Today!</h1>
                <Link
                    to={"/category/women"}
                    className="btn rounded-0 btn-light text-uppercase banner-button py-2 px-4"
                >
                    shop now
                </Link>
            </div>
        </div>
    );
};

export default NavbarBanner;
