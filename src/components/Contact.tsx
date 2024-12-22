import React from 'react';
import Button from './Buttons/CutomizeButton.tsx';
import ContactBg from "../assets/icons/ContactBG.svg";

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row px-6 py-7 items-center justify-center gap-6'
    style={{ backgroundImage: `url(${ContactBg})` }} 
    >
     <p className='text-4xl-tight'>For inquiries and more information</p>
     <Button height={56} width={165} text={'Get in Touch'} type={'black'}/>
    </div>
  )
}

export default Contact