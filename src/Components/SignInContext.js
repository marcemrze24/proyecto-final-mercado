import { createContext, useEffect, useState } from "react";

export const SignInContext = createContext();

const USER_DB = JSON.parse(localStorage.getItem("users")) || [];

export const SignInProvider = ({ children }) => {
    const [userDB, setUserDB] = useState(USER_DB);
    const addUserToDB = (user) => {
        setUserDB([...userDB, user]);
    };
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(userDB));
    }, [userDB]);
    return (
        <SignInContext.Provider value={{ addUserToDB, userDB }}>
            {children}
        </SignInContext.Provider>
    );
};
