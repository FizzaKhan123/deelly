import React from 'react';
import Logo from "../assets/icons/Deelly-Logo.svg";
import Filter from "../assets/icons/Filter.svg";
import {ServicesLinks} from "../constants/constants.ts"
import Cart from "../assets/icons/Cart.svg";
import Profile from "../assets/icons/Profile.svg";
import StepIndicator from './StepIndicator.tsx';
import SearchBar from './SearchBar.tsx';
import ProfileDropDown from './ProfileDropDown.tsx';
const Navbar = () => {
  return (
    <div className='px-8'>
    <div className='flex justify-between items-center h-20  border-b border-b-softPeach '>
       <div className='flex gap-x-4'>
          <img  src={Logo} alt='logo'/>
       </div>
      
       <div className='flex w-2/4 justify-between'>
            <div className='flex gap-x-3'>
              <SearchBar/>
              <div className='bg-custom-green-blue-gradient h-11 w-11 rounded-custom-10 flex items-center justify-center'>
                <img src={Filter} alt='filter'/>
              </div>
            </div>
            <div className='flex gap-4 items-center justify-center'>
             <StepIndicator  number='03'/>
            <ProfileDropDown/>
             
          </div>
       </div>
     
    </div>
    <div className='h-[60px] flex items-center gap-x-6'>
      {ServicesLinks.map((item)=>(
         <div key={item.id} className='flex items-center gap-x-2'>
          <img src={item.icon} alt={item.alt}/>
          <p className='text-lg-normal-relax'>{item.text}</p>
         </div>
      ))}
    </div>
     </div>

  )
}

export default Navbar