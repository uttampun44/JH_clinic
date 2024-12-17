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


export default function Edit({editDatas}){

    console.log(editDatas)
    const {isToggle} = useContext(AuthContext);

    const { errors, data, setData, reset, put: put } = useForm({
        drug_id: editDatas.drug_category_id || "",
        supplier_id: '',
        drug_category_id: '',
        quantity: editDatas.quantity,
        purchase_price: editDatas.purchase_price || "",
        purchase_date: editDatas.purchase_date || "",
    })

    const handleSubmit = () =>{
        put(route('drugs-purchases.update'), {
            data,
            preserveState: true,
            onSuccess: () => {
                reset();
                toast.success("Drug Purchase Successfully create");
            },
            onError: () => {
                toast.error("Unable to create drug purchase")
            }
        })
    }
    return(
        <Authenticated>
        <div className={`drug bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
            <Siderbar />

            <div className="durgsForm">
                <div className="title flex justify-between">
                    <h1 className="text-xl font-bold">Create Drug Purchases</h1> <PrimaryButton className="pr-1"><Link href={route("drugs-purchases.index")} className="p-2"><ArrowLeft />Back</Link></PrimaryButton>
                </div>
                <div className="form">
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div className="formGrid my-2 grid grid-cols-3 gap-4">
                                <div className="name">
                                    <InputLabel htmlFor="name" value="Name" className="text-xl text-gray-500 font-medium" />
                                    <Combobox>
                                        <ComboboxInput className="w-full rounded-md" />
                                        <ComboboxOptions>
                                            <ComboboxOption value="das" className="data-[focus]:bg-blue-100">das</ComboboxOption>
                                        </ComboboxOptions>
                                    </Combobox>
                                </div>
                                <div className="supplier">
                                    <InputLabel htmlFor="supplier" value="Supplier" className="text-xl text-gray-500 font-medium" />
                                    <Combobox>
                                        <ComboboxInput className="w-full rounded-md" />
                                        <ComboboxOptions>
                                            <ComboboxOption value="das" className="data-[focus]:bg-blue-100">das</ComboboxOption>
                                        </ComboboxOptions>
                                    </Combobox>
                                </div>
                                <div className="category">
                                    <InputLabel htmlFor="category" value="Category" className="text-xl text-gray-500 font-medium" />
                                    <Combobox>
                                        <ComboboxInput className="w-full rounded-md" />
                                        <ComboboxOptions>
                                            <ComboboxOption value="das" className="data-[focus]:bg-blue-100">das</ComboboxOption>
                                        </ComboboxOptions>
                                    </Combobox>
                                </div>
                                <div className="quantity">
                                    <InputLabel htmlFor="quantity" value="Quantity" className="text-xl text-gray-500 font-medium" />
                                    <Input type="number" className="rounded-md my-1 w-full" value={data.quantity} 
                                     onChange={(e) => setData("quantity", e.target.value)}
                                    />
                                </div>
                                <div className="price">
                                    <InputLabel htmlFor="price" value="Price" className="text-xl text-gray-500 font-medium" />
                                    <Input type="number" className="rounded-md my-1 w-full" 
                                      value={data.purchase_price}
                                      onChange={(e) => setData("purchase_price", e.target.value)}
                                    />
                                </div>
                                <div className="date">
                                    <InputLabel htmlFor="date" value="Date" className="text-xl text-gray-500 font-medium" />
                                    <Input type="date" className="rounded-md my-1 w-full"
                                      value={data.purchase_date}
                                      onChange={(e) => setData("purchase_date", e.target.value)}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Authenticated>
    )
}