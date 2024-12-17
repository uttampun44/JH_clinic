import Siderbar from '@/Components/Sidebar';
import { AuthContext } from '@/Context/ContextProvider';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Menu, MenuButton, MenuItem, MenuItems, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Head } from '@inertiajs/react';
import { useContext } from 'react';

export default function Dashboard() {

    const { isToggle } = useContext(AuthContext)
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Siderbar />
            <Head title="Dashboard" />


            <div className={`  ${isToggle ? 'ml-56  rounded-md mr-8' : 'ml-24 '}`}>
                <div className="dashboard-grid grid grid-cols-3 gap-6">
                    <div className="activityOverview bg-white p-5 rounded-md">
                        <div className="title flex justify-between">
                            <h6>Activity Overview</h6> <div className="menu">
                                <Menu>
                                    <MenuButton>My account</MenuButton>
                                    <MenuItems anchor="bottom" className="bg-mainbg p-4 rounded-md ">
                                        <MenuItem>
                                            <a className="block data-[focus]:bg-blue-100" href="/settings">
                                                Settings
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a className="block data-[focus]:bg-blue-100" href="/support">
                                                Support
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a className="block data-[focus]:bg-blue-100" href="/license">
                                                License
                                            </a>
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                        <div className="gridCols grid grid-cols-2 gap-4">
                            <div className="appointmentBox bg-[#A4D2FF] p-5 rounded-md">
                                appointment
                            </div>
                            <div className="patient bg-[#A4FFBD] p-5 rounded-md">
                                patient
                            </div>
                            <div className="medicinesold bg-[#FFF598] p-5 rounded-md">
                                medicineSold
                            </div>
                            <div className="labTest bg-[#CCA4FF] p-5 rounded-md">
                                labTest
                            </div>
                        </div>
                    </div>
                    <div className="appointmentsOverview bg-white p-5 rounded-md col-span-2">

                        <TabGroup>
                            <TabList className="flex gap-x-4" >
                                <Tab className="data-[selected]:bg-mainbg data-[selected]:p-2 data-[selected]:rounded-md data-[selected]:text-gray-500">New Appointment</Tab>
                                <Tab className="data-[selected]:bg-mainbg data-[selected]:p-2 data-[selected]:rounded-md data-[selected]:text-gray-500">Completed Appointment</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <table className='table-auto w-full'>
                                        <thead className="p-1">
                                            <tr className="w-full border-b-2 text-primarytextcolor font-poppins">
                                                <th className="capitalize p-2" >S.No</th>
                                                <th className="capitalize p-2" >Time</th>
                                                <th className="capitalize p-2" >Date</th>
                                                <th className="capitalize p-2" >Patient Name</th>
                                                <th className="capitalize p-2" >Doctor</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </TabPanel>
                                <TabPanel>
                                    <table className='table-auto w-full'>
                                        <thead className="p-1">
                                            <tr className="w-full border-b-2 text-primarytextcolor font-poppins">
                                                <th className="capitalize p-2" >S.No</th>
                                                <th className="capitalize p-2" >Time</th>
                                                <th className="capitalize p-2" >Date</th>
                                                <th className="capitalize p-2" >Patient Name</th>
                                                <th className="capitalize p-2" >Doctor</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </div>
                    <div className="educationContent bg-white p-5 rounded-md">
                        <div className="title">
                            <h6>Education Content</h6>
                        </div>
                    </div>
                    <div className="medicineSold bg-white p-5 rounded-md">
                        <div className="title">
                            <h6>Top Medicine Sold</h6>
                        </div>
                    </div>
                    <div className="patientFee bg-white p-5 rounded-md">
                        <h6>Patient Fee</h6>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
