import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ItemCounter from "./ItemCounter";
import { useState } from "react";

const ItemDetail = ({
    id,
    name,
    description,
    image,
    price,
    stock,
    category,
}) => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(1);

    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>{stock}</p>
            <h3>$ {price}</h3>
            <Button
                variant="dark"
                onClick={() => {
                    navigate(-1);
                }}
            >
                Volver
            </Button>
            <ItemCounter
                counter={counter}
                setCounter={setCounter}
                max={stock}
            />
        </div>
    );
};

export default ItemDetail;
