import PrimaryButton from "@/Components/PrimaryButton";
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import { useContext } from "react";
import { ArrowLeft } from "@mui/icons-material";
import InputLabel from "@/Components/InputLabel";
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Input } from "@headlessui/react";
import { toast } from "sonner";
import DangerButton from "@/Components/DangerButton";


export default function Edit({ editDatas }) {

    const { isToggle } = useContext(AuthContext);

    const { errors, data, setData, reset, put: put } = useForm({
        drug_id: editDatas.drugs.name || "",
        supplier_id: editDatas.supplier.name || "",
        drug_category_id: editDatas.drug_category.name || "",
        unit_price: editDatas.unit_price || "",
        quantity: editDatas.quantity,
        purchase_price: editDatas.purchase_price || "",
        purchase_date: editDatas.purchase_date || "",
       
    })

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        put(route('drugs-purchases.update', editDatas.id), {
            data,
            preserveState: true,
            onSuccess: () => {
                reset();
                toast.success("Drug Purchase Successfully Update");
            },
            onError: () => {
                toast.error("Unable to update drug purchase")
            }
        })
    }
    return (
        <Authenticated>
            <div className={`drug bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />

                <div className="durgsForm">
                    <div className="title flex justify-between">
                        <h1 className="text-xl font-bold">Update Purchases</h1> <PrimaryButton className="pr-1"><Link href={route("drugs-purchases.index")} className="p-2"><ArrowLeft />Back</Link></PrimaryButton>
                    </div>
                    <div className="form">
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="formGrid my-2 grid grid-cols-3 gap-4">
                                    <div className="name">
                                        <InputLabel htmlFor="name" value="Name" className="text-xl text-gray-500 font-medium" />
                                        <Input type="text" className="rounded-md my-1 w-full bg-gray-300/90 border-none text-gray-500 capitalize"
                                            value={data.drug_id}
                                            onChange={(e) => setData("drug_id", e.target.value)}
                                            readOnly
                                        />
                                    </div>
                                    <div className="supplier">
                                        <InputLabel htmlFor="supplier" value="Supplier" className="text-xl text-gray-500 font-medium " />
                                        <Input type="text" className="rounded-md my-1 w-full bg-gray-300/90 border-none text-gray-500 capitalize"
                                            value={data.supplier_id}
                                            onChange={(e) => setData("supplier_id", e.target.value)}
                                            readOnly
                                        />
                                    </div>
                                    <div className="category">
                                        <InputLabel htmlFor="category" value="Category" className="text-xl text-gray-500 font-medium" />
                                        <Input type="text" className="rounded-md my-1 w-full bg-gray-300/90 border-none text-gray-500 capitalize"
                                            value={data.drug_category_id}
                                            onChange={(e) => setData("drug_category_id", e.target.value)}
                                            readOnly
                                        />
                                    </div>

                                    <div className="unit_price">
                                        <InputLabel htmlFor="unit_price" value="Unit Price" className="text-xl text-gray-500 font-medium" />
                                        <Input type="number" className="rounded-md my-1 w-full" value={data.unit_price}
                                            onChange={(e) => setData("unit_price", e.target.value)}
                                        />
                                        {
                                            errors.unit_price && (
                                                <p className="text-red-500">{errors.unit_price}</p>
                                            )
                                        }
                                    </div>
                                    <div className="quantity">
                                        <InputLabel htmlFor="quantity" value="Quantity" className="text-xl text-gray-500 font-medium" />
                                        <Input type="number" className="rounded-md my-1 w-full" value={data.quantity}
                                            onChange={(e) => setData("quantity", e.target.value)}
                                        />
                                        {
                                            errors.quantity && (
                                                <p className="text-red-500">{errors.quantity}</p>
                                            )
                                        }
                                    </div>
                                    <div className="price">
                                        <InputLabel htmlFor="price" value="Price" className="text-xl text-gray-500 font-medium" />
                                        <Input type="number" className="rounded-md my-1 w-full"
                                            value={data.purchase_price}
                                            onChange={(e) => setData("purchase_price", e.target.value)}
                                        />
                                        {
                                            errors.purchase_price && (
                                                <p className="text-red-500">{errors.purchase_price}</p>
                                            )
                                        }
                                    </div>
                                    <div className="date">
                                        <InputLabel htmlFor="date" value="Date" className="text-xl text-gray-500 font-medium" />
                                        <Input type="date" className="rounded-md my-1 w-full"
                                            value={data.purchase_date}
                                            onChange={(e) => setData("purchase_date", e.target.value)}
                                        />
                                     
                                    </div>
                                </div>
                                <div className="submit flex gap-x-2">
                                    <PrimaryButton className="p-2">Update</PrimaryButton>  <DangerButton><Link href={route("drugs-purchases.index")} className="p-1">Cancel</Link></DangerButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}