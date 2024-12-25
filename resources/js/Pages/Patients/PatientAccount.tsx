import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useContext } from "react";

export default function PatientAccount({ datas }) {

    console.log(datas)
    const { isToggle } = useContext(AuthContext)

    return (
        <Authenticated>
            <Head title="Create Patient Account" />
            <div className={`patients bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />

                <h1 className="text-gray-500 font-bold text-xl">Create Account</h1>
                <div className="patientAccount grid grid-cols-3">

                    <div className="patientDetail text-gray-500 ">
                        <h6 className="font-medium text-lg">First Name</h6>
                        {datas.first_name}
                    </div>

                </div>
            </div>
        </Authenticated>
    )
}