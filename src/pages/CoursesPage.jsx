import React from 'react'
import Topbar from '../components/Common/Topbar'
import Navbar from '../components/Common/Navbar'
import PageBanner from '../components/Common/PageBanner'
import BreadCrumb from '../components/Common/BreadCrumb'
import Footer from '../components/Common/Footer'
import ScrollToTop from '../components/Common/ScrollToTop'
import Coures from '../components/Coures'

function CoursesPage() {
  return (
   <>
   <ScrollToTop/>
     <Topbar/>
     <Navbar/>
     <PageBanner heading={'ALL COURSES'}/>
     <BreadCrumb currentPage={'Courses'}/>
     <Coures/>
     <Footer/>
   </>
  )
}

export default CoursesPage