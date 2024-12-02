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
import { useForm, usePage } from "@inertiajs/react";
import { Delete, Edit } from "@mui/icons-material";


export default function Index({ patients }) {

    const props = usePage().props

    const { isToggle } = useContext(AuthContext);
    const [modal, setModal] = useState(false);
    const [isEditing, setEditing] = useState(false)
    const [currentId, setCurrentInd] = useState<string>("");

    const { post: post, data, setData, errors, delete: destroy, put: put, reset } = useForm({
        first_name: '',
        last_name: '',
        specialization: '',
        date_of_birth: '',
        gender: '',
        contact_number: '',
        address: ''
    })

    const handleModal = () => {
        setModal(true)
        setEditing(false)
        setData({
            first_name: "",
            last_name: "",
            date_of_birth: "",
            gender: "",
            contact_number: "",
            address: "",
        })

    }

    const handleClose = () => {
        setModal(false)

    }

    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault()
        if (isEditing && currentId) {

            put(route("patients.update", currentId), {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    setModal(false);
                    setEditing(false);
                },
            });
        } else {
            post(route("patients.store", {
                _token: props.csrf_token,
                preserveScroll: true,
                onSuccess: () => reset()
            }))
        }
    }

    const handleEdit = (patient: any) => {

            setModal(true)
            setEditing(true)
            setCurrentInd(patient.id)

            setData({
                first_name: patient.first_name || "",
                last_name: patient.last_name,
                date_of_birth: patient.date_of_birth,
                gender: patient.gender || "",
                contact_number: patient.contact_number,
                address: patient.address,
            })
      

    }
    const handleDelete = (id: number) => {
        destroy(route("patients.destroy", id))
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

                                        <div className="specialization">
                                            <InputLabel>Specialization</InputLabel>
                                            <TextInput type="text" name="last_name" className="w-full rounded-md"
                                                value={data.specialization}
                                                onChange={(e) => setData("specialization", e.target.value)}
                                            />
                                            {
                                                errors.specialization && (
                                                    <p className="text-red-500">{errors.specialization}</p>
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
                                                value={data.gender || ''}
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
                                            <DangerButton>{isEditing ? 'Update Patient' : 'Register Patient'}</DangerButton>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                    </div>
                    <div className="headingRow flex justify-between border-b-[1px] pb-1">
                        <h5 className="text-xl font-bold">Doctors Info</h5>  <PrimaryButton className="bg-primary rounded-md p-2" onClick={handleModal}><AddIcon className="text-white" />Add Doctors</PrimaryButton>
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
                                    <th className="capitalize p-2">Doctor First Name</th>
                                    <th className="capitalize p-2">Doctor Last Name</th>
                                    <th className="capitalize p-2">Specialization</th>
                                    <th className="capitalize p-2">Date Of Birth</th>
                                    <th className="capitalize p-2">Gender</th>
                                    <th className="capitalize p-2">Contact</th>
                                    <th className="capitalize p-2">Address</th>
                                    <th className="capitalize p-2">Edit</th>
                                    <th className="capitalize p-2">Delete</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {
                                    patients.length > 0 ? (
                                        <React.Fragment>
                                            {
                                                patients.map((patient: any, index: number) => (
                                                    <tr className="p-2 text-center text-gray-500" key={index}>

                                                        <td className="capitalize p-2">{index + 1}</td>
                                                        <td className="capitalize p-2">{patient.first_name}</td>
                                                        <td className="capitalize p-2">{patient.last_name}</td>
                                                        <td className="capitalize p-2">{patient.date_of_birth}</td>
                                                        <td className="capitalize p-2">{patient.gender}</td>
                                                        <td className="capitalize p-2">{patient.contact_number}</td>
                                                        <td className="capitalize p-2">{patient.address}</td>
                                                        <td className="capitalize p-2"><Edit className="cursor-pointer" onClick={() => handleEdit(patient)} /></td>
                                                        <td className="capitalize p-2"><Delete className="text-red-700 cursor-pointer" onClick={(e) => handleDelete(patient.id)} /></td>

                                                    </tr>
                                                ))
                                            }
                                        </React.Fragment>
                                    ) : (
                                        <tr className="p-2 text-center">
                                            <td className="p-2" colSpan={6}>No Data Found</td>
                                        </tr>
                                    )
                                }
                            </tbody> */}
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}