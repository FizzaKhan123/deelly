import MerchantLogin from "../assets/icons/Merchant-Login.svg";
import CustomerLogin from "../assets/icons/Customer-Login.svg";
import {ProfileItem} from "../types/type";
import {ServicesItem} from "../types/type";
import Home from "../assets/icons/Home.svg";
import Dinning from "../assets/icons/Dinning.svg"
import HomeServices from "../assets/icons/Home-Services.svg";
import Entertainment from "../assets/icons/Entertaiment.svg";
import Salon from "../assets/icons/Salon.svg";

export const Profile : ProfileItem []=[
    {
        icon:CustomerLogin,
        text:"Customer Login",
        alt:"Customer"

    },
    {
        icon:MerchantLogin,
        text:"Merchant Login",
          alt:"Merchant"
    }
]

export const ServicesLinks:ServicesItem [] =[
    {
    id:1,    
    icon:Home,
    text:"HOME",
    alt:"Home"
   },
   {
    id:2,
    icon:Dinning,
    text:"DINNING",
    alt:"Dinning"
   },
   {
    id:3,
    icon:Dinning,
    text:"SALON/SPA",
    alt:"Salon"
   },
   {
    id:4,
    icon:Entertainment,
    text:"ENTERTAINMENT",
    alt:"entertainment"
   },
   {
    id:5,
    icon:HomeServices,
    text:"HOME-SERVICES",
    alt:"home service"
   },


];