import { Link } from "@inertiajs/react";
import logo from "../../../public/images/logo.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext, useState } from "react";
import { AuthContext } from "@/Context/ContextProvider";
import MedicationIcon from '@mui/icons-material/Medication';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CategoryIcon from '@mui/icons-material/Category';
import PagesIcon from '@mui/icons-material/Pages';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountBoxIcon from '@mui/icons-material/AccountBox';



export default function Siderbar() {

    const { isToggle } = useContext(AuthContext);

    const [post, setPost] = useState(false);

    const [dropDown, setDropDown] = useState(false);
    const [settings, setSettings] = useState(false);

    const handleInventory = () => {
        setDropDown((prev) => !prev);
    }

    const handleContent = () => {
        setPost((prev) => !prev)
    }

    const handleSettings = () => {
        setSettings((prev) => !prev)
    }
    return (
        <aside>
            <div className={`sidebarContent bg-white fixed top-0 left-0 p-5 h-screen ${isToggle ? 'w-52' : 'w-20'}`}>
                <div className="title flex items-center gap-x-4">
                    <img src={logo} alt="logo" />{isToggle && (< h1 className="text-blue-700 font-poppins font-medium">JH Clinic</h1>)}
                </div>

                <div className="sidebarRoutes my-6">
                    {
                        isToggle ? (
                            <ul className="grid gap-y-4">
                                <li className="flex items-center gap-x-2 text-gray-500"><DashboardIcon /><Link href="/dashboard" className="text-base font-medium">Dashboard</Link></li>
                                <li className="flex items-center gap-x-2 text-gray-500"><GroupIcon /><Link href="/patients" className="text-base font-medium ">Patients</Link></li>
                                <li className="flex items-center gap-x-2 text-gray-500"><PersonIcon /><Link href="/doctors" className="text-base font-medium ">Doctors</Link></li>
                                <li className="flex items-center gap-x-2 text-gray-500"><AppRegistrationIcon /><Link href="/appointments" className="text-base font-medium ">Appointments</Link></li>
                                <li className="flex items-center gap-x-2 text-gray-500"><MessageIcon /><Link href="/messages" className="text-base font-medium ">Messages</Link></li>
                                <li className="flex items-center gap-x-2 text-gray-500 cursor-pointer" ><CastForEducationIcon /><span className="text-base font-medium " onClick={handleContent}>Education Content</span></li>

                                {
                                    post && (
                                        <ul>
                                            <li className="flex items-center gap-x-2 text-gray-500"><CategoryIcon /><Link href="/blog-categories" className="text-base font-medium ">Post Category</Link></li>
                                            <li className="flex items-center gap-x-2 text-gray-500"><PagesIcon /><Link href={route("blog-post.index")} className="text-base font-medium ">Post</Link></li>
                                        </ul>
                                    )
                                }

                                <li className="flex items-center gap-x-2 text-gray-500 cursor-pointer" onClick={handleInventory}><MedicalServicesIcon /><span className="text-base font-medium ">Inventory</span></li>
                                {
                                    dropDown && (
                                        <ul>

                                            <li className="flex items-center gap-x-2 text-gray-500"><Inventory2Icon /><Link href={route('drug-suppliers.index')} className="text-base font-medium">Supplier</Link></li>
                                            <li className="flex items-center gap-x-2 text-gray-500"><MedicationIcon /><Link href={route("drug-categories.index")} className="text-base font-medium">Category</Link></li>
                                            <li className="flex items-center gap-x-2 text-gray-500"><MedicationLiquidIcon /><Link href={route('drugs.index')} className="text-base font-medium">Drugs</Link></li>
                                            <li className="flex items-center gap-x-2 text-gray-500"><ShowChartIcon /><Link href={route("drugs-purchases.index")} className="text-base font-medium">Purchases</Link></li>
                                            <li className="flex items-center gap-x-2 text-gray-500"><TrendingDownIcon /><Link href={route("drugs-sales.index")} className="text-base font-medium">Sales</Link></li>
                                        </ul>
                                    )
                                }
                                <li className="flex items-center gap-x-2 text-gray-500 cursor-pointer" onClick={handleSettings}><SettingsIcon />Settings</li>
                                {
                                    settings && (
                                      <ul>
                                          <li className="flex items-center gap-x-2 text-gray-500"><SupervisorAccountIcon /><Link href={route('roles.index')} className="text-base font-medium">Roles</Link></li>
                                          <li className="flex items-center gap-x-2 text-gray-500"><AccountBoxIcon /><Link href={route('profile.edit')} className="text-base font-medium">Profile</Link></li>
                                      </ul>
                                    )
                                }
                            </ul>
                        ) : (
                            <ul className="grid gap-y-4">
                                <li className="flex items-center gap-x-2 text-gray-500"><DashboardIcon /></li>
                                <li className="flex items-center gap-x-2 text-gray-500"><GroupIcon /></li>
                                <li className="flex items-center gap-x-2 text-gray-500"><AppRegistrationIcon /></li>
                                <li className="flex items-center gap-x-2 text-gray-500"><MessageIcon /></li>
                                <li className="flex items-center gap-x-2 text-gray-500"><CastForEducationIcon /></li>
                                <li className="flex items-center gap-x-2 text-gray-500"><MedicalServicesIcon /></li>
                                <li className="flex items-center gap-x-2 text-gray-500"><SettingsIcon /></li>
                            </ul>
                        )
                    }
                </div>

                <div className="logout absolute bottom-10">
                    {
                        isToggle ? (
                            <> <LogoutIcon /> <Link href="">Logout</Link></>
                        ) : (
                            <LogoutIcon />

                        )
                    }
                </div>
            </div>
        </aside>
    )
}
