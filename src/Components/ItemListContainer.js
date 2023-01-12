import { Container } from "react-bootstrap";
import { GetData } from "../helpers/GetData";
import { useState, useEffect } from "react";
import { ItemFooter } from "./ItemFooter";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [product, setProduct] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        GetData()
            .then((data) => {
                if (categoryId) {
                    setProduct(
                        data.filter((prod) => prod.category === categoryId)
                    );
                } else {
                    setProduct(data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [categoryId]);
    return (
        <Container>
            <ItemList product={product} />
            <ItemFooter />
        </Container>
    );
}

export default ItemListContainer;
