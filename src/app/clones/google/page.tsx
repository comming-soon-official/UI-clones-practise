import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Footer from './components/footer'

const page = () => {
    return (
        <div className="bg-[#28292a] h-screen">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
}

export default page
