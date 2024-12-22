import React from 'react';
import {ServicesOptions} from "../constants/constants.ts"

const Services = () => {
  return (
    <div className='bg-snowDrift hidden lg:flex'>
    <div className='pb-8 flex justify-between w-5/6 mx-auto border-b border-b-surf '>
     {
        ServicesOptions.map((item)=>(
          <div >
            <div className='flex justify-center items-center h-[100px] w-[100px] rounded-full' 
             style={{ backgroundColor: item.backgroundColor }}
            >
              <img src={item.icon} alt={item.alt}/>
            </div>
            <p className='text-xl-normal'>{item.text}</p>  
        </div>
        ))
     }
    </div>
    </div>
  )
}

export default Services