import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Componentes/Header";
import PaginaPrincipal from "./Componentes/PaginaPrincipal";

function App(){
    return(
        <BrowserRouter>
            <Menu/>

        <Routes>
            <Route path="/" element={<PaginaPrincipal/>}>
            
            </Route>    
        </Routes>
        
        </BrowserRouter>
    )
}

export default App;