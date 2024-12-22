import React from 'react'
import { PaymentFeatureOption } from "../constants/constants.ts"

const PaymentFeature = () => {
  return (
    <div className='bg-snowDrift'>
      <div className='w-5/6 mx-auto py-6 bg-snowDrift'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-6'>
          {
            PaymentFeatureOption.map((item, index) => (
              <div key={item.id} className='flex justify-between py-6 px-6 items-center border-b-[0.5px] border-surf  lg:border-0'>
                <div className='flex gap-x-4 w-full items-center  '>
                  <img src={item.icon} alt={item.alt} className='h-[50px] w-[50px]' />
                  <div className='flex flex-col gap-y-1'>
                    <p className='text-3xl'>{item.title}</p>
                    <p className='text-lg-normal-relax'>{item.description}</p>
                  </div>
                </div>
                {index !== 2 && <div className='w-[1px] h-[103px] hidden lg:flex bg-surf'></div>}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PaymentFeature
