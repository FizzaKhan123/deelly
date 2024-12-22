import React from 'react'
import Button from '../Buttons/CutomizeButton.tsx';
import UnderlineWord from "../UnderLineWord.tsx"

interface DealHeaderProps{
   headerText:string;
   headerUnderlineWord:string;
   text:string;

}

const DealHeader = ({ headerText,headerUnderlineWord,text}:DealHeaderProps) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-y-2 flex-col'>
      <p className='heading2'>
      <p className='heading2'>
        { headerText} <UnderlineWord text={headerUnderlineWord} styling='heading2'/>
       </p>

      </p>
      <p className='text-2xl-normal'>{text}</p>
      </div>
      <Button height={56} width={169} text={'View on Map'} type={'black'}/>
    </div>

  )
}

export default DealHeader