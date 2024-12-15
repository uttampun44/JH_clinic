import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useContext } from "react";

export default function Index(){

    const {isToggle} = useContext(AuthContext)
    
    return(
        <Authenticated>
             <div className={`drugCategory bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>

             </div>
        </Authenticated>
    )
}