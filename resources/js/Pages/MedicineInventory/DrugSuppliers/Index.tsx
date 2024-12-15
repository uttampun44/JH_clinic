import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import Siderbar from "@/Components/Sidebar";
import TextInput from "@/Components/TextInput";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import { useContext, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import PrimaryButton from "@/Components/PrimaryButton";
import { Input, Textarea } from "@headlessui/react";
import useModal from "@/Hooks/useModal";

export default function Index(){

    const {isToggle} = useContext(AuthContext)
    const [isEditing, setEditing] = useState(false);
    const{errors, data, setData} = useForm({
      name: "",
      contact_person: "",
      phone: "",
      email: "",
      address: "",
    })
    const {modal, setModal} = useModal();

    const handleSubmit = () =>{

    }

    const handleModal = () => {
        setModal(true)
    }

    const handleClose = () =>{
      setModal(false)
    }
    
    return(
        <Authenticated>
             <div className={`drugSupplier bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                 <Siderbar />
                 <div className="patientContainer">
                    <div className="modal">
                        <Modal show={modal} onClose={handleClose} maxWidth="xl">
                            <div className="modalForm p-4 relative">
                                <CloseIcon onClick={handleClose} className="absolute top-4 right-5" />
                                <form onSubmit={handleSubmit}>
                                    <div className="formGrid p-4 grid gap-y-4">
                                        <div className="name">
                                            <InputLabel> Name</InputLabel>
                                            <TextInput type="text" name="first_name" className="w-full rounded-md"

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
                                            <TextInput type="text" name="last_name" className="w-full rounded-md"
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
                                            <TextInput type="email" name="contact_number" className="w-full rounded-md"
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
                                            <DangerButton>{isEditing ? 'Update Doctor' : 'Register Doctor'}</DangerButton>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                    </div>
                    <div className="headingRow flex justify-between border-b-[1px] pb-1">
                        <h5 className="text-xl font-bold">Supperlier Info</h5>  <PrimaryButton className="bg-primary rounded-md p-2" onClick={handleModal}><AddIcon className="text-white" />Add Drug Suppliers</PrimaryButton>
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
                                {/* {
                                    doctors.data.length > 0 ? (
                                        <React.Fragment>
                                            {
                                                doctors.data.map((doctor: any, index: number) => (
                                                    <tr className="p-2 text-center text-gray-500" key={index}>

                                                        <td className="capitalize p-2">{index + 1}</td>
                                                        <td className="capitalize p-2">{doctor.first_name}</td>
                                                        <td className="capitalize p-2">{doctor.last_name}</td>
                                                        <td className="capitalize p-2">{doctor.specialization}</td>
                                                        <td className="capitalize p-2">{doctor.gender}</td>
                                                        <td className="capitalize p-2">{doctor.contact_number}</td>
                                                        <td className="capitalize p-2">{doctor.address}</td>
                                                        <td className="capitalize p-2"><Edit className="cursor-pointer" onClick={() => handleEdit(doctor)} /></td>
                                                        <td className="capitalize p-2"><Delete className="text-red-700 cursor-pointer" onClick={(e) => handleDelete(doctor.id)} /></td>

                                                    </tr>
                                                ))
                                            }
                                        </React.Fragment>
                                    ) : (
                                        <tr className="p-2 text-center">
                                            <td className="p-2" colSpan={6}>No Data Found</td>
                                        </tr>
                                    )
                                } */}
                            </tbody> 
                        </table>
                    </div>
                    {/* <div className="flex items-center justify-center my-4 space-x-4">

                        {doctors.prev_page_url && (
                            <Link
                                href={doctors.prev_page_url}

                            >
                                <ArrowLeft />
                            </Link>
                        )}


                        {doctors.links.map((link: any, index: number) => (
                            <Link href={`${link.url}`} key={index}>
                                <span className={`bg-gray-200 ${link.active ? 'text-primary' : 'black'} text-lg font-semibold py-2 px-4 rounded-md text-black`}>
                                    {link.label}
                                </span>
                            </Link>
                        ))}

                        {doctors.next_page_url && (
                            <Link
                                href={doctors.next_page_url}

                            >
                                <ArrowRight />
                            </Link>
                        )}
                    </div>  */}
                </div>         
             </div>
        </Authenticated>
    )
}