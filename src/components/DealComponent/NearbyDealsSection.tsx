import React from 'react';
import DealCard from './DealCard.tsx';
// import {DealsOfTheDay} from "../../constants/constants.ts";
import DealHeader from './DealHeader.tsx';
import {NearByDeals} from "../../constants/constants.ts";
import { Deal } from '../../types/type.ts';


const NearbyDealsSection = () => {
  return (
    <div className='p-4 sm:p-8 md:p-10 xl:p-32 flex  flex-col gap-y-10'>
      <DealHeader headerText={'Nearby'} headerUnderlineWord={'Deals'} text={'Explore nearby deals on map and buy deals to enjoy quality food with your family'} />
       <div className='flex gap-x-4'>
        {
          NearByDeals.map((item)=>(
            <div className='flex-1 '>
            <DealCard options={item} />
            </div>
          ))
        }
       </div>
    </div>
  )
}

export default NearbyDealsSection;