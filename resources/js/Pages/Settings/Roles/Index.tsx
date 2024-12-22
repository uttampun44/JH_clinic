import PrimaryButton from "@/Components/PrimaryButton";
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Input } from "@headlessui/react";
import { useContext } from "react";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Paginate from "@/Components/Paginate";
import { Link } from "@inertiajs/react";

export default function Index(){

    const {isToggle} = useContext(AuthContext);

    return(
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
                                    <th className="capitalize p-2">Title</th>
                                    <th className="capitalize p-2">Short Summary</th>
                                    <th className="capitalize p-2">Summary</th>
                                    <th className="capitalize p-2">Image</th>
                                    <th className="capitalize p-2">Edit</th>
                                    <th className="capitalize p-2">Delete</th>
                                </tr>
                            </thead>
                             <tbody>
                                <tr className="p-2 text-center">
                                    <td className="p-2 " colSpan={4}>No Data Found</td>
                                </tr>
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
