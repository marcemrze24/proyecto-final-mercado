import { useState } from "react";
import { Button } from "react-bootstrap";

export const AddItemButton = () => {
    const [quantity, setQuantity] = useState(0);
    const addToCart = () => {
        setQuantity(quantity + 1);
    };
    return (
        <Button variant="success" onClick={addToCart}>
            Add to cart
        </Button>
    );
};
