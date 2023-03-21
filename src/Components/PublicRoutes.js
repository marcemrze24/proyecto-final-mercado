import Login from "../components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./SignIn";
import Header from "./Header";
import Footer from "./Footer";

const PublicRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to={"/login"} />} />
                <Route path="/sign" element={<SignIn />} />
            </Routes>
            <Footer />
        </>
    );
};

export default PublicRoutes;
