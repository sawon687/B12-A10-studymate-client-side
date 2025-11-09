import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout.jsx/MainLayout";
import Home from "../pages/Home";
import FindPartners from "../pages/FindPartners";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProfile from "../pages/CreateProfile";
import MyConnections from "../pages/MyConnections";

const router=createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                path:'/Home',
                Component:Home,
            },
            {
                path:'/FindPartners',
                Component:FindPartners,
            },
            {
                path:'/Login',
                Component:Login,
            },
            {
                path:'/Register',
                Component:Register
            },
            {
                path:'/createPartnerProfile',
                Component:CreateProfile,
            },
            {
                path:'/myConnection',
                Component:MyConnections,
            }
        ]
    }
])

export default router