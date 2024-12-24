
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useContext } from "react";
import Paginate from "@/Components/Paginate";
import { Link } from "@inertiajs/react";
import { Edit } from "@mui/icons-material";


export default function Index({ datas }) {

    const { isToggle } = useContext(AuthContext);

    return (
        <Authenticated>
            <div className={`rolesIndex bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />
                <div className="headingRow  border-b-[1px] pb-1">
                    <h5 className="text-xl font-bold">Roles</h5>
                </div>
                <div className="postIndex">
                    <div className="table my-4 w-full">
                        <table className="table-auto w-full">
                            <thead className="p-1">
                                <tr className="w-full border-b-2 text-primarytextcolor font-poppins">
                                    <th className="capitalize p-2">S.No</th>
                                    <th className="capitalize p-2">Name</th>
                                    <th className="capitalize p-2">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datas.roles.length > 0 ? (
                                        <React.Fragment>
                                            {
                                                datas.roles.map((role, index: number) => (
                                                    <tr className="p-2 text-center" key={index}>
                                                        <td className="p-2">{index + 1}</td>
                                                        <td className="p-2 capitalize">{role.name}</td>
                                                        <td className="p-2 "><Link href={route('roles.edit', role.id)} className="text-gray-500 hover:underline"><Edit /></Link></td>
                                                    </tr>
                                                ))
                                            }
                                        </React.Fragment>
                                    ) : (
                                        <tr className="p-2 text-center">
                                            <td className="p-2 " colSpan={7}>No Data Found</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-center my-4 space-x-4">

                        {/* <Paginate links={doctors.links}/> */}
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
