import React from "react";
import "./ItemListHeader.css";

const ItemListHeader = () => {
    return (
        <div className="text-center">
            <p className="text-capitalize mb-2 header-subtitle">who are we</p>
            <h2 className="text-capitalize fw-semibold fs-1">
                welcome to shopper
            </h2>
            <div className="mx-auto header-bar my-5"></div>
            <p className="header-text text-muted my-4 w-50 mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                repellendus illo id laborum ratione cumque, temporibus veritatis
                doloremque rerum beatae! Eos placeat quaerat ipsam tempore sint
                voluptate distinctio totam sapiente.
            </p>
            <h5 className="header-subtitle fw-bold">
                MARCELO MERCADO{""}
                <span className="px-1">-</span>
                <span className="fw-normal text-muted">CEO Shopper.</span>
            </h5>
        </div>
    );
};

export default ItemListHeader;
