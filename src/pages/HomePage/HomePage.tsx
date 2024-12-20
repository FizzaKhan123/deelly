import React from 'react'
import Navbar from '../../components/Navbar.tsx';
import HomeSection from '../../components/HomeSection.tsx';
import FilterSection from '../../components/FilterComponent/FilterSection.tsx';
const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HomeSection/>
    <FilterSection/>
    </>
  )
}

export default HomePage