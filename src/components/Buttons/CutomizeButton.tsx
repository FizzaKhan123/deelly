import React from 'react';

interface BlackishButtonProps {
  height: number; 
  width: number;  
  bgColor: string; 
  text: string;    
  type:string;
}

const Button: React.FC<BlackishButtonProps> = ({
  height = 50,   
  width = 150,  
  bgColor = '#000', 
  text,
  type          
}) => {
  return (
    <button 
    className={`${type === "black" ? "text-xl-bold text-white" : "text-lg-sbold"}`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor: bgColor,
        color: '#fff', // Text color (white for contrast)
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
