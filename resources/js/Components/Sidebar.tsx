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


export default function Siderbar(){
    return(
        <aside>
             <div className="sidebarContent bg-white fixed top-0 left-0 w-52 p-5 h-screen">
                   <div className="title">
                      <img src={logo} alt="logo" />< h1>JH Clinic</h1>
                   </div>

                   <div className="sidebarRoutes my-6">
                       <ul className="grid gap-y-4">
                           <li className="flex items-center"><DashboardIcon /><Link href="/dashboard" className="text-base font-medium">Dashboard</Link></li>
                           <li className="flex items-center"><GroupIcon /><Link href="/patients" className="text-base font-medium ">Patients</Link></li>
                           <li className="flex items-center"><PersonIcon /><Link href="/doctors" className="text-base font-medium ">Doctors</Link></li>
                           <li className="flex items-center"><AppRegistrationIcon /><Link href="/appointments" className="text-base font-medium ">Appointments</Link></li>
                           <li className="flex items-center"><MessageIcon /><Link href="/messages" className="text-base font-medium ">Messages</Link></li>
                           <li className="flex items-center"><CastForEducationIcon /><Link href="/education-content" className="text-base font-medium ">Education Content</Link></li>
                           <li className="flex items-center"><MedicalServicesIcon /><Link href="/medicine-inventory" className="text-base font-medium ">Medicine Inventory</Link></li>
                           <li className="flex items-center"><SettingsIcon /><Link href="/settings" className="text-base font-medium ">Settings</Link></li>
                       </ul>
                   </div>

                   <div className="logout absolute bottom-10">
                      <LogoutIcon />  <Link href="">Logout</Link>
                   </div>
             </div>
        </aside>
    )
}