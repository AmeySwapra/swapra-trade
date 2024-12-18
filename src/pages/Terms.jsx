import React from 'react'
import Topbar from '../components/Common/Topbar'
import Navbar from '../components/Common/Navbar'
import PageBanner from '../components/Common/PageBanner'
import BreadCrumb from '../components/Common/BreadCrumb'
import Footer from '../components/Common/Footer'
import TnC from '../components/TnC'

function Terms() {
  return (
    <>
     <Topbar/>
     <Navbar/>
     <PageBanner heading={"TERMS & CONDITIONS"} />
     <BreadCrumb currentPage={"Terms & Conditions"}/>
     <TnC/>
     <Footer/>
    </>
  )
}

export default Terms