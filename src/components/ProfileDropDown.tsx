import React, { useState } from 'react';
import ProfileIcon from "../assets/icons/Profile.svg";
import { Profile } from "../constants/constants.ts";

const ProfileDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState('Merchant Login');

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleSelectProfile = (profileText: string) => {
    setSelectedProfile(profileText);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center rounded-full h-10 w-10 bg-greenWhite" onClick={toggleDropdown}>
        <img src={ProfileIcon} alt="profile" />
      </div>

      {isOpen && (
  <div className='bg-white absolute right-2 top-14 max-w-[220px] w-[220px] max-h-[125px] border border-lavendar rounded-custom-10 py-5'>
    {/* Entire container with white background including padding */}
    {Profile.map((item) => (
      <div
        key={item.text}
        className={`flex items-center px-5 h-10 shadow-custom gap-x-4 cursor-pointer ${
          selectedProfile === item.text ? 'bg-aquaSpring' : 'bg-white' // Selected profile gets a different background
        }`}
        onClick={() => handleSelectProfile(item.text)}
      >
        <img src={item.icon} alt={item.text} />
        <p className="text-lg-normal-relax">{item.text}</p>
      </div>
    ))}
  </div>
)}


    </div>
  );
};

export default ProfileDropDown;
