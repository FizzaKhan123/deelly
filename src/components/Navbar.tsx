import React, { useState } from 'react';
import Logo from "../assets/icons/Deelly-Logo.svg";
import SMLogo from "../assets/icons/Logo.svg";
import Filter from "../assets/icons/Filter.svg";
import { ServicesLinks } from "../constants/constants.ts";
import Cart from "../assets/icons/Cart.svg";
import Profile from "../assets/icons/Profile.svg";
import StepIndicator from './StepIndicator.tsx';
import SearchBar from './SearchBar.tsx';
import ProfileDropDown from './ProfileDropDown.tsx';
import CountrySelector from './CountrySelector.tsx';
import Responsive from "../assets/icons/Responsive.svg";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='flex-col'>
      <div className='px-5 md:px-16 flex justify-between items-center h-20 border-b border-b-softPeach'>
        <div className='flex gap-x-4 items-center'>
          <img src={Logo} alt='logo' className='hidden lg:inline-block' />
          <div className='cursor-pointer flex lg:hidden items-center gap-6'>
            <img src={Responsive} alt="responsive" className='w-8'  onClick={toggleModal} />
            <img src={Logo} alt='logo' /> 
          </div>
          <div className='hidden lg:flex'>
            <CountrySelector />
          </div>
        </div>

        <div className='w-[50%] lg:w-[50%] 2xl:w-4/12 justify-between hidden lg:flex'>
          <div className='flex gap-x-3'>
            <SearchBar />
            <div className='bg-custom-green-blue-gradient h-11 w-11 rounded-custom-10 flex items-center justify-center'>
              <img src={Filter} alt='filter' />
            </div>
          </div>
          <div className='flex gap-4 items-center justify-center'>
            <ProfileDropDown />
          </div>
        </div>

        <div className='lg:hidden flex'>
          <StepIndicator number='03' />
        </div>
      </div>

      <div className='h-[1px] hidden lg:block'></div>
      <div className='px-16 h-[60px] items-center gap-x-6 w-[80%] justify-between hidden lg:flex'>
      {ServicesLinks.map((item)=>(
         <div key={item.id} className='flex items-center gap-x-2'>
          <img src={item.icon} alt={item.alt}/>
          <p className='text-lg-normal-relax'>{item.text}</p>
         </div>
      ))}
       </div>
    
    
    
      {isModalOpen && (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-20'>
          <div className='bg-white h-full w-3/4 sm:w-2/3 md:w-1/2 p-4'>
            {/* Close button */}
            <div className='flex justify-end'>
              <button onClick={toggleModal} className='text-xl'>X</button>
            </div>

            <div className='flex flex-col gap-y-4'>
              
              <div className='flex gap-4 flex-col'>
                {ServicesLinks.map((item) => (
                  <div key={item.id} className='flex items-center gap-x-2'>
                    <img src={item.icon} alt={item.alt} />
                    <p className='text-lg-normal-relax'>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
