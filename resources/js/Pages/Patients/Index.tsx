import PrimaryButton from "@/Components/PrimaryButton";
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useContext, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Input, Select, Textarea } from "@headlessui/react";
import SearchIcon from '@mui/icons-material/Search';
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import DangerButton from "@/Components/DangerButton";
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "@inertiajs/react";


export default function Index() {

    const { isToggle } = useContext(AuthContext);
    const [modal, setModal] = useState(false);
    const { post: post, data, setData, errors } = useForm({

    })

    const handleModal = () => {
        setModal(true)
    }

    const handleClose = () => {
        setModal(false)
    }

    const handleSubmit = () => {

    }

    return (
        <Authenticated>
            <div className={`patients bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-20 p-10'}`}>
                <Siderbar />
                <div className="patientContainer">
                    <div className="modal">
                        <Modal show={modal}>
                            <div className="modalForm p-4 relative">
                                <CloseIcon onClick={handleClose} className="absolute top-4 right-5"/>
                                <form onSubmit={handleSubmit}>
                                    <div className="formGrid p-4 grid gap-y-4">
                                        <div className="firstName">
                                            <InputLabel>First Name</InputLabel>
                                            <TextInput type="text" name="first_name" className="w-full rounded-md" />
                                        </div>
                                        <div className="lastName">
                                            <InputLabel>Last Name</InputLabel>
                                            <TextInput type="text" name="last_name" className="w-full rounded-md" />
                                        </div>
                                        <div className="date">
                                            <InputLabel>Date of birth</InputLabel>
                                            <TextInput type="date" name="last_name" className="w-full rounded-md" />
                                        </div>
                                        <div className="gender">
                                            <InputLabel>Gender</InputLabel>
                                            <Select className="w-full rounded-md">
                                                <option>Select Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </Select>
                                        </div>
                                        <div className="contact">
                                            <InputLabel>Contact</InputLabel>
                                            <TextInput type="text" name="last_name" className="w-full rounded-md" />
                                        </div>
                                        <div className="address">
                                            <InputLabel>Address</InputLabel>
                                            <Textarea name="last_name" className="w-full rounded-md"></Textarea>
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
                        <table className="table-auto">
                            <thead className="bg-gray-700">
                                <tr className="w-full">
                                    <th>S.No</th>
                                    <th>Patient First Name</th>
                                    <th>Patient Last Name</th>
                                    <th>Date Of Birth</th>
                                    <th>Gender</th>
                                    <th>Contact</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}