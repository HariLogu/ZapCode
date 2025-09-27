import { useState } from 'react'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'
import { Features } from './Components/Features'
import { Workflow } from './Components/Workflow'
import { Price } from './Components/Price'
import { Testimonials } from './Components/Testimonials'
import { Footer } from './Components/Footer'

function App() {

  return (
    <>
      <Header/>  
      <div className="max-w-7xl mx-auto pt-20 px-10">
        <Hero/>
        <Features/>
        <Workflow/>
        <Price/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}

export default App
