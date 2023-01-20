import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                    path="/category/:categoryId"
                    element={<ItemListContainer />}
                />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
