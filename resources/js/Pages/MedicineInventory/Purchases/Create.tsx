import PrimaryButton from "@/Components/PrimaryButton";
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import React, { useContext} from "react";
import { ArrowLeft } from "@mui/icons-material";
import InputLabel from "@/Components/InputLabel";
import { Input } from "@headlessui/react";
import { toast } from "sonner";
import DangerButton from "@/Components/DangerButton";
import { Autocomplete, TextField } from "@mui/material";


export default function Create({ datas }) {

    const drugs = datas.drugs.map(drug => drug)
    const suppliers = datas.suppliers.map(supplier => supplier)
    const categories = datas.drug_categories.map(cat => cat)

    const { isToggle } = useContext(AuthContext)


    const filteredDrugsName = drugs.filter((drug) => {return drug.name.toLowerCase()})
    const filteredSupplierName = suppliers.filter((supplier) => {return supplier.name.toLowerCase()})
    const filteredCat = categories.filter((category) => {return category.name.toLocaleLowerCase()})


    const { errors, data, setData, reset, post: post } = useForm({
        drug_id: '',
        supplier_id: '',
        drug_category_id: '',
        unit_price: '',
        quantity: '',
        purchase_price: '',
        purchase_date: '',
    })
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        post(route('drugs-purchases.store'), {
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

    return (
        <Authenticated>
            <div className={`drug bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />

                <div className="durgsForm">
                    <div className="title flex justify-between">
                        <h1 className="text-xl font-bold">Create Purchases</h1> <PrimaryButton className="pr-1"><Link href={route("drugs-purchases.index")} className="p-2"><ArrowLeft />Back</Link></PrimaryButton>
                    </div>
                    <div className="form">
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="formGrid my-2 grid grid-cols-3 gap-4">
                                    <div className="name ">
                                        <InputLabel htmlFor="name" value="Name" className="text-xl text-gray-500 font-medium" />
                                        <Autocomplete
                                            disablePortal
                                            options={filteredDrugsName}

                                            getOptionLabel={(drug) => drug.name || ''}
                                            className="w-full rounded-md my-1"
                                            value={drugs.find(drug => drug.id === data.drug_id) || null}
                                            onChange={(event, newValue) => {

                                                setData("drug_id", newValue ? newValue.id : "");
                                            }}
                                            renderInput={(params) => <TextField  {...params} label="Search Drug Name" />}
                                        />
                                        {
                                            errors.drug_id && (
                                                <p className="text-red-600">The Drug name field is required</p>
                                            )
                                        }
                                    </div>
                                    <div className="supplier">
                                        <InputLabel htmlFor="supplier" value="Supplier" className="text-xl text-gray-500 font-medium" />
                                        <Autocomplete
                                            disablePortal
                                            options={filteredSupplierName}

                                            getOptionLabel={(supp) => supp.name || ''}
                                            className="w-full rounded-md my-1"
                                            value={suppliers.find(supplier => supplier.id === data.supplier_id) || null}

                                            onChange={(event, newValue) => {

                                                setData("supplier_id", newValue ? newValue.id : "");
                                            }}
                                            renderInput={(params) => <TextField  {...params} label="Search Supplier Name" />}
                                        />
                                        {
                                            errors.supplier_id && (
                                                <p className="text-red-600">The Drug Supplier field is required</p>
                                            )
                                        }
                                    </div>
                                    <div className="category">
                                        <InputLabel htmlFor="category" value="Category" className="text-xl text-gray-500 font-medium" />
                                        <Autocomplete
                                            disablePortal
                                            options={filteredCat}

                                            getOptionLabel={(drug_category) => drug_category.name || ''}
                                            className="w-full rounded-md my-1"
                                            value={categories.find(category => category.id === data.drug_category_id) || null}
                                            onChange={(event, newValue) => {

                                                setData("drug_category_id", newValue ? newValue.id : "");
                                            }}
                                            renderInput={(params) => <TextField  {...params} label="Search Drug Category Name" />}
                                        />
                                        {
                                            errors.drug_category_id && (
                                                <p className="text-red-600">The Drug category field is required</p>
                                            )
                                        }
                                    </div>
                                    <div className="unit_price">
                                        <InputLabel htmlFor="unit_price" value="Unit Price" className="text-xl text-gray-500 font-medium" />
                                        <Input type="text" className="rounded-md my-1 w-full" value={data.unit_price} onChange={(e) => setData("unit_price", e.target.value)} />
                                        {
                                            errors.unit_price && (
                                                <p className="text-red-600">{errors.unit_price}</p>
                                            )
                                        }
                                    </div>

                                    <div className="quantity">
                                        <InputLabel htmlFor="quantity" value="Quantity" className="text-xl text-gray-500 font-medium" />
                                        <Input type="text" className="rounded-md my-1 w-full" value={data.quantity} onChange={(e) => setData("quantity", e.target.value)} />
                                        {
                                            errors.quantity && (
                                                <p className="text-red-600">{errors.quantity}</p>
                                            )
                                        }
                                    </div>
                                    <div className="price">
                                        <InputLabel htmlFor="price" value="Price" className="text-xl text-gray-500 font-medium" />
                                        <Input type="text" className="rounded-md my-1 w-full"
                                         value={data.purchase_price}
                                         onChange={(e) => setData("purchase_price", e.target.value)}
                                        />
                                        {
                                            errors.purchase_price && (
                                                <p className="text-red-600">{errors.purchase_price}</p>
                                            )
                                        }
                                    </div>
                                    <div className="date">
                                        <InputLabel htmlFor="date" value="Date" className="text-xl text-gray-500 font-medium" />
                                        <Input type="date" className="rounded-md my-1 w-full"
                                         value={data.purchase_date}
                                         onChange={(e) => setData("purchase_date", e.target.value)}
                                        />
                                        {
                                            errors.purchase_date && (
                                                <p className="text-red-600">{errors.purchase_date}</p>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="submit flex gap-x-2">
                                    <PrimaryButton className="p-2">Create</PrimaryButton>  <DangerButton><Link href={route("drugs-purchases.index")} className="p-1">Cancel</Link></DangerButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
