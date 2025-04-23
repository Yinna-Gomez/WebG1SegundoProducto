import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import FilterPage from './Pages/FilterPage/FilterPage'
import AcercaDe from './Pages/AcerdaDe/AcercaDe'

const App = () => {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filter/:genero" element={<FilterPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/acercade" element={<AcercaDe />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App