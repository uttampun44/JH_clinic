import Siderbar from '@/Components/Sidebar';
import { AuthContext } from '@/Context/ContextProvider';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useContext } from 'react';

export default function Dashboard() {

    const {isToggle} = useContext(AuthContext)
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
        <Siderbar  />
            <Head title="Dashboard" />

            <div className="py-12">
                <div className={` ${isToggle ? 'ml-56 p-10 rounded-md mr-8' : 'ml-24 p-10'} sm:px-6 lg:px-8`}>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
