import React from "react";
import Cart from "../assets/icons/Cart.svg";

interface StepIndicatorProps {
  number: string;
  isActive?: boolean;
  
}

export default function StepIndicator({
  number,
 
}: StepIndicatorProps) {
  return (
    <div className="relative inline-flex items-center">
      <div className="w-10 h-10 rounded-full bg-greenWhite flex items-center justify-center ">
        <img src={Cart} alt='Cart'/>
      </div>
      <div className="border-[3px] border-white absolute left-5 -top-4 w-8 h-8 rounded-full bg-golden flex items-center justify-center text-base-sbold">
        {number}
      </div>
    </div>
  );
}
