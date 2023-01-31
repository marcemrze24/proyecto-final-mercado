import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contact from "./components/Contact";
import { Cart } from "./components/Cart";
import { CartProvider } from "./components/CartContext";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/category/:categoryId"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/item/:itemId"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to={"/"} />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
