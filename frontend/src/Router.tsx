import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Home } from "./pages/Home";
import { Employees } from "./pages/Employees";

export function Router(){
    return (
        <Routes>
            <Route path="/"  element={<DefaultLayout />}>
                <Route path="/" element={<Home/>}/>
                <Route path="/employees/:companyId" element={<Employees/>}/>
            </Route>
        </Routes>
    )
}
