import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(init);
    const addToCart = (item) => {
        setCart([...cart, item]);
    };
    const isInCart = (id) => {
        return cart.some((obj) => obj.id === id);
    };
    const updateCartItem = (item) => {
        setCart(
            cart.map(
                (obj) => obj.id === item.id && { ...obj, counter: item.counter }
            )
        );
    };
    const removeCartItem = (id) => {
        setCart(cart.filter((obj) => obj.id !== id));
    };
    const emptyCart = () => {
        setCart([]);
    };
    const totalCart = () => {
        return parseFloat(
            cart.reduce((acc, item) => acc + item.counter * item.price, 0)
        ).toFixed(2);
    };
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                isInCart,
                updateCartItem,
                removeCartItem,
                emptyCart,
                totalCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
