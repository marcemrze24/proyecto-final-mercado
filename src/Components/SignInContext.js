import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
export const SignInContext = createContext();

export const SignInProvider = ({ children }) => {
    const signIn = (newUser) => {
        createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <SignInContext.Provider value={{ signIn }}>
            {children}
        </SignInContext.Provider>
    );
};
