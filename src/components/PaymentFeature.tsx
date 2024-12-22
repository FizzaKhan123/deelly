import React from 'react'
import {PaymentFeatureOption} from "../constants/constants.ts"
const PaymentFeature = () => {
  return (
    <div className='bg-snowDrift'>
    <div className='flex justify-between w-5/6 mx-auto py-6 bg-snowDrift'>
       {
        PaymentFeatureOption.map((item,index)=>(
        <div className='flex justify-between p-y-2 px-6 flex-1 items-center '>
            <div  className='flex gap-x-4 w-[88%] items-center '>
              <img src={item.icon} alt={item.alt} className='h-[50px] w-[50px]'/>
              <div className='flex flex-col gap-y-1'>
                <p className='text-3xl'>{item.title}</p>
                <p className='text-lg-normal-relax'>{item.description}</p>
              </div>
            </div>
           {index !== 2 && <div className='w-[1px] h-[103px] bg-surf'></div>}
        </div>
        ))
       } 
    </div>
    </div>
  )
}

export default PaymentFeature