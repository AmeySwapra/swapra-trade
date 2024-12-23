import React from 'react'
import Topbar from '../components/Common/Topbar'
import Navbar from '../components/Common/Navbar'
import PageBanner from '../components/Common/PageBanner'
import BreadCrumb from '../components/Common/BreadCrumb'
import Train2Trade from '../components/Train2Trade'
import Footer from '../components/Common/Footer'
import ScrollToTop from '../components/Common/ScrollToTop'

function AboutUsPage() {
  return (
    <>
    <ScrollToTop/>
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