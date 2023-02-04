import NavBar from "../components/NavBar";
import Login from "../components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./SignIn";

const PublicRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to={"/login"} />} />
                <Route path="/sign" element={<SignIn />} />
            </Routes>
        </>
    );
};

export default PublicRoutes;
