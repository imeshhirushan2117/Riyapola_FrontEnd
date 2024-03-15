import AdminCar from "../pages/AdminCar/AdminCar"
import AdminAction from '../pages/AdminAction/AdminAction'
import AllCustomers from "../pages/AllCustomers/AllCustomers";


import { IoCarSportSharp } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";


const routesNav = [
    {
        name:"Manage Vehicle",
        key:"admincar",
        path:"/adminCar",
        component:<AdminCar/> ,
        icon:<IoCarSportSharp/>
    },
    {
        name:"Manage Admin",
        key:"adminAction",
        path:"/adminAction",
        component:<AdminAction/> ,
        icon:<FaUserTie/>
    },
    {
        name:"Customers",
        key:"customers",
        path:"/customers",
        component:<AllCustomers />,
        icon:<FaUsers/>
    },
];

export default routesNav