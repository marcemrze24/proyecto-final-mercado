import "./Cart.css";
import { useCart } from "react-use-cart";

function Cart() {
    const { isEmpty, totalUniqueItems, totalItems } = useCart();
    if (isEmpty) return <h5 className="text-center py-5">My cart is empty.</h5>;
    return (
        <div className="container-fluid py-3">
            <div className="row">
                <h4 className="text-center py-3 text-decoration-underline">
                    My Cart
                </h4>
                <div className="col-12">
                    <div className="d-flex">
                        <p className="position-relative fw-bolder text-title fs-5">
                            Cart{" "}
                            <span className="badge bg-danger position-absolute translate-middle rounded-pill mx-1">
                                {totalUniqueItems}
                            </span>
                        </p>
                        <p className="fw-bolder text-title fs-5">
                            ({totalUniqueItems}) total Items{" "}
                            <span className="badge bg-success bg-danger position-absolute translate-middle rounded-pill mx-1">
                                {totalItems}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
