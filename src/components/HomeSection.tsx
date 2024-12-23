import React from 'react'
import Hotel from "../assets/icons/Hotel.svg";
import UnderLineWord from './UnderLineWord.tsx';
import Button from './Buttons/CutomizeButton.tsx';
import VideoThumbnail from "../assets/images/Video-Thumbnail.png"
import { inherits } from 'util';
const HomeSection = () => {
  return (
    <div className='h-[600px] bg-mintCream flex flex-col lg:flex-row'>
       <div className='relative flex w-full  lg:w-[58.3%] px-4 sm:px-9 md:px-0 md:pl-20  xl:pl-[120px] pt-20 lg:pt-20 xl:pt-28 pb-20 lg:pb-0'>
            <div className='flex flex-col gap-6  '>
                <div className='flex flex-col gap-6'>
                    <p className='heading1'>
                    Get The Best <UnderLineWord text={"Deals"} styling={'heading1'}/> Near By You!
                    </p>
                    <p className='text-2xl-normal w-2/3'>
                    Explore nearby deals on map and buy deals to enjoy quality food with your family
                    </p>
                </div> 
             <Button text='Explore' height={56} width={169} type='black'/>   
            </div> 
            <div className='absolute right-0 bottom-0 lg:bottom-4'>
                <img src={Hotel} alt='hotel'/>
            </div>
        </div>
       <div className='hidden lg:flex h-full lg:w-[41.66%] '>
       <img src={VideoThumbnail} alt='hotel' height="inherit"/>
       </div>
    </div>
  )
}

export default HomeSection