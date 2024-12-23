import React from 'react';

interface HeartProps {
  isClicked: boolean | undefined; // This prop will control the heart's color
}

const Heart = ({ isClicked }: HeartProps) => {
  return (
    <svg 
      width="20" 
      height="21" 
      viewBox="0 0 20 21" 
      xmlns="http://www.w3.org/2000/svg"
      className={isClicked ? 'fill-red-500 stroke-red-700' : 'fill-none stroke-gray-500'} // Apply conditional fill and stroke classes
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M2.39192 10.0097C1.49775 7.22007 2.54275 4.03153 5.47359 3.08804C7.01525 2.5909 8.71692 2.88402 9.99859 3.84749C11.2111 2.91067 12.9753 2.59423 14.5153 3.08804C17.4461 4.03153 18.4978 7.22007 17.6044 10.0097C16.2128 14.4316 9.99859 17.8374 9.99859 17.8374C9.99859 17.8374 3.83025 14.4832 2.39192 10.0097Z" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M13.332 5.93164C14.2237 6.21997 14.8537 7.01581 14.9295 7.94997" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Heart;
