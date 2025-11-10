import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout.jsx/MainLayout";
import Home from "../pages/Home";
import FindPartners from "../pages/FindPartners";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProfile from "../pages/CreateProfile";
import MyConnections from "../pages/MyConnections";
import Profile from "../pages/Profile";
import PartnerDetails from "../pages/PartnerDetails";
import axios from "axios";

const router=createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                path:'/',
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
                   path:`/PartnerDetails/:_id`,
                   loader:({params})=> axios(`http://localhost:9000/partner/${params._id}`),
                   Component:PartnerDetails,

            },
            {
                path:'/createPartnerProfile',
                Component:CreateProfile,
            },
            {
                path:'/myConnection',
                Component:MyConnections,
            },
            {
               path:'/Profile',
               Component:Profile,
            },

          

        ]
    }
])

export default router