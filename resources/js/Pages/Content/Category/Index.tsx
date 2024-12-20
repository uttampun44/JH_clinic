import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import Paginate from "@/Components/Paginate";
import PrimaryButton from "@/Components/PrimaryButton";
import Siderbar from "@/Components/Sidebar";
import TextInput from "@/Components/TextInput";
import { AuthContext } from "@/Context/ContextProvider";
import useModal from "@/Hooks/useModal";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Input } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useContext, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';



export default function Index(){

    const {isToggle} = useContext(AuthContext);

    const {modal, setModal, isEditing, setEditing} = useModal()

    const [postcategoryId, setPostcategoryId] = useState<string>("")

    const { post: post, data, setData, errors, delete: destroy, put: put, reset } = useForm({
        title: '',
        meta_title: '',
        slug: '',
    })


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (isEditing && postcategoryId) {

            put(route("post-categories.update", postcategoryId), {
                data,
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    setModal(false);
                    setEditing(false);
                },
            });
        } else {
            post(route("post-categories.store", {

                preserveScroll: true,
                onSuccess: () => reset()
            }))
        }


    }
    const handleClose = () => {
        setModal(false)
    }

    return(
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
                                    <div className="title">
                                        <InputLabel>Title</InputLabel>
                                        <TextInput type="text" name="first_name" className="w-full rounded-md"

                                            value={data.title}
                                            onChange={(e) => setData("title", e.target.value)}
                                        />
                                        {
                                            errors.title && (
                                                <p className="text-red-500">{errors.title}</p>
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
                                <th className="capitalize p-2">S.No</th>
                                <th className="capitalize p-2">Title</th>
                                <th className="capitalize p-2">Edit</th>
                                <th className="capitalize p-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-center my-4 space-x-4">

                   {/* <Paginate /> */}
                </div>
            </div>
        </div>
    </Authenticated>
    )
}
