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
import { Input, Select, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {  Edit } from "@mui/icons-material";
import Paginate from "@/Components/Paginate";


export default function Index({ appointments, status}) {

console.log(appointments)
    const props = usePage().props

    const patients = appointments.patients.map((patient) => patient)
    const doctors = appointments.doctors.map((doctor) => doctor)

    const { isToggle } = useContext(AuthContext)
    const [isEditing, setEditing] = useState<boolean>(false)
    const [currentId, setCurrentId] = useState<string>("");

    const [query, setQuery] = useState('');

    const { post: post, data, setData, errors, reset, put: put } = useForm({
        patient_id: "",
        doctor_id: "",
        appointment_date: "",
        appointment_time: "",
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
       if(isEditing && currentId){
           put(route("appointments.update", currentId), {
               data,
               preserveScroll: true,
               onSuccess: () => {
                   reset();
                   setModal(false);
                   setEditing(false);
               },
           });
       }else{
        post(route("appointments.store", {
            _token: props.csrf_token,
            preserveScroll: true,
            onSuccess: () => {
                reset();
            }
        }))
       }
    }

    const handleEdit = (completed:any) => {
        setEditing(true)
        setModal(true)
        setCurrentId(completed.id)
        setData({
            patient_id: completed.id,
            doctor_id: completed.id,
            appointment_date: completed.appointment_date,
            appointment_time: completed.appointment_time,
            status: completed,
        })
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

                                                    {...params} label="Patient Name" />}
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

                                        <div className="appointment_date">
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

                                        <div className="appointment_time">
                                            <InputLabel>Appoinment Time</InputLabel>
                                            <TextInput type="time" name="last_name" className="w-full rounded-md"
                                                value={data.appointment_time}
                                                onChange={(e) => setData("appointment_time", e.target.value)}
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
                                                    status.map((stat: any, index: number) => (
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
                    <div className="headingRow  border-b-[1px] pb-1">

                        <TabGroup>
                            <TabList className=" flex relative gap-x-4" >
                                <Tab className="data-[selected]:bg-mainbg data-[selected]:p-2 data-[selected]:rounded-md data-[selected]:text-gray-500">Pending Appointment</Tab>
                                <Tab className="data-[selected]:bg-mainbg data-[selected]:p-2 data-[selected]:rounded-md data-[selected]:text-gray-500">Completed Appointment</Tab>
                                <Tab className="data-[selected]:bg-mainbg data-[selected]:p-2 data-[selected]:rounded-md data-[selected]:text-gray-500">Cancelled Appointment</Tab>

                                <div className="addAppointmentRow absolute right-0">
                                    <PrimaryButton className="bg-primary rounded-md p-2" onClick={handleModal}><AddIcon className="text-white" />Add Appointments</PrimaryButton>
                                </div>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
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
                                                    <th className="capitalize p-2">Status</th>
                                                    <th className="capitalize p-2">Edit</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    appointments.appointments.data.length > 0 ? (
                                                        <React.Fragment>
                                                            {

                                                                appointments.appointments.data.map((appointment: any, index: number) => (
                                                                    <tr className="p-2 text-center text-gray-500" key={index}>
                                                                        <td className="capitalize p-2">{index + 1}</td>
                                                                        <td className="capitalize p-2">{appointment.patient?.first_name}</td>
                                                                        <td className="capitalize p-2">{appointment.doctors?.first_name}</td>
                                                                        <td className="capitalize p-2">{appointment.appointment_date}</td>
                                                                        <td className="capitalize p-2">{appointment.appointment_time}</td>
                                                                        <td className="capitalize p-2">{appointment.status}</td>
                                                                        <td className="capitalize p-2"><Edit className="cursor-pointer" onClick={() => handleEdit(appointment)} /></td>
                                                                    </tr>
                                                                ))
                                                            }
                                                        </React.Fragment>
                                                    ) : (
                                                        <tr className="p-2 text-center">
                                                            <td className="p-2 " colSpan={6}>No Data Found</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>


                                        </table>
                                    </div>
                                    <div className="flex items-center justify-center my-4 space-x-4">

                                        <Paginate links={appointments.appointments.links} />
                                    </div>
                                </TabPanel>
                                <TabPanel>
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
                                                    <th className="capitalize p-2">Status</th>
                                                    <th className="capitalize p-2">Edit</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    appointments.completed.data.length > 0 ? (
                                                        <React.Fragment>
                                                            {

                                                                appointments.completed.data.map((completed: any, index: number) => (
                                                                    <tr className="p-2 text-center text-gray-500" key={index}>
                                                                        <td className="capitalize p-2">{index + 1}</td>
                                                                        <td className="capitalize p-2">{completed.patient?.first_name}</td>
                                                                        <td className="capitalize p-2">{completed.doctors?.first_name}</td>
                                                                        <td className="capitalize p-2">{completed.appointment_date}</td>
                                                                        <td className="capitalize p-2">{completed.appointment_time}</td>
                                                                        <td className="capitalize p-2">{completed.status}</td>
                                                                        <td className="capitalize p-2"><Edit className="cursor-pointer" onClick={() => handleEdit(completed)} /></td>
                                                                    </tr>
                                                                ))
                                                            }
                                                        </React.Fragment>
                                                    ) : (
                                                        <tr className="p-2 text-center">
                                                            <td className="p-2 " colSpan={6}>No Data Found</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>


                                        </table>
                                    </div>
                                    <div className="flex items-center justify-center my-4 space-x-4">

                                        <Paginate links={appointments.completed.links} />
                                    </div>
                                </TabPanel>
                                <TabPanel>
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
                                                    <th className="capitalize p-2">Status</th>
                                                    <th className="capitalize p-2">Edit</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    appointments.cancelled.data.length > 0 ? (
                                                        <React.Fragment>
                                                            {

                                                                appointments.cancelled.data.map((cancel: any, index: number) => (
                                                                    <tr className="p-2 text-center text-gray-500" key={index}>
                                                                        <td className="capitalize p-2">{index + 1}</td>
                                                                        <td className="capitalize p-2">{cancel.patient?.first_name}</td>
                                                                        <td className="capitalize p-2">{cancel.doctors?.first_name}</td>
                                                                        <td className="capitalize p-2">{cancel.appointment_date}</td>
                                                                        <td className="capitalize p-2">{cancel.appointment_time}</td>
                                                                        <td className="capitalize p-2">{cancel.status}</td>
                                                                        <td className="capitalize p-2"><Edit className="cursor-pointer" onClick={() => handleEdit(cancel)} /></td>
                                                                    </tr>
                                                                ))
                                                            }
                                                        </React.Fragment>
                                                    ) : (
                                                        <tr className="p-2 text-center">
                                                            <td className="p-2 " colSpan={6}>No Data Found</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>


                                        </table>
                                    </div>
                                    <div className="flex items-center justify-center my-4 space-x-4">

                                        <Paginate links={appointments.cancelled.links} />
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>

                    </div>
                </div>
            </div>

        </Authenticated>
    )
}
