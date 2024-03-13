import AdminCar from "../pages/AdminCar/AdminCar"
import AdminAction from '../pages/AdminAction/AdminAction'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const SignOutComponent = () => {
    console.log("signOut");
}

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
    {
        name:"Sign Out",
        key:"signOut",
        path:"/signOut",
        component:<SignOutComponent />,
        icon:<MeetingRoomIcon/>
    },
];

export default routesNav