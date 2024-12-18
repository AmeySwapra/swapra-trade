import React from 'react'
import Topbar from '../components/Common/Topbar'
import Navbar from '../components/Common/Navbar'
import PageBanner from '../components/Common/PageBanner'
import BreadCrumb from '../components/Common/BreadCrumb'
import Footer from '../components/Common/Footer'

function CoursesPage() {
  return (
   <>
     <Topbar/>
     <Navbar/>
     <PageBanner heading={'ALL COURSES'}/>
     <BreadCrumb currentPage={'Courses'}/>
     <Footer/>
   </>
  )
}

export default CoursesPage