import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            {/* <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                    path="/products/:categoryId"
                    element={<ItemListContainer />}
                />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes> */}
            <ItemDetailContainer />
        </BrowserRouter>
    );
}

export default App;
