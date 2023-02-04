import AppRouter from "./components/AppRouter";
import { CartProvider } from "./components/CartContext";
import { LoginProvider } from "./components/LoginContext";
import { SignInProvider } from "./components/SignInContext";

function App() {
    return (
        <SignInProvider>
            <LoginProvider>
                <CartProvider>
                    <AppRouter />
                </CartProvider>
            </LoginProvider>
        </SignInProvider>
    );
}

export default App;
