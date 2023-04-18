import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../firebase/config";
import Loader from "./Loader";
import ItemListHeader from "./ItemListHeader";
import ItemListCollage from "./ItemListCollage";
import Header from "./Header";
import ItemListFeatured from "./ItemListFeatured";
import NewsletterForm from "./NewsletterForm";

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
    if (loading) {
        return (
            <>
                <Header />
                <Loader />
            </>
        );
    }
    if (categoryId) {
        return (
            <>
                <Header />
                <Container className="my-5">
                    <ItemList product={product} categoryId={categoryId} />
                </Container>
            </>
        );
    }
    return (
        <>
            <Header />
            <Container className="my-5">
                <ItemListHeader />
                <ItemListCollage />
                <ItemListFeatured product={product} />
                <NewsletterForm />
            </Container>
        </>
    );
}

export default ItemListContainer;
