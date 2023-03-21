import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { LoginContext } from "./LoginContext";
import "./NavBar.css";
//
function NavBar({ headerRef }) {
    const { logout, user } = useContext(LoginContext);
    const navRef = useRef();
    const linksRef = useRef();
    const asideLinksRef = useRef();
    const toggleNavbar = () => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        const containerHeight = navRef.current.getBoundingClientRect().height;
        const asideHeight =
            asideLinksRef.current.getBoundingClientRect().height;
        if (containerHeight === 0) {
            navRef.current.style.height = `${linksHeight + asideHeight}px`;
        } else {
            navRef.current.style.height = 0;
        }
    };
    return (
        <nav className="navbar-background p-2" id="nav">
            <div className="text-center d-lg-flex justify-content-lg-between">
                <div className="nav justify-content-between">
                    <Link
                        to={"/"}
                        className="nav-link text-white fw-light navbar-logo fs-1"
                    >
                        Shopper.
                    </Link>
                    {user.logged && (
                        <button
                            className="nav-link btn text-light fs-1 rotate-animation d-lg-none"
                            onClick={toggleNavbar}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    )}
                </div>
                {user.logged && (
                    <div
                        className="my-auto links-container d-lg-flex"
                        ref={navRef}
                    >
                        <div
                            className="nav fs-6 text-capitalize text-start d-inline d-lg-flex my-lg-2 align-items-center category-links"
                            ref={linksRef}
                        >
                            <Link
                                to={"/shop"}
                                className="nav-link text-secondary category-link"
                            >
                                shop
                            </Link>
                            <Link
                                to={"/category/men"}
                                className="nav-link text-secondary category-link"
                            >
                                men
                            </Link>
                            <Link
                                to={"/category/women"}
                                className="nav-link text-secondary category-link"
                            >
                                women
                            </Link>
                            <Link
                                to={"/category/kids"}
                                className="nav-link text-secondary category-link"
                            >
                                kids
                            </Link>
                        </div>
                        <div
                            className="nav logout-container flex-row my-2 ms-lg-auto justify-content-between"
                            ref={asideLinksRef}
                        >
                            <button
                                className="btn nav-link logout-link text-start"
                                onClick={logout}
                            >
                                Log out
                            </button>
                            <CartWidget />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
