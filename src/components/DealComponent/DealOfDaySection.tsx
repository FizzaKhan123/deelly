import React from 'react';
import DealCard from './DealCard.tsx';
import {DealsOfTheDay} from "../../constants/constants.ts";
import DealHeader from './DealHeader.tsx';



const DealOfDaySection = () => {
  return (
    <div className='p-4 sm:p-8 md:p-10 xl:p-32 flex  flex-col gap-y-10 bg-eggSour'>
      <DealHeader headerText={'Deals of'} headerUnderlineWord={'the day'} text={'Find deals of the day here & save money with offers and avail wide discounts on everything.'} />
       <div className='flex gap-x-4'>
        {
          DealsOfTheDay.map((item)=>(
            <div className='flex-1 '>
            <DealCard options={item} />
            </div>
          ))
        }
       </div>
    </div>
  )
}

export default DealOfDaySection;