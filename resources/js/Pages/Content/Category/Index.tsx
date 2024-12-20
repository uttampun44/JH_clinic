import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useContext } from "react";

export default function Index(){

    const {isToggle} = useContext(AuthContext);
    
    return(
        <Authenticated>
               <div className={`  ${isToggle ? 'ml-56  rounded-md mr-8' : 'ml-24 '}`}>
                    <Siderbar />
               </div>
        </Authenticated>
    )
}