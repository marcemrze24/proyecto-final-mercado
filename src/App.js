import "./App.css";
import Home from "./Components/Home";
import { CartProvider } from "react-use-cart";

function App() {
    return (
        <div className="App">
            <CartProvider>
                <Home />
            </CartProvider>
        </div>
    );
}

export default App;
