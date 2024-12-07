import PrimaryButton from "@/Components/PrimaryButton";
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useContext, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Modal from "@/Components/Modal";
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import DangerButton from "@/Components/DangerButton";
import { useForm, usePage } from "@inertiajs/react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Input, Select } from "@headlessui/react";


export default function Index({ appointments, status }) {

 
    const props = usePage().props

    const patients = appointments.patients.map((patient) => patient)
    const doctors = appointments.doctors.map((doctor) => doctor)

    const { isToggle } = useContext(AuthContext)
    const [isEditing, setEditing] = useState<boolean>(false)

    const [query, setQuery] = useState('');

    const {post:post, data, setData, errors, reset, put:put} = useForm({
        patient_id: "",
        doctor_id: "",
        appointment_date: "",
        status: "",
    })

    const filteredPatients =
        query === ''
            ? patients
            : patients.filter((patient) => {
                return (patient.full_name ?? '').toLowerCase().includes(query.toLowerCase());
            })

   
    const filteredDoctors = query === '' ? doctors : doctors.filter((doctor) => {
        return (doctor.full_name ?? '').toLowerCase().includes(query.toLocaleLowerCase())
    })        
   


    const [modal, setModal] = useState<boolean>(false);

    const handleModal = () => {
        setModal(true)
    }

    const handleClose = () => {
        setModal(false)
    }

    const handleSubmit = (event: React.FormEvent) => {
          event.preventDefault()
            post(route("appointments.store",  {
                _token: props.csrf_token,
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                }
            }))
    }

    const handleEdit = () => {
      setEditing(true)
    }
    return (
        <Authenticated>
            <div className={`appointment bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />
                <div className="patientContainer">
                    <div className="modal">
                        <Modal show={modal} onClose={handleClose} maxWidth="xl">
                            <div className="modalForm p-6 relative">
                                <CloseIcon onClick={handleClose} className="absolute top-2 right-4" />
                                <form onSubmit={handleSubmit}>
                                    <div className="formGrid p-4 grid gap-y-4">
                                        <div className="patient">
                                           
                                            <Autocomplete 
                                             disablePortal
                                             options={filteredPatients}
                                             getOptionLabel={(option) => option.first_name || ''}
                                             className="w-full rounded-md z-50"
                                           
                                             value={data.patient_id ? patients.find(patient => patient.id === data.patient_id) : null} 
                                             onChange={(event, newValue) => {
                                              
                                                 setData("patient_id", newValue ? newValue.id : ""); 
                                             }}
                                             renderInput={(params) => <TextField
                                               
                                                {...params} label="Patient Name"  />}
                                            />
                                           
                                            {
                                                errors.patient_id && (
                                                    <p className="text-red-500">{errors.patient_id}</p>
                                                )
                                            }
                                        </div>
                                        <div className="doctor">
                                          
                                            <Autocomplete 
                                             disablePortal
                                             options={filteredDoctors}
                                             
                                             getOptionLabel={(option) => option.first_name || ''}
                                             className="w-full rounded-md"
                                             value={data.doctor_id ? patients.find(doctor => doctor.id === data.doctor_id) : null} 
                                             onChange={(event, newValue) => {
                                              
                                                 setData("doctor_id", newValue ? newValue.id : ""); 
                                             }}
                                             renderInput={(params) => <TextField  {...params} label="Search Doctors Name" />}
                                            />
                                            {
                                                errors.doctor_id && (
                                                    <p className="text-red-500">{errors.doctor_id}</p>
                                                )
                                            }
                                        </div>

                                        <div className="specialization">
                                            <InputLabel>Appoinment Date</InputLabel>
                                            <TextInput type="date" name="last_name" className="w-full rounded-md"
                                                value={data.appointment_date}
                                                onChange={(e) => setData("appointment_date", e.target.value)}
                                            />
                                            {
                                                errors.appointment_date && (
                                                    <p className="text-red-500">{errors.appointment_date}</p>
                                                )
                                            }
                                        </div>

                                        <div className="status">
                                            <Select value={data.status} onChange={(e) => setData("status", e.target.value)} name="status" className="w-full rounded-md">
                                                <option>Select Status</option>
                                                {
                                                    status.map((stat:any, index:number) => (
                                                       <React.Fragment key={index}>
                                                            <option value={stat.id}>{stat.value}</option>
                                                       </React.Fragment>
                                                    ))
                                                }
                                            </Select>
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
                        <h5 className="text-xl font-bold">Doctors Info</h5>  <PrimaryButton className="bg-primary rounded-md p-2" onClick={handleModal}><AddIcon className="text-white" />Add Appointments</PrimaryButton>
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
                                    <th className="capitalize p-2">Patient Name</th>
                                    <th className="capitalize p-2">Doctor Name</th>
                                    <th className="capitalize p-2">Appointment Date</th>
                                    <th className="capitalize p-2">Appointment Time</th>
                                    <th className="capitalize p-2">Edit</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {
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
                                }
                            </tbody>  */}
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