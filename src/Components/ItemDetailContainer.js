import { useEffect, useState } from "react";
import { GetDataById } from "../helpers/GetData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    useEffect(() => {
        GetDataById(1).then((data) => setItem(data));
    }, []);

    return (
        <div className="container my-5">
            <h1>Product</h1>
            {item && <ItemDetail {...item} />}
        </div>
    );
};

export default ItemDetailContainer;
