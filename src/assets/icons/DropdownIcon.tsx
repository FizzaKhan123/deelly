import React from 'react';

const DropdownIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Apply the class here
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.30725 0.510886C1.49925 0.510886 1.69225 0.583887 1.83825 0.731887L4.77925 3.68489L7.71825 0.731886C8.01025 0.437886 8.48525 0.437886 8.77925 0.729886C9.07225 1.02189 9.07425 1.49589 8.78125 1.78989L5.31025 5.27689C5.02925 5.55989 4.52925 5.55989 4.24725 5.27689L0.776247 1.78989C0.484247 1.49589 0.485247 1.02189 0.778247 0.729886C0.924247 0.583886 1.11625 0.510886 1.30725 0.510886Z"
        fill="#013D29"
      />
    </svg>
  );
};

export default DropdownIcon;
