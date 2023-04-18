import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "./LoginContext";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
    const { user } = useContext(LoginContext);
    return (
        <BrowserRouter basename="/proyecto-final-mercado">
            {user.logged ? <PrivateRoutes /> : <PublicRoutes />}
        </BrowserRouter>
    );
};

export default AppRouter;
