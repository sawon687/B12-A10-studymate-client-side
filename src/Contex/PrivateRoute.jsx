import { Navigate, useLocation } from "react-router";
import AuthContex from "./AuthContex";
import { useContext } from "react";


const PrivateRoute = ({children}) => {
 const{user}=useContext(AuthContex)
 const location=useLocation()
 
 if(user)
 {
    return children
 }

 return <Navigate to='/Login' state={{from:location}} replace></Navigate>
   
};

export default PrivateRoute;