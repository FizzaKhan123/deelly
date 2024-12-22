import React from 'react';
import MobilePhone from "../../assets/images/MobilePhone.png";
import AppStore from "../../assets/images/AppStore.png";
import GooglePlay from "../../assets/images/GooglePlay.png";
import UnderLineWord from '../UnderLineWord.tsx';
import Counter from './Counter.tsx';
const DownloadSection = () => {
  return (
    <div>
    <div className='bg-white  px-4 sm:px-8 md:px-10 xl:px-32 py-4  md:py-10 xl:py-30 '>
        <div className='flex bg-mintCream border rounded-custom-20 border-surf '>
           <div className='flex p-6 justify-center items-center'>
              <div className='flex-1'>
                <div className='w-[86%] m-auto'>
                <img className='w-full h-auto' src={MobilePhone} alt='phone'  />
                </div>
              </div>
              <div className='flex flex-col flex-1 gap-y-12'>
                <div className='flex gap-y-2 flex-col'>
                <p className='heading2'>
                  Download Our App To Get Amazing <UnderLineWord styling='heading2' text={'Deals'}  />
                </p>
                <p className='text-lg-normal'>
                Get new deals every day. Top deals have the best offers and share
                them with you. To avail of offers, find our app in the play store
                </p>
                </div>
                <div className='flex flex-col sm:flex-row gap-5'>
                  <img src={GooglePlay} alt="GooglePlay" width={166} height={55}/>
                  <img src={AppStore} alt="App store" width={166} height={55}/>
                </div>

              </div>
              
           </div>
        </div>
     
        <div>
          
        </div>
    </div>
    <div className='h-[1px] bg-lightGrey'></div>
    <div className="w-[87%] grid grid-cols-2 gap-4 py-8 md:grid-cols-4 m-auto">
      <div className=" flex items-center flex-col gap-3">
         <Counter count={75000}/>
        <p className='text-lg-normal'>Deals</p>
      </div>
      <div className=" flex items-center flex-col gap-3 ">
      <Counter count={60000}/>
      <p className='text-lg-normal'>Retailer</p>
     
      </div>
      <div className=" flex items-center flex-col gap-3">
      <p className='text-4xl-tight'>2 Million</p>
        <p className='text-lg-normal'>Active Users</p>
      </div>
      <div className=" rounded-lg flex items-center flex-col gap-3">
      <p className='text-4xl-tight'>1.3 Million</p>
      <p className='text-lg-normal'>App Downloads</p>
      </div>
    </div>
    </div>
  )
}

export default DownloadSection