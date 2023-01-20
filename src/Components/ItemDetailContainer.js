import { useEffect, useState } from "react";
import { GetDataById } from "../helpers/GetData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { itemId } = useParams();
    useEffect(() => {
        GetDataById(Number(itemId)).then((data) => setItem(data));
    }, [itemId]);

    return (
        <div className="container my-5">
            <h1>Product</h1>
            {item && <ItemDetail {...item} />}
        </div>
    );
};

export default ItemDetailContainer;
