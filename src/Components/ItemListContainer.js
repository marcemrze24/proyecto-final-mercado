import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../firebase/config";

function ItemListContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    useEffect(() => {
        const q = categoryId
            ? query(
                  collection(db, "products"),
                  where("category", "==", categoryId)
              )
            : collection(db, "products");
        getDocs(q)
            .then((snapshot) => {
                setProduct(
                    snapshot.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                );
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
