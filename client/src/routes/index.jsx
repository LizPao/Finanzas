import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home"
import NotFund from "../pages/NotFund";
import Ingreso from "../Components/ingreso/Ingreso";
import Gasto from "../Components/gasto/Gasto";
import Transacciones from "../Components/transaccion/Transacciones";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../Components/logout/Logout";


export default createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFund />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'gestor/ingreso',
                element: <Ingreso />
            },
            {
                path:'gestor/gasto',
                element: <Gasto />
            },
            {
                path:'/gestor/transacciones',
                element: <Transacciones/>
            },
            {
                path:'register',
                element: <Register />
            },
            {
                path:'login',
                element: <Login />
            },
            {
                path:'logout',
                element: <Logout />
            },
            

        ]
    }
]);