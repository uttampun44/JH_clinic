import PrimaryButton from "@/Components/PrimaryButton";
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Input } from "@headlessui/react";
import React, { useContext } from "react";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "@inertiajs/react";
import { Edit } from "@mui/icons-material";


export default function Index({ purchases }) {


    const { isToggle } = useContext(AuthContext)
    return (
        <Authenticated>
            <div className={`purchases bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />
                <div className="purchasesContainer">
                    <div className="headingRow flex justify-between border-b-[1px] pb-1">
                        <h5 className="text-xl font-bold">Purchases Info</h5>  <PrimaryButton className="bg-primary rounded-md p-2" ><Link href={route("drugs-purchases.create")}><AddIcon className="text-white" />Add Drug Purchases</Link></PrimaryButton>
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
                                    <th className="capitalize p-2">Drug Name</th>
                                    <th className="capitalize p-2">Supplier Name</th>
                                    <th className="capitalize p-2">Drug Category</th>
                                    <th className="capitalize p-2">Unit Price</th>
                                    <th className="capitalize p-2">Quantity</th>
                                    <th className="capitalize p-2">Purchase Price</th>
                                    <th className="capitalize p-2">Purchase Date</th>
                                    <th className="capitalize p-2">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    purchases.data.length > 0 ? (
                                        <React.Fragment>
                                            {
                                                purchases.data.map((purchase: any, index: number) => (
                                                    <tr className="p-2 text-center text-gray-500" key={index}>

                                                        <td className="capitalize p-2">{index + 1}</td>
                                                        <td className="capitalize p-2">{purchase.drugs?.name}</td>
                                                        <td className="capitalize p-2">{purchase.supplier?.name}</td>
                                                        <td className="capitalize p-2">{purchase.drug_category?.name}</td>
                                                        <td className="capitalize p-2">{purchase.unit_price}</td>
                                                        <td className="capitalize p-2">{purchase.drug_stocks.map(stock => stock.quantity)}</td>
                                                        <td className="capitalize p-2">{purchase.purchase_price}</td>
                                                        <td className="capitalize p-2">{purchase.purchase_date}</td>
                                                        <td className="capitalize p-2"><Link href={route("drugs-purchases.edit", purchase.id)}><Edit className="cursor-pointer" /></Link></td>


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
                </div>
            </div>
        </Authenticated>
    )
}