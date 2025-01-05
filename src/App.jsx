import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './components/home'
import Homee from './components/homee'
import Homee1 from './components/homee1'
import Gallery from './components/gallery'
import Covid from './components/covid'
import Offer from './components/offer'
import Testimonial from './components/testimonial'
import About from './components/about'
import Contact from './components/contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/homee" element={<Homee />} />
          <Route path="/homee1" element={<Homee1 />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

