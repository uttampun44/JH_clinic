import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Input, Select, Textarea } from "@headlessui/react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useContext } from "react";
import { ArrowLeft } from "@mui/icons-material";
import { toast } from "sonner";
import InputError from "@/Components/InputError";

interface patientAccount {
    id: number,
    first_name: string,
    last_name: string,
    date_of_birth: string,
    gender: string,
    address: string
    contact_number: string
}

interface userRole {
    id: number,
    name: string,
}
export default function PatientAccount({ datas, roles }: { datas: patientAccount, roles: userRole[] }) {


    const { isToggle } = useContext(AuthContext)

    const { user: user } = usePage().props.auth;

    const patient = roles.find(role => role.id === 3)

    const { post: post, reset, setData, data, errors } = useForm({
        role_id: patient?.id,
        user_id: user.id,
        name: datas.first_name,
        email: "",
        image: "",
        password: "",
        password_confirmation: ""
    })
    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        post(route('account.store'), {
            onSuccess: () => {
                toast.message("Successfully Create Account")
                reset();
            },
            onError: () => {
                toast.error("Unable to create account")
            }
        })
    }

    return (
        <Authenticated>
            <Head title="Create Patient Account" />
            <div className={`patients bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />

                <div className="heading flex justify-between">
                    <h1 className="text-gray-500 font-bold text-xl">Create Account</h1>  <PrimaryButton className="pr-1"><Link href={route("patients.index")} className="p-2"><ArrowLeft />Back</Link></PrimaryButton>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="patientAccount grid grid-cols-3 gap-5">

                        <div className="firstName text-gray-500 ">
                            <h6 className="font-medium text-lg">First Name</h6>
                            <Input readOnly value={datas.first_name} disabled className="border-none text-start p-0 w-full" />
                        </div>

                        <div className="lastName text-gray-500 ">
                            <h6 className="font-medium text-lg">Last Name</h6>
                            <Input readOnly value={datas.last_name} disabled className="border-none text-start p-0 w-full" />
                        </div>
                        <div className="dateOfBirth text-gray-500 ">
                            <h6 className="font-medium text-lg">Date Of Birth</h6>
                            <Input readOnly value={datas.date_of_birth} disabled className="border-none text-start p-0 w-full" />
                        </div>

                        <div className="contactNumber text-gray-500">
                            <h6 className="font-medium text-lg">Contact Number</h6>
                            <Input readOnly value={datas.contact_number} disabled className="border-none text-start p-0 w-full" />
                        </div>

                        <div className="gender text-gray-500">
                            <h6 className="font-medium text-lg">Gender</h6>
                            <Input readOnly value={datas.gender} disabled className="border-none text-start p-0 w-full" />
                        </div>

                        <div className="address text-gray-500">
                            <h6 className="font-medium text-lg">Address</h6>
                            <Textarea readOnly value={datas.address} disabled className="border-none text-start p-0 w-full" />
                        </div>

                        <div className="role text-gray-500">
                            <h6 className="font-medium text-lg">Role</h6>
                            {
                                roles.map((role, index: number) => (

                                    <Input readOnly disabled key={index} className="w-full border-none rounded-md capitalize p-0" value={role.name} onChange={(e) => setData("role_id", e.target.value)} />
                                ))
                            }
                            
                            {
                                errors.role_id && (
                                    <p className="text-red-700">The role field is required</p>
                                )
                            }
                        </div>

                        <div className="email text-gray-500">
                            <h6 className="font-medium text-lg">Email</h6>
                            <Input type="email" value={data.email} onChange={(e) => setData("email", e.target.value)} className=" rounded-md h-10 text-start p-1 w-full" />
                            {
                                errors.email && (
                                    <p className="text-red-700">{errors.email}</p>
                                )
                            }
                        </div>

                        <div className="image text-gray-500">
                            <h6 className="font-medium text-lg">Image</h6>
                            <Input type="file" onChange={(e) => setData("image", e.target.files[0])} className="rounded-md h-10 text-start p-1 w-full" />
                            {
                                errors.image && (


                                    <p className="text-red-700">{errors.image}</p>

                                )
                            }

                            {
                                data.image && (
                                    <img src={URL.createObjectURL(data.image)} alt="image" className="w-20 h-20" />
                                )
                            }
                        </div>

                        <div className="password text-gray-500">
                            <h6 className="font-medium text-lg">Password</h6>
                            <Input type="password" value={data.password} onChange={(e) => setData("password", e.target.value)} className=" rounded-md h-10 text-start p-1 w-full" />
                            {
                                errors.password && (
                                    <p className="text-red-700">{errors.password}</p>
                                )
                            }
                        </div>
                        <div className="password text-gray-500">
                            <h6 className="font-medium text-lg">Confirm Password</h6>
                            <Input type="password" value={data.password_confirmation} onChange={(e) => setData("password_confirmation", e.target.value)} className=" rounded-md h-10 text-start p-1 w-full" />
                            {
                                errors.password_confirmation && (
                                    <p className="text-red-700">{errors.password_confirmation}</p>
                                )
                            }
                        </div>

                    </div>
                    <div className="btnSubmit flex gap-x-4 my-2">
                        <PrimaryButton className="p-1">Submit</PrimaryButton> <DangerButton><Link href={route("patients.index")}>Cancel</Link></DangerButton>
                    </div>
                </form>

            </div>
        </Authenticated>
    )
}