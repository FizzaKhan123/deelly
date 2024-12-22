import React from 'react'
import Navbar from '../../components/Navbar.tsx';
import HomeSection from '../../components/HomeSection.tsx';
import FilterSection from '../../components/FilterComponent/FilterSection.tsx';
import Services from '../../components/Services.tsx';
import PaymentFeature from '../../components/PaymentFeature.tsx';
import { NearByDeals } from '../../constants/constants.ts';
import NearbyDealsSection from '../../components/DealComponent/NearbyDealsSection.tsx';
import DealOfDaySection from '../../components/DealComponent/DealOfDaySection.tsx';
import DownloadSection from '../../components/DownloadComponent/DownloadSection.tsx';
import Contact from '../../components/Contact.tsx';
import Footer from '../../components/Footer.tsx';


const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HomeSection/>
    <FilterSection/>
    <Services/>
    <PaymentFeature/>
    <NearbyDealsSection/>
    <DealOfDaySection/>
    <DownloadSection/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default HomePage