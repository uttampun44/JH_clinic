import PrimaryButton from "@/Components/PrimaryButton";
import Siderbar from "@/Components/Sidebar";
import { AuthContext } from "@/Context/ContextProvider";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useContext, useState } from "react";
import { ArrowLeft } from "@mui/icons-material";
import { toast } from "sonner";
import { Input, Select, Textarea } from "@headlessui/react";
import InputLabel from "@/Components/InputLabel";
import DangerButton from "@/Components/DangerButton";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";

interface postCategory {
    id: number,
    title: string
}

export default function Create({ post_category }: { post_category: postCategory[] }) {


    const { isToggle } = useContext(AuthContext);

    const { errors, data, setData, reset, post: post, progress } = useForm({
        title: '',
        meta_title: '',
        tags: '',
        short_summary: '',
        summary: '',
        image: '',
    })
  


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        post(route('blog-post.store'), {
            preserveState: true,
            onSuccess: () => {
                reset();
                toast.success("Blog Successfully create");
            },
            onError: () => {
                toast.error("Unable to create blog")
            }
        })
    }
    return (
        <Authenticated>
            <Head title="Create Blogs" />
            <div className={`postCreateContainerIndex bg-white ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'}`}>
                <Siderbar />
                <div className="title flex justify-between">
                    <h1 className="text-xl font-bold">Create blogs</h1> <PrimaryButton className="pr-1"><Link href={route("blog-post.index")} className="p-2"><ArrowLeft />Back</Link></PrimaryButton>
                </div>
                <div className="postForm">
                    <form onSubmit={handleSubmit}>
                        <div className="formGrid my-2 grid grid-cols-3 gap-4">
                            <div className="title">
                                <InputLabel htmlFor="title" value="Title" className="text-xl text-gray-500 font-medium" />
                                <Select className="w-full rounded-md" value={data.title} onChange={(e) => setData("title", e.target.value)}>
                                    <option>Select Post Category</option>
                                    {
                                        post_category.map((category, index) => (
                                            <option value={category.id} key={index}>{category.title}</option>
                                        ))
                                    }
                                </Select>
                                {
                                    errors.title && (
                                        <p className="text-red-600">{errors.title}</p>
                                    )
                                }
                            </div>
                            <div className="meta_title">
                                <InputLabel htmlFor="meta_title" value="Meta Title" className="text-xl text-gray-500 font-medium" />
                                <Input type="text" className="rounded-md my-1 w-full" value={data.meta_title} onChange={(e) => setData("meta_title", e.target.value)} />
                                {
                                    errors.meta_title && (
                                        <p className="text-red-600">{errors.meta_title}</p>
                                    )
                                }
                            </div>

                            <div className="tags">
                                <InputLabel htmlFor="tags" value="Tags" className="text-xl text-gray-500 font-medium" />
                                <Input type="text" className="rounded-md my-1 w-full" value={data.tags} onChange={(e) => setData("tags", e.target.value)} />
                                {
                                    errors.tags && (
                                        <p className="text-red-600">{errors.tags}</p>
                                    )
                                }
                            </div>
                            <div className="short_summary">
                                <InputLabel htmlFor="short_summary" value="Short Summary" className="text-xl text-gray-500 font-medium" />
                                <Input type="text" className="rounded-md my-1 w-full" value={data.short_summary} onChange={(e) => setData("short_summary", e.target.value)} />
                                {
                                    errors.short_summary && (
                                        <p className="text-red-600">{errors.short_summary}</p>
                                    )
                                }
                            </div>
                            <div className="summary">
                                <InputLabel htmlFor="summary" value="Summary" className="text-xl text-gray-500 font-medium" />

                                <ReactQuill theme="snow" value={data.summary } onChange={(content) => setData("summary", content)} />
                                {
                                    errors.summary && (
                                        <p className="text-red-600">{errors.summary}</p>
                                    )
                                }
                            </div>
                            <div className="image">
                                <InputLabel htmlFor="image" value="Image" className="text-xl text-gray-500 font-medium" />

                                <Input type="file" className="rounded-md my-1 w-full"
                                    onChange={(e) => setData("image", e.target.files[0])} accept="image/*" />
                                {
                                    errors.image && (
                                        <p className="text-red-600">{errors.image}</p>
                                    )
                                }
                                {progress && (
                                    <progress value={progress.percentage} max="100">
                                        {progress.percentage}%
                                    </progress>
                                )}
                                {data.image && (
                                    <div className="previewImage w-40 h-40">
                                        <img src={URL.createObjectURL(data.image)} alt="Logo Preview" className="w-full h-full" />
                                    </div>)}
                            </div>
                        </div>
                        <div className="submit flex gap-x-2">
                            <PrimaryButton className="p-2 bg-green-700 text-white">Create</PrimaryButton>  <DangerButton><Link href={route("blog-post.index")} className="p-1">Cancel</Link></DangerButton>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    )
}
