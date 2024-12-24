import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Checkbox } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import { useContext, useState } from "react";


interface permissionData {
    id: number,
    name: string,
    display_name: string,
}

export default function Edit({ datas }: { datas: permissionData[] }) {

    const { isToggle } = useContext(AuthContext);

    const [enabled, setEnabled] = useState<Record<number, boolean>>({})


    const handleChange = (id: number) => {
        setEnabled((prev) => ({
            ...prev, [id]: !prev[id]
        }))
    }

    return (
        <Authenticated>
            <div className={`rolesIndex bg-white ${isToggle ? "ml-56 p-10 rounded-md mr-8" : "ml-24 p-10"}`}>
                <Siderbar />
                <div className="headingRow  border-b-[1px] pb-1">
                    <h5 className="text-xl font-bold">Role Permission</h5>
                </div>
                <div className="permissionContainer">
                    {datas.length > 0 && (
                        <div className="permissionTitle grid grid-cols-4 gap-4 my-4">
                            {
                                datas.map((permission, index: any) => (
                                    <div className="permissionBox text-base capitalize text-gray-500 " key={index}>
                                        <form>
                                            <h6 className="text-lg font-medium  capitalize">{permission.display_name}</h6>
                                            {permission.name}
                                            <Checkbox
                                                checked={enabled[permission.id]}

                                                className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
                                                onChange={(e) => handleChange(permission.id)}
                                            >
                                                <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
                                                    <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Checkbox>

                                        </form>
                                    </div>
                                ))
                            }

                        </div>
                    )}
                    <div className="submit flex gap-4">
                        <PrimaryButton className="p-1">Give Permission</PrimaryButton><DangerButton><Link href={route('roles.index')}>Cancel</Link></DangerButton>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
