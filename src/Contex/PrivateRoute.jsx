import { Navigate, useLocation } from "react-router";
import AuthContex from "./AuthContex";
import { useContext } from "react";
import Loading from "../pages/Loading";


const PrivateRoute = ({children}) => {
 const{user,loading}=useContext(AuthContex)
 const location=useLocation()
 if(loading)
 {
    return <Loading></Loading>
 }
 if(user)
 {
    return children
 }

 return <Navigate to='/Login' state={{from:location}} replace></Navigate>
   
};

export default PrivateRoute;