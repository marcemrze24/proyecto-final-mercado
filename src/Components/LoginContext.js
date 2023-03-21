import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/config";
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: null,
        logged: false,
        error: null,
    });
    const [loading, setLoading] = useState(false);
    const MySwal = withReactContent(Swal);
    const login = (values) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                setUser({
                    email: userCredential.user.email,
                    logged: true,
                    error: null,
                });
                MySwal.fire({
                    icon: "success",
                    title: (
                        <p className="fs-2 fw-semibold">Login successful!</p>
                    ),
                    confirmButtonColor: "#198754",
                    confirmTextColor: "#f8f9fa",
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
        signOut(auth).then(() => {
            setUser({
                email: null,
                logged: false,
                error: null,
            });
        });
    };
    const register = (values) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(() => {
                MySwal.fire({
                    icon: "success",
                    title: <p className="fs-2 fw-semibold">Account created</p>,
                    confirmButtonColor: "#198754",
                    confirmTextColor: "#f8f9fa",
                });
            })
            .catch((error) => {
                setUser({
                    email: null,
                    logged: false,
                    error: error.message,
                });
            })
            .finally(() => setLoading(false));
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
        <LoginContext.Provider
            value={{ user, login, logout, loading, register }}
        >
            {children}
        </LoginContext.Provider>
    );
};
