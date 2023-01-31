import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

//
function CartWidget() {
    const { cart } = useContext(CartContext);
    return (
        <Link to={"/cart"} className="position-relative">
            <FaShoppingCart
                style={{ width: "32px", height: "auto", color: "white" }}
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
            </span>
        </Link>
    );
}

export default CartWidget;
