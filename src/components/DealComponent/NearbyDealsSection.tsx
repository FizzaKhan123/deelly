import React from 'react';
import DealCard from './DealCard.tsx';
import DealHeader from './DealHeader.tsx';
// import { NearByDeals } from "../../constants/constants.ts";
import useFetchDeals from '../../hooks/useFetchDeals.js';

const NearbyDealsSection = () => {
  const { deals, loading, error } = useFetchDeals();
  if (loading) return <p>Loading...</p>;
  return (
    <div className='p-4 sm:p-8 md:p-10 xl:p-32 flex flex-col gap-y-10'>
      <DealHeader headerText={'Nearby'} headerUnderlineWord={'Deals'} text={'Explore nearby deals on map and buy deals to enjoy quality food with your family'} />
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          deals.map((item, index) => (
            <div key={index} className='flex-1'>
              <DealCard options={item} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default NearbyDealsSection;
