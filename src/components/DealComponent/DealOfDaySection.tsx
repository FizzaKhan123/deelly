import React from 'react';
import DealCard from './DealCard.tsx';
// import { DealsOfTheDay } from "../../constants/constants.ts";
import DealHeader from './DealHeader.tsx';
import useFetchDeals from '../../hooks/useFetchDeals.js';

const DealOfDaySection = () => { 
  const { deals, loading, error } = useFetchDeals();
 
 
  return (
    <div className='p-4 sm:p-8 md:p-10 xl:p-32 flex flex-col gap-y-10 bg-eggSour'>
      <DealHeader headerText={'Deals of'} headerUnderlineWord={'the day'} text={'Find deals of the day here & save money with offers and avail wide discounts on everything.'} />
      {loading  ?  <p>Loading</p> : error ? <p>Error While Fetching</p> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          deals.map((item, index) => (
            <div key={index} className='flex-1'>
              <DealCard options={item} />
            </div>
          ))
        }
      </div>}
    </div>
  );
}

export default DealOfDaySection;
