import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'
import CoursesPage from './pages/CoursesPage'
import PrivacyPage from './pages/PrivacyPage'
import Terms from './pages/Terms'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutUsPage/>} />
          <Route path='/contact' element={<ContactUsPage/>} />
          <Route path='/courses' element={<CoursesPage/>} />
          <Route path='/privacy' element={<PrivacyPage/>} />
          <Route path='/terms' element={<Terms/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App