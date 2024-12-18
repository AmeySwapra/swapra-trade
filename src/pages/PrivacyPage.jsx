import React from 'react'
import Topbar from '../components/Common/Topbar'
import Navbar from '../components/Common/Navbar'
import PageBanner from '../components/Common/PageBanner'
import BreadCrumb from '../components/Common/BreadCrumb'
import Footer from '../components/Common/Footer'
import PrivacyPolicy from '../components/PrivacyPolicy'

function PrivacyPage() {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <PageBanner heading={"PRIVACY POLICIES"} />
      <BreadCrumb currentPage={'Privacy'} />
      <PrivacyPolicy/>
      <Footer/>
    </>
  )
}

export default PrivacyPage