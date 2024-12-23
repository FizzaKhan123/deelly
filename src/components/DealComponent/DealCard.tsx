import React, { useEffect, useState } from 'react';
import Dish1 from "../../assets/images/Dish1.png";
import Heart from '../../assets/icons/Heart.tsx';
import Star from "../../assets/icons/Stars.svg";
import DiccountIcon from "../../assets/icons/DiscountIcon.svg";
import Location from "../../assets/icons/Location.svg";
import Button from '../Buttons/CutomizeButton.tsx';
import LocationPopover from './LocationPopover.tsx';
import { Deal } from '../../types/type.ts';
import {addFavourite} from "../../backend/api.js";

const DealCard = ({ options }: { options: Deal | undefined }) => {
  const [isHeartClicked, setIsHeartClicked] = useState<boolean | undefined>();
  useEffect(()=>{
      setIsHeartClicked(options?.isFavourite);
  },[])
  if (!options) {
    return <div>Loading...</div>;
  }
  // else{
  //  const {isFavourite}=options;
  //   setIsHeartClicked(isFavourite)
  // }

  const { _id,bannerImage, discount, dishName, locations, moreLocations, chef,isFavourite } = options;
 

const markAsFavourite = async (dealId:string ,like:boolean | undefined ) => {
  try {
    const response=await addFavourite(dealId, !like);
    if(response.status === 200){
      setIsHeartClicked(!isHeartClicked);
    }
    console.log(response);
  } catch (error) {
    console.error('Error marking deal as favourite:', error);
  }
};


  return (
    <div className="flex-1 rounded-custom-20 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2"    >
      <div className="relative">
        <img
          className="w-full max-h-[200px] rounded-t-custom-20"
          src={bannerImage || "/path/to/default-image.png"}
          alt={dishName}
        />
        <div
          className="absolute top-6 right-11 h-10 w-10 rounded-full bg-white flex justify-center items-center shadow-md cursor-pointer"
          onClick={(event) => {
            event.preventDefault(); 
            markAsFavourite(_id,isHeartClicked); 
          }}
        >
          <Heart isClicked={isHeartClicked} /> 
        </div>
      </div>
      <div>
        <div className="flex flex-col bg-white rounded-b-custom-20 shadow-boxShadowFeatureCard">
          <div className="flex p-4 gap-4 flex-col">
            <div className="h-10 p-4 flex justify-between">
              <div className="h-[18px] w-[108px]">
                <img src={Star} alt="star" width={108} height={18} />
              </div>
              <div className="flex gap-x-3 items-center">
                <img src={DiccountIcon} alt="Discount Icon" height={18} width={18} />
                <p className="text-base-normal">{discount}</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col gap-3">
                <p className="text-4xl-tight">{dishName}</p>
                <div className='flex flex-row gap-6 items-end'>
                  <div className="flex flex-col">
                    {locations?.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <img src={Location} alt="Location" />
                        <p className="text-lg-normal">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <LocationPopover locationsData={moreLocations} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-lightPeach"></div>
          <div className="flex justify-between p-8">
            <div className="flex gap-5 items-center">
              <img className='rounded-full min-h-[36px] min-w-[36px]' src={chef?.chefPicture || "/path/to/default-chef.png"} alt={chef?.chefName}  height={36} width={36} />
              <p className="text-base-sbold-normal">{chef?.chefName || "Unknown Chef"}</p>
            </div>
            <Button height={34} width={120} text={"Get Offer"} type={"green"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
