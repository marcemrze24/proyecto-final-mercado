import { Container } from "react-bootstrap";
import { GetData } from "../helpers/GetData";
import { useState, useEffect } from "react";
import { ItemTitle } from "./ItemTitle";
import { ItemFooter } from "./ItemFooter";
import { ItemList } from "./ItemList";

function ItemListContainer() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        GetData()
            .then((data) => {
                setProduct(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <Container>
            <ItemTitle />
            <ItemList product={product} />
            <ItemFooter />
        </Container>
    );
}

export default ItemListContainer;
