import Modal from "@/Components/Modal";
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useContext, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { Input, Textarea } from "@headlessui/react";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DangerButton from "@/Components/DangerButton";
import { toast } from "sonner";
import { Edit } from "@mui/icons-material";
import Paginate from "@/Components/Paginate";

export default function Index({ drug_categories }) {

   
    const { isToggle } = useContext(AuthContext);
    const [isEditingMode, setEditing] = useState(false);
    const [drugCategoryId, setDrugCategoryId] = useState()

 
    const { errors, setData, data, post: post, put:put, reset } = useForm({
        name: "",
        description: ""
    })

    const [modal, setModal] = useState(false);

    const handleClose = () => {
          setModal(false)
    }

    const handleModal = () => {
          setModal(true)
    }

    const handleEdit = (drugCategory:any) =>{
       setEditing(true);
       setModal(true)
       setDrugCategoryId(drugCategory.id)
       setData({
        name: drugCategory.name,
        description: drugCategory.description
       })

    }

    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault();
       if(isEditingMode){
         put(route('drug-categories.update', drugCategoryId), {
            data,
            preserveScroll: true,
            onSuccess:()=>{
                toast.success("Drug Category Update")
            },
            onError: () =>{
                toast.error("Update Successfully")
            }
         })

       }else{
        post(route('drug-categories.store'), {
            onSuccess: () => {
                toast.success("Drug Category Createrd")
                reset()

            },
            onError: () =>{
                toast.error("Unable to create")
            }
        })
       }
    }

    return (
        <Authenticated>
            <div className={`drugCategory bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />
                <div className="modal">
                    <div className="modal">
                        <Modal show={modal} onClose={handleClose} maxWidth="xl">
                            <div className="modalForm p-4 relative">
                                <CloseIcon onClick={handleClose} className="absolute top-4 right-5" />
                                <form onSubmit={handleSubmit}>
                                    <div className="formGrid p-4 grid gap-y-4">
                                        <div className="firstName">
                                            <InputLabel>Drug Name</InputLabel>
                                            <TextInput type="text" name="drug_name" className="w-full rounded-md"

                                                value={data.name}
                                                onChange={(e) => setData("name", e.target.value)}
                                            />
                                            {
                                                errors.name && (
                                                    <p className="text-red-500">{errors.name}</p>
                                                )
                                            }
                                        </div>
                                        <div className="lastName">
                                            <InputLabel> Description</InputLabel>
                                            <Textarea name="description" className="w-full rounded-md"
                                                value={data.description}
                                                onChange={(e) => setData("description", e.target.value)}
                                            />
                                            {
                                                errors.description && (
                                                    <p className="text-red-500">{errors.description}</p>
                                                )
                                            }
                                        </div>
                                        <div className="submit">
                                            <DangerButton>{isEditingMode ? 'Update Category' : 'Register Category'}</DangerButton>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                    </div>
                    <div className="headingRow flex justify-between border-b-[1px] pb-1">
                        <h5 className="text-xl font-bold">Category Info</h5>  <PrimaryButton className="bg-primary rounded-md p-2" onClick={handleModal}><AddIcon className="text-white" />Add Category</PrimaryButton>
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
                                    <th className="capitalize p-2">Description</th>
                                    <th className="capitalize p-2">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    drug_categories.data.length > 0 ? (
                                        <React.Fragment>
                                            {
                                                drug_categories.data.map((drugCategory: any, index: number) => (
                                                    <tr className="p-2 text-center text-gray-500" key={index}>

                                                        <td className="capitalize p-2">{index + 1}</td>
                                                        <td className="capitalize p-2">{drugCategory.name}</td>
                                                        <td className="capitalize p-2">{drugCategory.description}</td>

                                                        <td className="capitalize p-2"><Edit className="cursor-pointer" onClick={() => handleEdit(drugCategory)} /></td>


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
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-center my-4 space-x-4">

                       <Paginate links={drug_categories.links} />
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}