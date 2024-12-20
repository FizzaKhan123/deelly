import React, { useState } from 'react';
import DropdownIcon from '../../assets/icons/DropdownIcon.tsx'; // Your custom dropdown icon

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an option');

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-64">
      {/* Dropdown Trigger */}
      <button
        className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700">{selectedOption}</span>
        {/* Rotating the icon based on the dropdown state */}
        <DropdownIcon className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <button
              key={index}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
