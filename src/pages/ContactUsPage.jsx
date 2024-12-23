import React from 'react'
import Topbar from '../components/Common/Topbar'
import Navbar from '../components/Common/Navbar'
import PageBanner from '../components/Common/PageBanner'
import BreadCrumb from '../components/Common/BreadCrumb'
import Footer from '../components/Common/Footer'
import Contact from '../components/Contact'
import Map from '../components/Map'
import ScrollToTop from '../components/Common/ScrollToTop'

function ContactUsPage() {
  return (
    <>
    <ScrollToTop/>
      <Topbar/>
      <Navbar/>
      <PageBanner heading={'CONTACT US'} />
      <BreadCrumb currentPage={'Contact'}/>
      <Contact/>
      <Map/>
      <Footer/>
    </>
  )
}

export default ContactUsPage