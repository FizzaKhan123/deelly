import React from 'react';
import Dropdown from './DropDown.tsx';
import {diningOptions,categoryOptions ,subCategoryOptions,cityOptions,destinationOptions} from "../../constants/constants.ts";
import SearchBar from '../SearchBar.tsx';
import Button from '../Buttons/CutomizeButton.tsx';

const FilterSection = () => {
  return (
    <>
    <div className='flex flex-col  gap-y-3 w-5/6 mx-auto h-140 border rounded-custom-10 shadow-custom2 p-10'>
      <div className='flex  flex-row gap-x-3'>
        <div className='flex-1'>
        <Dropdown options={diningOptions} initValue='Dinning' />
        </div>
        <div className='flex-1'>
        <Dropdown options={categoryOptions} initValue='Select All' />
        </div>
        <div className='flex-1'>
        <Dropdown options={subCategoryOptions} initValue='Select Sub Category' />
        </div>
      </div>
      <div className='flex flex-row gap-x-3'>
            <div className='flex-1'>
            <Dropdown options={cityOptions} initValue='Enter City' />
            </div>
            <div className='flex-1'>
            <Dropdown options={destinationOptions} initValue='Destination' />
            </div>
            <div className='flex-1'>
            <SearchBar/>
            </div>
            <Button height={40} width={120} bgColor={"sherwoodGreen"} type='black' text='Search'/>
        </div>
    </div>
    </>
  )
}

export default FilterSection