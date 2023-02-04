import { useContext, useState } from "react";
import { createContext } from "react";
import { SignInContext } from "./SignInContext";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const { userDB } = useContext(SignInContext);
    const [user, setUser] = useState({
        email: null,
        logged: false,
        error: null,
    });

    const validateUser = (values) => {
        const validation = userDB.find(
            (user) =>
                user.email === values.email && user.password === values.password
        );
        validation
            ? setUser({
                  email: validation.email,
                  logged: true,
                  error: null,
              })
            : setUser({
                  email: null,
                  logged: false,
                  error: "Not an existing user, try again",
              });
    };
    return (
        <LoginContext.Provider value={{ user, validateUser }}>
            {children}
        </LoginContext.Provider>
    );
};
