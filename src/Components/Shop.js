import React, { useEffect, useState } from "react";
import Header from "./Header";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Container } from "react-bootstrap";
import { ItemList } from "./ItemList";
import Loader from "./Loader";

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const q = collection(db, "products");
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
    }, []);
    if (loading) {
        return (
            <>
                <Header />
                <Loader />
            </>
        );
    }
    return (
        <div>
            <Header />
            <Container>
                <ItemList product={product} />
            </Container>
        </div>
    );
};

export default Shop;
