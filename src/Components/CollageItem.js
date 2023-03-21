import React from "react";
import { Link } from "react-router-dom";
import "./CollageItem.css";

const CollageItem = (props) => {
    return (
        <div className="collage-thumbnail position-relative">
            <img
                src={require(`../images/${props.image}`)}
                alt="one"
                className="img-fluid"
            />
            <Link
                to={"/shop"}
                className="btn btn-light rounded-0 text-uppercase py-2 px-4 btn-fix border border-top-0 border-start-0 position-absolute bottom-0 start-0 ms-3 mb-3"
            >
                View more
            </Link>
        </div>
    );
};

export default CollageItem;
