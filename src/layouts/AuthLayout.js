import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminFooterComponent from "../components/shared/admin/adminFooter/AdminFooter.component";
import AdminHeaderComponent from "../components/shared/admin/adminHeader/AdminHeader.component";

export default function AuthLayout(){
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); 
        useEffect(()=> {
            if(!token || token === null){
                navigate('/login')
            }
        }, [token])
   
    return (
        <> 
            <AdminHeaderComponent /> 
            <Outlet></Outlet>
            <AdminFooterComponent />
        </>
    )
}