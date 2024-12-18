import React from 'react'
import Topbar from '../components/Common/Topbar'
import Navbar from '../components/Common/Navbar'
import PageBanner from '../components/Common/PageBanner'
import BreadCrumb from '../components/Common/BreadCrumb'
import Train2Trade from '../components/Train2Trade'
import Footer from '../components/Common/Footer'

function AboutUsPage() {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <PageBanner heading="ABOUT US" />
      <BreadCrumb currentPage={'About us'} />
      <Train2Trade/>
      <Footer/>
    </>
  )
}

export default AboutUsPage