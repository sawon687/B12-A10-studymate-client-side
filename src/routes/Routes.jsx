import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout.jsx/MainLayout";
import Home from "../pages/Home";
import FindPartners from "../pages/FindPartners";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "../Contex/PrivateRoute";
import PartnerDetails from "../pages/PartnerDetails";
import CreateProfile from "../pages/CreateProfile";
import MyConnections from "../pages/MyConnections";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/FindPartners',
                Component: FindPartners,
            },
            {
                path: '/Login',
                Component: Login,
            },
            {
                path: '/Register',
                Component: Register
            },
            {
                path: '/PartnerDetails/:id',
                element: <PrivateRoute><PartnerDetails /></PrivateRoute>

            },
            {
                path: '/createPartnerProfile',
                element: <PrivateRoute><CreateProfile /></PrivateRoute>
            },
            {
                path: '/myConnection',
                element: <PrivateRoute><MyConnections /></PrivateRoute>
            },
            {
                path: '/Profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },



        ]
    }
])

export default router