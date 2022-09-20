import { Outlet } from "react-router-dom";
import FooterComponent from "../components/shared/footer/Footer.component";
import HeaderComponent from "../components/shared/header/Header.component";


export default function AppLayout(){
    return (
        <> 
            <HeaderComponent  /> 
            <Outlet></Outlet>
            <FooterComponent />
        </>
    )
}