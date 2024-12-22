import React from 'react';
import Dropdown from './DropDown.tsx';
import {diningOptions,categoryOptions ,subCategoryOptions,cityOptions,destinationOptions} from "../../constants/constants.ts";
import SearchBar from '../SearchBar.tsx';
import Button from '../Buttons/CutomizeButton.tsx';
import { inherits } from 'util';

const FilterSection = () => {
  return (
    <div className='bg-snowDrift'>
    <div className='relative bg-white z-10 flex flex-col  gap-y-3 w-5/6 mx-auto h-140 border rounded-custom-10 shadow-custom2 p-10 -translate-y-1/2 '>
      <div className='flex flex-col lg:flex-row gap-3 '>
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
      <div className='flex  gap-3 flex-col lg:flex-row '>
            <div className='flex-1'>
            <Dropdown options={cityOptions} initValue='Enter City' />
            </div>
            <div className='flex-1'>
            <Dropdown options={destinationOptions} initValue='Destination' />
            </div>
            <div className='flex-1'>
            <SearchBar/>
            </div>
            <div className='w-full sm:w-[120px]'>
            <Button  height={40}   type='black' text='Search'/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FilterSection