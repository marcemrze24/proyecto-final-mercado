import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/config";
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: null,
        logged: false,
        error: null,
    });
    const [loading, setLoading] = useState(false);
    const login = (values) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                setUser({
                    email: userCredential.user.email,
                    logged: true,
                    error: null,
                });
            })
            .catch((error) => {
                setUser({
                    email: null,
                    logged: false,
                    error: error.message,
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({
                    email: null,
                    logged: false,
                    error: null,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    logged: true,
                    error: null,
                });
            } else {
                logout();
            }
        });
    }, []);
    return (
        <LoginContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </LoginContext.Provider>
    );
};
