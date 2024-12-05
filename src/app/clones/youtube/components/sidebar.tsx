import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoMdHome } from 'react-icons/io'
import { MdSmartDisplay } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'

const Sidebar = () => {
    return (
        <div>
            <div className="flex flex-col w-20 items-center">
                <div className="flex flex-col items-center mb-8">
                    <IoMdHome className="text-xl" />
                    <div className="text-[10px]">Home</div>
                </div>
                <div className="flex flex-col items-center mb-8">
                    <SiYoutubeshorts className="text-xl" />
                    <div className="text-[10px]">Shorts</div>
                </div>
                <div className="flex flex-col items-center mb-8 ">
                    <MdSmartDisplay className="text-xl" />
                    <div className="text-[10px]">Subscriptions</div>
                </div>
                <div className="flex flex-col items-center mb-8">
                    <CgProfile className="text-xl" />
                    <div className="text-[10px]">You</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
