import React from 'react';

interface BlackishButtonProps {
  height: number; 
  width?: number | string;  
  text: string;    
  type:string;
}

const Button: React.FC<BlackishButtonProps> = ({
  height = 50,   
  width,   
  text,
  type          
}) => {
  return (
    <button 
    className={`${type === "black" ? "text-xl-bold text-white bg-sherwoodGreen" : "text-lg-sbold bg-seaGreen"}`}
      style={{
        height: `${height}px`,
        width: width ? `${width}px` : "inherit",
        color: '#fff', 
        border: 'none',
        borderRadius: '100px', // Rounded corners
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
    >
      {text}
    </button>
  );
};

export default Button;
