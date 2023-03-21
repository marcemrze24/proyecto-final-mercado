import React from "react";
import CollageItem from "./CollageItem";
import "./ItemListCollage.css";

const collageImages = [
    "collage-1.jpeg",
    "collage-2.jpeg",
    "collage-3.jpeg",
    "collage-4.jpg",
    "collage-5.jpeg",
];

const ItemListCollage = () => {
    return (
        <div className="grid-container my-5 p-2 p-sm-5 m-sm-5">
            {collageImages.map((image, idx) => {
                return (
                    <div className="grid-item" key={idx}>
                        <CollageItem image={image} />
                    </div>
                );
            })}
        </div>
    );
};

export default ItemListCollage;
