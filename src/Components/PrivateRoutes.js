import { Routes, Route, Navigate } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { Cart } from "../components/Cart";
import Shop from "./Shop";

const PrivateRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/shop" element={<Shop />} />
                <Route
                    path="/category/:categoryId"
                    element={<ItemListContainer />}
                />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </>
    );
};

export default PrivateRoutes;
