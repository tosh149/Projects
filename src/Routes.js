import {Route, Routes } from "react-router-dom";
import EquipmentCode from "./Home/EquipmentCode";
import LaborCode from "./Home/LaborCode";
import ProjectCode from "./Home/ProjectCode";
import ProjectMaintenance from "./Home/ProjectMaintenance";
import ContractRates from "./Home/SubContractorSettings/ContractRates";
import SuppliesCode from "./Home/SuppliesCode";
import UserMaintenance from "./Home/UserMaintenance";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";


export default function Router(){
    return (
    <>
<Routes>

<Route path="/login"  element={<Login/>}></Route>
{/* <Route path="/signup"  element={<Signup/>}></Route> */}

</Routes>
</>
    )
}

