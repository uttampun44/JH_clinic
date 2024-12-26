import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Input, Select, Textarea } from "@headlessui/react";
import { Head } from "@inertiajs/react";
import { useContext } from "react";


interface patientAccount {
    id: number,
    first_name: string,
    last_name: string,
    date_of_birth: string,
    gender: string,
    address: string
    contact_number: string
}

interface userRole{
    id:number,
    name:string,
}
export default function PatientAccount({ datas }: { datas: patientAccount }, {roles} : {roles : userRole[]}) {

    console.log(roles)
    const { isToggle } = useContext(AuthContext)

    return (
        <Authenticated>
            <Head title="Create Patient Account" />
            <div className={`patients bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />

                <h1 className="text-gray-500 font-bold text-xl">Create Account</h1>
                <div className="patientAccount grid grid-cols-3 gap-5">

                    <div className="firstName text-gray-500 ">
                        <h6 className="font-medium text-lg">First Name</h6>
                        <Input readOnly value={datas.first_name} disabled className="border-none text-start p-0 w-full" />
                    </div>

                    <div className="lastName text-gray-500 ">
                        <h6 className="font-medium text-lg">Last Name</h6>
                        <Input readOnly value={datas.last_name} disabled className="border-none text-start p-0 w-full" />
                    </div>
                    <div className="dateOfBirth text-gray-500 ">
                        <h6 className="font-medium text-lg">Date Of Birth</h6>
                        <Input readOnly value={datas.date_of_birth} disabled className="border-none text-start p-0 w-full" />
                    </div>

                    <div className="contactNumber text-gray-500">
                        <h6 className="font-medium text-lg">Contact Number</h6>
                        <Input readOnly value={datas.contact_number} disabled className="border-none text-start p-0 w-full" />
                    </div>

                    <div className="gender text-gray-500">
                        <h6 className="font-medium text-lg">Gender</h6>
                        <Input readOnly value={datas.gender} disabled className="border-none text-start p-0 w-full" />
                    </div>

                    <div className="address text-gray-500">
                        <h6 className="font-medium text-lg">Address</h6>
                        <Textarea readOnly value={datas.address} disabled className="border-none text-start p-0 w-full" />
                    </div>
                    <div className="role text-gray-500">
                    <h6 className="font-medium text-lg">Role</h6>
                    <Select>
                         <option>Select Role</option>
                         {/* {
                            roles.map((role, index:number) => (
                                <option value={role.id} key={index}>{role.name}</option>
                            ))
                         } */}
                    </Select>
                    </div>

                </div>
            </div>
        </Authenticated>
    )
}