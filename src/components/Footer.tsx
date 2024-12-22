import React from 'react';
import  Logo from "../assets/icons/Logo.svg";
import { OurCompany,PaymentPartners,SocialApps } from '../constants/constants.ts';

const Footer = () => {
  return (
    <div className='flex flex-col'>
    <div className='w-[96%] md:w-[87%] m-auto py-8 md:py-20 lg:py-3 '>
        <div className="grid grid-cols-1 gap-3 md:gap-0 p-4 md:grid-cols-2 lg:grid-cols-12">
        <div className="md:col-span-1 lg:col-span-1">
           <img src={Logo} alt='Logo'/>
        </div>
        <div className="flex flex-col gap-3 md:col-span-1 lg:col-span-4">
          <p className='text-2xl-sbold-tight'>Top Deals</p> 
          <p className='text-lg-normal w-[80%]'>Top Deals is an e-commerce site that connects businesses with customers by providing discounted offers, service coupons, or special offers. Top Deals brings a whole ecommerce platform for business owners and customers to save a lot of money.</p>
        </div>
        <div className="flex flex-col md:col-span-1 lg:col-span-3 gap-3">
            <p className='text-2xl-sbold-tight'>Our Company</p> 
            <div className='flex flex-col gap-x-4'>
                {OurCompany.map((item, index) => (
                    <p key={index} className='text-lg-normal'>
                    {item}
                    </p>
                ))}
            </div>
        </div>
        <div className="flex flex-col md:col-span-1 lg:col-span-4 gap-3">
            <p className='text-2xl-sbold-tight'>Our Payment Partners</p>
            <div className='flex gap-2'>
            {
              PaymentPartners.map((item)=>(
               <div className='flex p-2 h-[44px] w-[61px] border-[0.5px] rounded-custom-10  border-cyanBlue'>
                <img src={item.icon} alt={item.icon} />
              </div>
              )) }
            </div>   
        </div>
        </div>
    </div>
    <div className='bg-softPeach h-[1px]' ></div>
    <div className='w-[96%] md:w-[87%] m-auto flex flex-col md:flex-row justify-between p-4 md:p-6'>
        <p className='text-2xl-normal'>© deelly 2023 . All rights reserved.</p>
        <div className='gap-3 flex '>
            {
             SocialApps.map((item)=>(
               <img src={item.icon} alt={item.alt} height={32} width={32}/>
             ))
            }
        </div>
    </div>
    </div>
  )
}

export default Footer