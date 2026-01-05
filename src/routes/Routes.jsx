import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import FindPartners from "../pages/FindPartners";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "../Contex/PrivateRoute";
import MyConnections from "../pages/MyConnections";
import NotFound from "../pages/NotFound";

import MainLayout from "../MainLayout/MainLayout";
import CreateProfile from "../pages/CreateProfile";
import ManageProfiles from "../pages/ManageProfiles";
import DashboardLayout from "../MainLayout/DashboardLayout";
import PartnerDetails from "../pages/PartnerDetails";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
import Analaysis from "../pages/Analaysis";





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
                path: '/blog',
                Component: Blog,
            },
             {
                path: '/contact',
                Component:Contact,
            },
            {
                path: '/Register',
                Component: Register
            },
             {
                path: '/service',
                Component:Service
            },
            {
                path:'PartnerDetails/:id',
                element:<PartnerDetails></PartnerDetails>
            },
         
            
            {
                path: '/Profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },



        ],
    },
    
    {
        path:'/Dashboard',
        element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[

               {
                path: '/Dashboard/createPartnerProfile',
                element:<PrivateRoute><CreateProfile></CreateProfile></PrivateRoute>
               },
               {
                path: '/Dashboard/myConnection',
                element: <PrivateRoute><MyConnections /></PrivateRoute>
              },
              {
                path:'/Dashboard/manageProfiles',
                Component:ManageProfiles
              },
             
                {
                path:'/Dashboard/DashboardOverview',
                Component:Analaysis,
              }
          
        ]
    },

])

export default router