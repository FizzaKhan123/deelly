import MerchantLogin from "../assets/icons/Merchant-Login.svg";
import CustomerLogin from "../assets/icons/Customer-Login.svg";
import {Deal, PaymentFeature, ProfileItem, ServicesLinkItem} from "../types/type";
import {ServicesItem} from "../types/type";
import Home from "../assets/icons/Home.svg";
import Dinning from "../assets/icons/Dinning.svg"
import HomeServices from "../assets/icons/Home-Services.svg";
import Entertainment from "../assets/icons/Entertaiment.svg";
import Salon from "../assets/icons/Salon.svg";
import DinningService from "../assets/icons/Dinning-Service.svg";
import SaloonServices from '../assets/icons/Saloon-Services.svg';
import EntertainmentService from '../assets/icons/Entertainment-Service.svg';
import Cleaning from "../assets/icons/Cleaning.svg";
import Discount from "../assets/icons/Discount.svg";
import Payment from "../assets/icons/Payment.svg";
import Save from "../assets/icons/Save.svg";
import Visa from "../assets/icons/Visa.svg";
import ApplePay from "../assets/icons/Apple-Pay.svg";
import SumsungPay from "../assets/icons/Sumsung-Pay.svg";
import MasterCard from "../assets/icons/Master-Card.svg"
import FaceBook from "../assets/images/Facebook.png";
import Instagram from "../assets/images/Instagram.png";
import Twitter from "../assets/images/Twitter.png";
import Dish1 from "../assets/images/Dish1.png";
import Dish2 from "../assets/images/Dish2.png";
import Dish3 from "../assets/images/Dish3.png";
import Dish4 from "../assets/images/Dish4.png";
import Dish5 from "../assets/images/Dish5.png";
import Dish6 from "../assets/images/Dish6.png";
import Chef1 from "../assets/images/Chef1.png";
import Chef2 from "../assets/images/Chef2.png";
import Chef3 from "../assets/images/Chef3.png";



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

export const diningOptions = [
    {
      label: "Restaurants",
      value: "restaurants"
    },
    {
      label: "Cafes",
      value: "cafes"
    },
    {
      label: "Fast Food",
      value: "fast-food"
    }
];
  
  export const categoryOptions = [
    {
      label: "All Categories",
      value: "all"
    },
    {
      label: "Pakistani",
      value: "pakistani"
    },
    {
      label: "Chinese",
      value: "chinese"
    }
  ];
  
  export const subCategoryOptions = [
    {
      label: "BBQ",
      value: "bbq"
    },
    {
      label: "Seafood",
      value: "seafood"
    },
    {
      label: "Desserts",
      value: "desserts"
    }
  ];
  
  export const cityOptions = [
    {
      label: "Lahore",
      value: "lahore"
    },
    {
      label: "Karachi",
      value: "karachi"
    },
    {
      label: "Islamabad",
      value: "islamabad"
    }
  ];
  
  export const destinationOptions = [
    {
      label: "Johar Town",
      value: "johar-town"
    },
    {
      label: "Gulberg",
      value: "gulberg"
    },
    {
      label: "DHA",
      value: "dha"
    }
  ] ;

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
  export const ServicesOptions:ServicesLinkItem [] =[
    {
    id:1,    
    icon:DinningService,
    text:"HOME",
    alt:"Home",
    backgroundColor:"#D5F4ED"
   },
   {
    id:2,
    icon:SaloonServices,
    text:"Saloon/Spa",
    alt:"Dinning",
    backgroundColor:"#F5E3DB"
   },
   {
    id:3,
    icon:EntertainmentService,
    text:"Entertainment",
    alt:"Entertainment",
   backgroundColor:"#F5DCDC"
   },
   {
    id:4,
    icon:Cleaning,
    text:"Cleaning",
    alt:"Cleaning",
    backgroundColor:"#CFE9FE"
   },
   {
    id:5,
    icon:Cleaning,
    text:"Cleaning",
    alt:"Cleaning",
    backgroundColor:"#CFE9FE"
   },
   {
    id:6,
    icon:Cleaning,
    text:"Cleaning",
    alt:"Cleaning",
     backgroundColor:"#CFE9FE"
   },
];  



export const PaymentFeatureOption: PaymentFeature[] = [
  {
    id:1,
    title: "Amazing Last Minute Discounts",
    description: "Get Amazing Last Minute Discounts on your favorite categories that, or locally, get yours & more",
    icon: Discount,
    alt: "Tag icon representing discounts and offers"
  },
  {
    id:2,
    title: "Save",
    description: "Save Money with our deals of offers",
    icon: Save,
    alt: "Piggy bank icon representing savings"
  },
  {
    id:3,
    title: "Secure Payments",
    description: "This Secure payment method ensures that your data is safe & secure your data secure is safe",
    icon: Payment,
    alt: "Shield icon representing secure payments"
  }
]



// export const NearByDeals: Deal[] = [
//   {
//     bannerImage: Dish1,
//     discount: "Flat 15% Off",
//     dishName: "Loaded Fries At Aloo Cart",
//     locations: ["Pakistan,Lahore", "Pakistan,Lahore"],
//     moreLocations: 
//       {
//         count: "+2 more",
//         locations: ["Pakistan,Karachi", "Pakistan,Multan"],
//       },
    
//     chef: {
//       chefPicture: Chef1,
//       chefName: "Aloo Cart",
//     },
//   },
//   {
//     bannerImage: Dish2,
//     discount: "Flat 15% Off",
//     dishName: "Loaded Fries At Aloo Cart",
//     locations: ["Pakistan,Lahore", "Pakistan,Lahore"],
//     moreLocations: 
//       {
//         count: "+5 more",
//         locations: ["Pakistan,Karachi", "Pakistan,Multan","Pakistan,Jhang","Pakistan,Kasur","Pakistan,Multan"],
//       },
//     chef: {
//       chefPicture: Chef2,
//       chefName: "Aloo Cart",
//     },
//   },
//   {
//     bannerImage: Dish3,
//     discount: "Flat 15% Off",
//     dishName: "Loaded Fries At Aloo Cart",
//     locations: ["Pakistan,Lahore", "Pakistan,Lahore"],
//     moreLocations: 
//       {
//         count: "+3 more",
//         locations: ["Pakistan,Karachi", "Pakistan,Multan","Pakistan,Multan"],
//       },
//     chef: {
//       chefPicture: Chef3,
//       chefName: "Aloo Cart",
//     },
//   },
  
// ];



// export const DealsOfTheDay :  Deal[] = [
//   {
//     bannerImage: Dish4,
//     discount: "Flat 15% Off",
//     dishName: "Loaded Fries At Aloo Cart",
//     locations: ["Pakistan,Lahore", "Pakistan,Lahore"],
//     moreLocations: 
//       {
//         count: "2",
//         locations: ["Pakistan,Karachi", "Pakistan,Multan"],
//       },
//     chef: {
//       chefPicture: Chef1,
//       chefName: "Aloo Cart",
//     },
//   },
//   {
//     bannerImage: Dish5,
//     discount: "Flat 15% Off",
//     dishName: "Loaded Fries At Aloo Cart",
//     locations: ["Pakistan,Lahore", "Pakistan,Lahore"],
//     moreLocations: 
//       {
//         count: "5",
//         locations: ["Pakistan,Karachi", "Pakistan,Multan","Pakistan,Jhang","Pakistan,Kasur","Pakistan,Multan"],
//       },
//     chef: {
//       chefPicture: Chef2,
//       chefName: "Aloo Cart",
//     },
//   },
//   {
//     bannerImage: Dish6,
//     discount: "Flat 15% Off",
//     dishName: "Loaded Fries At Aloo Cart",
//     locations: ["Pakistan,Lahore", "Pakistan,Lahore"],
//     moreLocations: 
//       {
//         count: "3",
//         locations: ["Pakistan,Karachi", "Pakistan,Multan","Pakistan,Multan"],
//       },
    
//     chef: {
//       chefPicture: Chef3,
//       chefName: "Aloo Cart",
//     },
//   },
  
// ];
export const OurCompany=["About Us", "Privacy & Policy", "Contact Us", "FAQs", "Terms & Conditions"];


export const PaymentPartners=[
  {
    id:1,
    icon:Visa,
    alt:'Visa'
  },
  { 
    id:2,
    icon:ApplePay,
    alt:'ApplePay'
  },
  {
    id:3,
    icon:SumsungPay,
    alt:'SumsungPay'
  },
  {
    id:4,
    icon:MasterCard,
    alt:'MasterCard'
  },
]
export const SocialApps=[
  {
    id:1,
    icon:FaceBook,
    alt:'FaceBook'
  },
  {
    id:2,
    icon:Twitter,
    alt:'Twitter'
  },
  {
    id:3,
    icon:Instagram,
    alt:'Instagram'
  },
 
]


