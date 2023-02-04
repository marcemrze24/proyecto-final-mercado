import { Container } from "react-bootstrap";
import { GetData } from "../helpers/GetData";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    useEffect(() => {
        GetData()
            .then((data) => {
                categoryId
                    ? setProduct(
                          data.filter((prod) => prod.category === categoryId)
                      )
                    : setProduct(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);
    return (
        <Container className="my-5">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <ItemList product={product} categoryId={categoryId} />
            )}
        </Container>
    );
}

export default ItemListContainer;
