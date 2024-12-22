import React from "react";
import UnderLine from "../assets/icons/UnderLine.svg";


interface UnderLineWordProps {
  text: string;
  styling: string; 
}

const UnderLineWord = ({ text, styling }: UnderLineWordProps) => {
  return (
    <div className="relative inline-block">
      <span className={`inline-block ${styling} text-seaGreen`}>{text}</span>
      <img
        src={UnderLine}
        alt="underline"
        className="absolute left-0 bottom-0 w-full"
      />
    </div>
  );
};

export default UnderLineWord;
