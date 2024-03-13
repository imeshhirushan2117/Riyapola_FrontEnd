import AdminCar from "../pages/AdminCar/AdminCar"
import AdminAction from '../pages/AdminAction/AdminAction'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Swal from "sweetalert2";

// const SignOutComponent = () => {
//     localStorage.removeItem('stmToken')
//     window.location.reload()
//     console.log("log Out Admin Successfull !");
//     alert("success", "log Out Admin Successfull !")
// }

// const alert = (icon, title) => {
//     Swal.fire({
//         position: "top-end",
//         icon: icon,
//         title: title,
//         showConfirmButton: false,
//         timer: 3000
//     });
// }

const routesNav = [
    {
        name:"Manage Vehicle",
        key:"admincar",
        path:"/adminCar",
        component:<AdminCar/> ,
        icon:<DirectionsCarIcon/>
    },
    {
        name:"Manage Admin",
        key:"adminAction",
        path:"/adminAction",
        component:<AdminAction/> ,
        icon:<ManageAccountsIcon/>
    },
    // {
    //     name:"Sign Out",
    //     key:"signOut",
    //     path:"/signOut",
    //     component:<SignOutComponent />,
    //     icon:<MeetingRoomIcon/>
    // },
];

export default routesNav