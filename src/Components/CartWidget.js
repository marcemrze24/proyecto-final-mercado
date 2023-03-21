import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

//
function CartWidget() {
    const { cart } = useContext(CartContext);
    return (
        <Link to={"/cart"} className="nav-link">
            <div className="btn btn-outline-secondary rounded-0">
                <span className="pe-1" style={{ fontSize: "0.9rem" }}>
                    My Cart
                </span>
                <span className="border-start border-secondary ps-1 position-relative">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                        {cart.length}
                    </span>
                </span>
            </div>
        </Link>
    );
}

export default CartWidget;
