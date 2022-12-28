import "./Cards.css";
import { useCart } from "react-use-cart";

function Cards({ img, title, text, price, item }) {
    const { addItem } = useCart();
    return (
        <>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4">
                <div className="card h-100 shadow rounded-0">
                    <img src={img} alt="" className="card-img-top img-fluid" />
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">{title}</h5>
                            <span className="fw-bolder">{price}</span>
                        </div>
                        <div className="">
                            <p className="card-text">{text}</p>
                        </div>
                        <div className="d-grid justify-content-end mt-4">
                            <button
                                className="btn btn-outline-success btn-sm"
                                onClick={() => addItem(item)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
