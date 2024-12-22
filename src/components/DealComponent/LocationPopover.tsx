"use client"

import React, { useState, useRef, useEffect } from 'react';
import Location from "../../assets/icons/Location.svg";
import { LocationDetails } from "../../types/type.ts";

interface LocationPopoverProps {
  locationsData: LocationDetails;
}

export default function LocationPopover({ locationsData }: LocationPopoverProps) {
  // Don't call hooks conditionally, ensure that useState and useEffect are always called.
  console.log(locationsData);
  const [isOpen, setIsOpen] = useState(false);
  const [isPermanent, setIsPermanent] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!isPermanent) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isPermanent) setIsOpen(false);
  };

  const handleClick = () => {
    setIsPermanent(!isPermanent);
    setIsOpen(!isPermanent);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsPermanent(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  
  if (!locationsData) {
    return <div>Loading...</div>; // or any fallback UI
  }
  
  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        className="transition-colors cursor-pointer text-seaGreen"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
     <p className='underline '> {locationsData.count} </p>
      </div>
      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute border-seaGreen  bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-4 bg-white border  rounded-md shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p className="mb-2 text-gray-800 text-3xl">Locations</p>
          <div>
            {locationsData.locations.map((item, index) => (
              <div key={index} className="flex gap-3 hover:bg-mintCream">
                <img src={Location} alt="" />
                <p className='text-2xl-normal'>{item}</p>
              </div>
            ))}
          </div>
          <div className="absolute  -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white shadow-locationPopover"></div>
        </div>
      )}
    </div>
  );
}
