export interface ProfileItem {
    icon: string;
    text: string;
    alt:string;
  }
  
export type ProfileArray = ProfileItem[];

export interface ServicesItem {
    icon: string;
    text: string;
    alt:string;
    id:number;
  }

  export interface ServicesLinkItem {
    icon: string;
    text: string;
    alt:string;
    id:number;
    backgroundColor?:any;
  }  
  
export type Services = ServicesItem[];

type SVGIcon = React.FC<React.SVGProps<SVGSVGElement>>
export type PaymentFeature = {
  title: string
  description: string
  icon: string
  alt: string  
}

export interface LocationDetails {
  count: string;
  locations: string[];
}

interface ChefDetails {
  chefPicture: string;
  chefName: string;
}

export interface Deal {
  bannerImage: string;
  discount: string;
  dishName: string;
  locations: string[];
  moreLocations: LocationDetails;
  chef: ChefDetails;
}