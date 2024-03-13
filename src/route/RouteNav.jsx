import AdminCar from "../pages/AdminCar/AdminCar"
import AdminAction from '../pages/AdminAction/AdminAction'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
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
    }
];

export default routesNav