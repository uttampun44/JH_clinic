import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useContext } from "react";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import PrimaryButton from "@/Components/PrimaryButton";
import { Input } from "@headlessui/react";
import Modal from "@/Components/Modal";
import CloseIcon from '@mui/icons-material/Close';
import useModal from "@/Hooks/useModal";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import DangerButton from "@/Components/DangerButton";

export default function Index({drugs}) {

    const { isToggle } = useContext(AuthContext)

    const { modal, setModal, editing, setEditing } = useModal()
    const handleClose = () => {
        setModal(false)
    }

    const { data, setData, reset, post: post, put: put, errors } = useForm({
        drug_id: '',
        quantity: '',
        sale_price: '',
        sale_date: ''
    })

    const handleSubmit = () => {

    }

    const handleShowModal = () => {
        setModal(true);
    }

    return (
        <Authenticated>
            <div className={`sales bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />
                <div className="headingRow flex justify-between border-b-[1px] pb-1">
                    <h5 className="text-xl font-bold">Drugs Sales Info</h5>  <PrimaryButton className="bg-primary rounded-md p-2" onClick={handleShowModal} ><AddIcon className="text-white" />Add Sales</PrimaryButton>
                </div>
                <div className="search py-3 flex gap-x-4">
                    <div className="search relative">
                        <SearchIcon className="absolute left-2 top-2" /> <Input type="text" className="rounded-md p-1 pl-10 bg-mainbg" placeholder="search" />
                    </div>
                    <div className="date">
                        <Input type="date" className="rounded-md p-1 bg-mainbg" placeholder="search" />
                    </div>
                </div>

                <Modal show={modal} onClose={handleClose} maxWidth="xl">
                    <div className="modalForm p-4 relative">
                        <CloseIcon onClick={handleClose} className="absolute top-4 right-5" />
                        <form onSubmit={handleSubmit}>
                            <div className="formGrid p-4 grid gap-y-4">
                                <div className="name">
                                    <InputLabel>Drug Name</InputLabel>
                                    <TextInput type="text" name="name" className="w-full rounded-md"

                                        value={data.drug_id}
                                        onChange={(e) => setData("drug_id", e.target.value)}
                                    />
                                    {
                                        errors.drug_id && (
                                            <p className="text-red-500">{errors.drug_id}</p>
                                        )
                                    }
                                </div>
                                <div className="contact_person">
                                    <InputLabel>Quantity</InputLabel>
                                    <TextInput type="text" name="quantity" className="w-full rounded-md"
                                        value={data.quantity}
                                        onChange={(e) => setData("quantity", e.target.value)}
                                    />
                                    {
                                        errors.quantity && (
                                            <p className="text-red-500">{errors.quantity}</p>
                                        )
                                    }
                                </div>

                                <div className="price">
                                    <InputLabel>Sale Price</InputLabel>
                                    <TextInput type="text" name="sale_price" className="w-full rounded-md"
                                        value={data.sale_price}
                                        onChange={(e) => setData("sale_price", e.target.value)}
                                    />
                                    {
                                        errors.sale_price && (
                                            <p className="text-red-500">{errors.sale_price}</p>
                                        )
                                    }
                                </div>


                                <div className="quantity">
                                    <InputLabel>Sale Quantity</InputLabel>

                                    <TextInput type="text" name="quantity" className="w-full rounded-md"
                                        value={data.sale_price}
                                        onChange={(e) => setData("sale_price", e.target.value)}
                                    />
                                    {
                                        errors.sale_price && (
                                            <p className="text-red-500">{errors.sale_price}</p>
                                        )
                                    }
                                </div>

                                <div className="submit">
                                    <DangerButton>{editing ? 'Update Suppliers' : 'Register Suppliers'}</DangerButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
                <div className="table my-4 w-full">
                    <table className="table-auto w-full">
                        <thead className="p-1">
                            <tr className="w-full border-b-2 text-primarytextcolor font-poppins">
                                <th className="capitalize p-2">S.No</th>
                                <th className="capitalize p-2">Name</th>
                                <th className="capitalize p-2">Quantity</th>
                                <th className="capitalize p-2">Sale Price</th>
                                <th className="capitalize p-2">Sale Date</th>
                                <th className="capitalize p-2">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </Authenticated>
    )
}