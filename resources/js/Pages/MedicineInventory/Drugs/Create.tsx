import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Input, Label, Select } from "@headlessui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowLeft, Title } from "@mui/icons-material";
import { useContext } from "react";

export default function Create({categories}){

    console.log(categories)
    const {isToggle} = useContext(AuthContext);
    const {errors, setData, data, post:post, reset, clearErrors} = useForm({
        name: '',
        sku: '',
        description: '',
        manufacturer: '',
        dosage_from: '',
        strength: '',
        unit_price: '',
        expiration_date: '',
        drug_Category_id: ''
    })

    const handleSubmit = () =>{

    }
    return(
        <Authenticated>
        <div className={`drugCategory bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
            <Siderbar />

            <div className="durgsForm">
                 <div className="title flex justify-between">
                   <h1 className="text-xl font-bold">Create Drug</h1> <PrimaryButton className="pr-1"><Link href={route("drugs.index")} className="p-2"><ArrowLeft></ArrowLeft></Link>Back</PrimaryButton>
                 </div>
                 <div className="form">
                      <form onSubmit={handleSubmit}>
                         <div className="formGrid my-2 grid grid-cols-3 gap-4">
                              <div className="name">
                                  <InputLabel htmlFor="name" value="Name" className="text-xl text-gray-500 font-medium" />
                                  <Input value={data.name} onChange={(e) => setData("name", e.target.value)} className="rounded-md my-1 w-full" />
                              </div>
                              <div className="sku">
                                  <InputLabel htmlFor="sku" value="Sku" className="text-xl text-gray-500 font-medium" />
                                  <Input value={data.sku} onChange={(e) => setData("sku", e.target.value)} className="rounded-md my-1 w-full" />
                              </div>
                              <div className="description">
                                  <InputLabel htmlFor="description" value="Description" className="text-xl text-gray-500 font-medium" />
                                  <Input value={data.description} onChange={(e) => setData("description", e.target.value)} className="rounded-md my-1 w-full" />
                              </div>
                              <div className="manufacturer">
                                  <InputLabel htmlFor="manufacturer" value="Manufacturer" className="text-xl text-gray-500 font-medium" />
                                  <Input value={data.manufacturer} onChange={(e) => setData("manufacturer", e.target.value)} className="rounded-md my-1 w-full" />
                              </div>
                              <div className="dosage">
                                  <InputLabel htmlFor="dosage" value="Dosage" className="text-xl text-gray-500 font-medium" />
                                  <Input value={data.dosage_from} onChange={(e) => setData("dosage_from", e.target.value)} className="rounded-md my-1 w-full" />
                              </div>
                              <div className="strength">
                                  <InputLabel htmlFor="strength" value="Strength" className="text-xl text-gray-500 font-medium" />
                                  <Input value={data.strength} onChange={(e) => setData("strength", e.target.value)} className="rounded-md my-1 w-full" />
                              </div>
                              <div className="unit_price">
                                  <InputLabel htmlFor="unit_price" value="Strength" className="text-xl text-gray-500 font-medium" />
                                  <Input value={data.unit_price} onChange={(e) => setData("unit_price", e.target.value)} className="rounded-md my-1 w-full" />
                              </div>
                              <div className="expiration_date">
                                  <InputLabel htmlFor="expiration_date" value="Strength" className="text-xl text-gray-500 font-medium" />
                                  <Input value={data.expiration_date} onChange={(e) => setData("expiration_date", e.target.value)} className="rounded-md my-1 w-full" />
                              </div>
                              <div className="drugs_categories">
                                  <InputLabel htmlFor="drug_Categories" value="Drug Category" className="text-xl text-gray-500 font-medium" />
                                  <Select value={data.drug_Category_id} onChange={(e) => setData("drug_Category_id", e.target.value)} className="rounded-md my-1 w-full">
                                     <option>Select Drug Categories</option>
                                     {
                                        categories.drug_categories.map((category:any, index:number) => (
                                            <option value={category.id} key={index}>{category.name}</option>
                                        ))
                                     }
                                  </Select>
                              </div>
                         </div>
                         <div className="submit flex gap-x-2">
                           <PrimaryButton className="p-2">Create</PrimaryButton>  <DangerButton><Link href={route("drugs.index")} className="p-1">Cancel</Link></DangerButton>
                         </div>
                      </form>
                 </div>
            </div>
        </div>
        </Authenticated>    
    )
}