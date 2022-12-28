import "./App.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { CartProvider } from "react-use-cart";

function App() {
    return (
        <div className="App">
            <CartProvider>
                <Home />
                <Cart />
            </CartProvider>
        </div>
    );
}

export default App;
