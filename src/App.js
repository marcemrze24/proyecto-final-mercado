import AppRouter from "./components/AppRouter";
import { CartProvider } from "./components/CartContext";
import { LoginProvider } from "./components/LoginContext";
import "./App.css";

function App() {
    return (
        <LoginProvider>
            <CartProvider>
                <AppRouter />
            </CartProvider>
        </LoginProvider>
    );
}

export default App;
