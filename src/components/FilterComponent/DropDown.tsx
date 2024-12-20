import React, { useState } from 'react';
import DropdownIcon from '../../assets/icons/DropdownIcon.tsx'; // Your custom dropdown icon

interface DropDownProps {
  options: { label: string; value: string }[];
  initValue: string;
}

const Dropdown = ({ options, initValue }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initValue);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    setHighlightedIndex(-1); // Reset highlighted index after selection
  };

  // Handle key navigation (up/down)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prev) => (prev + 1) % options.length); // Loop back to first option
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((prev) => (prev - 1 + options.length) % options.length); // Loop back to last option
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      handleSelect(options[highlightedIndex].label);
    }
  };

  return (
    <div className="relative inline-block w-full">
      {/* Dropdown Trigger */}
      <button
        className="flex justify-between items-center w-full px-4 py-2 bg-snowDrift border border-gray-300 rounded-lg shadow-sm focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
      >
        <span className="text-gray-700">{selectedOption}</span>
        <DropdownIcon
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute left-0 w-full mt-2 bg-white border border-mercury rounded-custom-10 shadow-lg z-10 max-h-60 overflow-y-auto"
          role="listbox"
        >
          {options.map((option, index) => (
            <button
              key={index}
              className={`w-full px-4 py-2 text-left text-gray-700 focus:outline-none ${
                index === highlightedIndex
                  ? 'bg-snowDrift' // Highlight when focused
                  : '' // Default background
              } ${selectedOption === option.label ? 'bg-mercury' : ''}`} 
              onClick={() => handleSelect(option.label)}
              onMouseEnter={() => setHighlightedIndex(index)} 
              onMouseLeave={() => setHighlightedIndex(-1)} 
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
