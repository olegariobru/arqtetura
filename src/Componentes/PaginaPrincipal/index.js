import Welcome from "../BannerWelcome";
import { Outlet } from "react-router-dom";

export default function PaginaPrincipal(){
    return(
        <main>
            <Welcome/>

            <Outlet/>
        </main>
    )
}