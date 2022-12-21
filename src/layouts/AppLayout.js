import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FooterComponent from "../components/shared/footer/Footer.component";
import HeaderComponent from "../components/shared/header/Header.component";


export default function AppLayout(){
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); 
        useEffect(()=> {
            if(token){
                navigate('/admin')
            }
        }, [token])
   
    return (
        <> 
            <HeaderComponent  /> 
            <Outlet></Outlet>
            <FooterComponent />
        </>
    )
}