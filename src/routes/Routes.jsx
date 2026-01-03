import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import FindPartners from "../pages/FindPartners";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "../Contex/PrivateRoute";
import MyConnections from "../pages/MyConnections";
import NotFound from "../pages/NotFound";
import DashboardLayout from "../MainLayout/DashBoardLayout";
import MainLayout from "../MainLayout/MainLayout";
import CreateProfile from "../pages/CreateProfile";
import PartnerDetails from "../pages/PartnerDetails";


const router = createBrowserRouter([
    {
        path: '/',
        Component:MainLayout,
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
                element: <PrivateRoute>
                    <PartnerDetails></PartnerDetails>
                </PrivateRoute>

            },
         
            
            {
                path: '/Profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },



        ],
    },
    
    {
        path:'/Dashboard',
        Component:DashboardLayout,
        children:[

               {
                path: '/Dashboard/createPartnerProfile',
                element:<PrivateRoute><CreateProfile></CreateProfile></PrivateRoute>
               },
               {
                path: '/Dashboard/myConnection',
                element: <PrivateRoute><MyConnections /></PrivateRoute>
            },

        ]
    },

])

export default router