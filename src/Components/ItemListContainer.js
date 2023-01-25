import { Container } from "react-bootstrap";
import { GetData } from "../helpers/GetData";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [product, setProduct] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        GetData().then((data) => {
            categoryId
                ? setProduct(
                      data.filter((prod) => prod.category === categoryId)
                  )
                : setProduct(data);
        });
    }, [categoryId]);
    return (
        <Container className="my-5">
            <ItemList product={product} />
        </Container>
    );
}

export default ItemListContainer;
