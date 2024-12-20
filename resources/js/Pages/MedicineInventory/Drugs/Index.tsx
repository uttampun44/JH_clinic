import PrimaryButton from "@/Components/PrimaryButton";
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Input } from "@headlessui/react";
import { Edit } from "@mui/icons-material";
import React, { useContext } from "react";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "@inertiajs/react";
import Paginate from "@/Components/Paginate";

export default function Index({ drugs = { data: [] } }) {


    const { isToggle } = useContext(AuthContext)
    return (
        <Authenticated>
            <div className={`drugCategory bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />
                <div className="headingRow flex justify-between border-b-[1px] pb-1">
                    <h5 className="text-xl font-bold">Drugs Info</h5>  <PrimaryButton className="bg-primary rounded-md p-2" ><AddIcon className="text-white" /><Link href={route("drugs.create")}>Add Drugs</Link></PrimaryButton>
                </div>
                <div className="search py-3 flex gap-x-4">
                    <div className="search relative">
                        <SearchIcon className="absolute left-2 top-2" /> <Input type="text" className="rounded-md p-1 pl-10 bg-mainbg" placeholder="search" />
                    </div>
                    <div className="date">
                        <Input type="date" className="rounded-md p-1 bg-mainbg" placeholder="search" />
                    </div>
                </div>
                <div className="table my-4 w-full">
                    <table className="table-auto w-full">
                        <thead className="p-1">
                            <tr className="w-full border-b-2 text-primarytextcolor font-poppins">
                                <th className="capitalize p-2">S.No</th>
                                <th className="capitalize p-2">Name</th>
                                <th className="capitalize p-2">Sku</th>
                                <th className="capitalize p-2">Description</th>
                                <th className="capitalize p-2">Manufacturer</th>
                                <th className="capitalize p-2">Dosage</th>
                                <th className="capitalize p-2">Strength</th>
                                <th className="capitalize p-2">Expiration Date</th>
                                <th className="capitalize p-2">Drugs Category</th>
                                <th className="capitalize p-2">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                drugs.data.length > 0 ? (
                                    <React.Fragment>
                                        {
                                            drugs.data.map((drugCategory: any, index: number) => (
                                                <tr className="p-2 text-center text-gray-500" key={index}>

                                                    <td className="capitalize p-2">{index + 1}</td>
                                                    <td className="capitalize p-2">{drugCategory.name}</td>
                                                    <td className="capitalize p-2">{drugCategory.sku}</td>
                                                    <td className="capitalize p-2">{drugCategory.description}</td>
                                                    <td className="capitalize p-2">{drugCategory.manufacturer}</td>
                                                    <td className="capitalize p-2">{drugCategory.dosage_from}</td>
                                                    <td className="capitalize p-2">{drugCategory.strength}</td>
                                                    <td className="capitalize p-2">{drugCategory.expiration_date}</td>
                                                    <td className="capitalize p-2">{drugCategory.drugs_categories.name}</td>
                                                    <td className="capitalize p-2"><Link href={route("drugs.edit", drugCategory.id)}> <Edit className="cursor-pointer" /></Link></td>


                                                </tr>
                                            ))
                                        }
                                    </React.Fragment>
                                ) : (
                                    <tr className="p-2 text-center">
                                        <td className="p-2" colSpan={10}>No Data Found</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-center my-4 space-x-4">

                    <Paginate links={drugs.links} />
                </div>
            </div>
        </Authenticated>
    )
}