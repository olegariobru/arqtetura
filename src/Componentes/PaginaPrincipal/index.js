import AboutUs from "../BannerAbout";
import BannerComents from "../BannerComents";
import Projects from "../BannerProjects";
import Welcome from "../BannerWelcome";
import StepToStep from "../BannerSteptoStep";
import Contact from "../BannerContact"
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

export default function PaginaPrincipal(){
    return(
        <main>
            <Welcome/>
            <AboutUs/>
            <Projects/>
            <BannerComents/>
            <StepToStep/>
            <Contact/>
            <Footer/>
            <Outlet/>
        </main>
    )
}