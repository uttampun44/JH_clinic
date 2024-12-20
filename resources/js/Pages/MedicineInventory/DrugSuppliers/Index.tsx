import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import Siderbar from "@/Components/Sidebar";
import TextInput from "@/Components/TextInput";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import React, { useContext, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import {  Edit } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import PrimaryButton from "@/Components/PrimaryButton";
import { Input, Textarea } from "@headlessui/react";
import useModal from "@/Hooks/useModal";
import { toast } from "sonner";
import Paginate from "@/Components/Paginate";

export default function Index({ suppliers }) {


    const { isToggle } = useContext(AuthContext)
    const [supplierId, setSupplierId] = useState("");

    const { errors, data, setData, reset, post: post, put: put, clearErrors } = useForm({
        name: "",
        contact_person: "",
        phone: "",
        email: "",
        address: "",
    })
    const { modal, setModal, isEditing, setEditing } = useModal();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (isEditing) {
            put(route("drug-suppliers.update", supplierId), {
                onSuccess: () => {
                    reset(),
                        clearErrors(),
                        toast.success("Supplier update successfully")
                },
                onError: () => {
                    toast.error("Unable to update successfully")
                }
            })

        } else {

            post(route("drug-suppliers.store"), {
                onSuccess: () => {
                    reset(),
                        clearErrors(),
                        toast.success("Supplier created")
                },
                onError: () => {
                    toast.error("Unable to create")
                }
            })
        }
    }

    const handleEdit = (supplier: any) => {
        setEditing(true)
        setModal(true)
        setSupplierId(supplier.id)
        setData({
            name: supplier.name,
            contact_person: supplier.contact_person,
            phone: supplier.phone,
            email: supplier.email,
            address: supplier.address
        })
    }

    const handleModal = () => {
        setModal(true)
    }

    const handleClose = () => {
        setModal(false)
    }

    return (
        <Authenticated>
            <div className={`drugSupplier bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />
                <div className="suppliersContainer">
                    <div className="modal">
                        <Modal show={modal} onClose={handleClose} maxWidth="xl">
                            <div className="modalForm p-4 relative">
                                <CloseIcon onClick={handleClose} className="absolute top-4 right-5" />
                                <form onSubmit={handleSubmit}>
                                    <div className="formGrid p-4 grid gap-y-4">
                                        <div className="name">
                                            <InputLabel> Name</InputLabel>
                                            <TextInput type="text" name="name" className="w-full rounded-md"

                                                value={data.name}
                                                onChange={(e) => setData("name", e.target.value)}
                                            />
                                            {
                                                errors.name && (
                                                    <p className="text-red-500">{errors.name}</p>
                                                )
                                            }
                                        </div>
                                        <div className="contact_person">
                                            <InputLabel>Contact Person</InputLabel>
                                            <TextInput type="text" name="last_name" className="w-full rounded-md"
                                                value={data.contact_person}
                                                onChange={(e) => setData("contact_person", e.target.value)}
                                            />
                                            {
                                                errors.contact_person && (
                                                    <p className="text-red-500">{errors.contact_person}</p>
                                                )
                                            }
                                        </div>

                                        <div className="phone">
                                            <InputLabel>Phone</InputLabel>
                                            <TextInput type="text" name="phone" className="w-full rounded-md"
                                                value={data.phone}
                                                onChange={(e) => setData("phone", e.target.value)}
                                            />
                                            {
                                                errors.phone && (
                                                    <p className="text-red-500">{errors.phone}</p>
                                                )
                                            }
                                        </div>


                                        <div className="email">
                                            <InputLabel>Email</InputLabel>
                                            <TextInput type="email" name="email" className="w-full rounded-md"
                                                value={data.email}
                                                onChange={(e) => setData("email", e.target.value)}
                                            />
                                            {
                                                errors.email && (
                                                    <p className="text-red-500">{errors.email}</p>
                                                )
                                            }
                                        </div>
                                        <div className="address">
                                            <InputLabel>Address</InputLabel>
                                            <Textarea name="address" className="w-full rounded-md"
                                                value={data.address}
                                                onChange={(e) => setData("address", e.target.value)}
                                            />
                                            {
                                                errors.address && (
                                                    <p className="text-red-500">{errors.address}</p>
                                                )
                                            }
                                        </div>
                                        <div className="submit">
                                            <DangerButton>{isEditing ? 'Update Suppliers' : 'Register Suppliers'}</DangerButton>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                    </div>
                    <div className="headingRow flex justify-between border-b-[1px] pb-1">
                        <h5 className="text-xl font-bold">Supperlier Info</h5>  <PrimaryButton className="bg-primary rounded-md p-2" onClick={handleModal}><AddIcon className="text-white" />Add Suppliers</PrimaryButton>
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
                                    <th className="capitalize p-2">Contact Person Name</th>
                                    <th className="capitalize p-2">Phone</th>
                                    <th className="capitalize p-2">Email</th>
                                    <th className="capitalize p-2">Address</th>
                                    <th className="capitalize p-2">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    suppliers.data.length > 0 ? (
                                        <React.Fragment>
                                            {
                                                suppliers.data.map((supplier: any, index: number) => (
                                                    <tr className="p-2 text-center text-gray-500" key={index}>

                                                        <td className="capitalize p-2">{index + 1}</td>
                                                        <td className="capitalize p-2">{supplier.name}</td>
                                                        <td className="capitalize p-2">{supplier.contact_person}</td>
                                                        <td className="capitalize p-2">{supplier.phone}</td>
                                                        <td className="capitalize p-2">{supplier.email}</td>

                                                        <td className="capitalize p-2">{supplier.address}</td>
                                                        <td className="capitalize p-2"><Edit className="cursor-pointer" onClick={() => handleEdit(supplier)} /></td>


                                                    </tr>
                                                ))
                                            }
                                        </React.Fragment>
                                    ) : (
                                        <tr className="p-2 text-center">
                                            <td className="p-2" colSpan={7}>No Data Found</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-center my-4 space-x-4">

                        <Paginate links={suppliers.links} />
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}