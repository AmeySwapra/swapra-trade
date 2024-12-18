import React from 'react'
import Topbar from '../components/Common/Topbar'
import Navbar from '../components/Common/Navbar'
import PageBanner from '../components/Common/PageBanner'
import BreadCrumb from '../components/Common/BreadCrumb'
import Footer from '../components/Common/Footer'

function ContactUsPage() {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <PageBanner heading={'CONTACT US'} />
      <BreadCrumb currentPage={'Contact'}/>
      <Footer/>
    </>
  )
}

export default ContactUsPage