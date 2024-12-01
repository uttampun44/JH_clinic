import PrimaryButton from "@/Components/PrimaryButton";
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useContext, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Input, Select, Textarea } from "@headlessui/react";
import SearchIcon from '@mui/icons-material/Search';
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import DangerButton from "@/Components/DangerButton";
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "@inertiajs/react";
import { Delete, Edit } from "@mui/icons-material";


export default function Index({ patients }) {

    
    const { isToggle } = useContext(AuthContext);
    const [modal, setModal] = useState(false);
    const { post: post, data, setData, errors } = useForm({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        gender: '',
        contact_number: '',
        address: ''
    })

    const handleModal = () => {
        setModal(true)
    }

    const handleClose = () => {
        setModal(false)
    }

    const handleSubmit = (event: React.FormEvent) => {
        console.log(data)
        event.preventDefault()
        post(route("patients.store"))
    }

    return (
        <Authenticated>
            <div className={`patients bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />
                <div className="patientContainer">
                    <div className="modal">
                        <Modal show={modal} onClose={handleClose} maxWidth="xl">
                            <div className="modalForm p-4 relative">
                                <CloseIcon onClick={handleClose} className="absolute top-4 right-5" />
                                <form onSubmit={handleSubmit}>
                                    <div className="formGrid p-4 grid gap-y-4">
                                        <div className="firstName">
                                            <InputLabel>First Name</InputLabel>
                                            <TextInput type="text" name="first_name" className="w-full rounded-md"

                                                value={data.first_name}
                                                onChange={(e) => setData("first_name", e.target.value)}
                                            />
                                            {
                                                errors.first_name && (
                                                    <p className="text-red-500">{errors.first_name}</p>
                                                )
                                            }
                                        </div>
                                        <div className="lastName">
                                            <InputLabel>Last Name</InputLabel>
                                            <TextInput type="text" name="last_name" className="w-full rounded-md"
                                                value={data.last_name}
                                                onChange={(e) => setData("last_name", e.target.value)}
                                            />
                                            {
                                                errors.last_name && (
                                                    <p className="text-red-500">{errors.last_name}</p>
                                                )
                                            }
                                        </div>
                                        <div className="date">
                                            <InputLabel>Date of birth</InputLabel>
                                            <TextInput type="date" name="date_of_birth" className="w-full rounded-md"
                                                value={data.date_of_birth}
                                                onChange={(e) => setData("date_of_birth", e.target.value)}
                                            />
                                            {
                                                errors.date_of_birth && (
                                                    <p className="text-red-500">{errors.date_of_birth}</p>
                                                )
                                            }
                                        </div>
                                        <div className="gender">
                                            <InputLabel>Gender</InputLabel>
                                            <Select className="w-full rounded-md"
                                                value={data.gender}
                                                onChange={(e) => setData("gender", e.target.value)}
                                            >
                                                <option>Select Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </Select>

                                            {
                                                errors.gender && (
                                                    <p className="text-red-500">{errors.gender}</p>
                                                )
                                            }
                                        </div>
                                        <div className="contact">
                                            <InputLabel>Contact</InputLabel>
                                            <TextInput type="text" name="contact_number" className="w-full rounded-md"
                                                value={data.contact_number}
                                                onChange={(e) => setData("contact_number", e.target.value)}
                                            />
                                            {
                                                errors.contact_number && (
                                                    <p className="text-red-500">{errors.contact_number}</p>
                                                )
                                            }
                                        </div>
                                        <div className="address">
                                            <InputLabel>Address</InputLabel>
                                            <Textarea name="last_name" className="w-full rounded-md"
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
                                            <DangerButton>Submit</DangerButton>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                    </div>
                    <div className="headingRow flex justify-between border-b-[1px] pb-1">
                        <h5 className="text-xl font-bold">Patients Info</h5>  <PrimaryButton className="bg-primary rounded-md p-2" onClick={handleModal}><AddIcon className="text-white" />Add Patients</PrimaryButton>
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
                                    <th>S.No</th>
                                    <th>Patient First Name</th>
                                    <th>Patient Last Name</th>
                                    <th>Date Of Birth</th>
                                    <th>Gender</th>
                                    <th>Contact</th>
                                    <th>Address</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    patients.length > 0 ? (
                                        <tr className="p-2 text-center text-gray-500">
                                            {
                                                patients.map((patient, index: number) => (
                                                    <React.Fragment key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{patient.first_name}</td>
                                                        <td>{patient.last_name}</td>
                                                        <td>{patient.date_of_birth}</td>
                                                        <td>{patient.gender}</td>
                                                        <td>{patient.contact_number}</td>
                                                        <td>{patient.address}</td>
                                                        <td><Edit className="cursor-pointer" /></td>
                                                        <td><Delete className="text-red-700 cursor-pointer" /></td>
                                                    </React.Fragment>
                                                ))
                                            }
                                        </tr>
                                    ) : (
                                        <tr className="p-2">No Data Found</tr>
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