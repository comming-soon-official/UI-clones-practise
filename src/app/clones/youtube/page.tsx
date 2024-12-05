import React from 'react'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Body from './components/body'

const page = () => {
    return (
        <div className="bg-[#0F0F0F] w-full h-screen">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <Body />
            </div>
        </div>
    )
}

export default page
