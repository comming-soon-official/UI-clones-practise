import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoIosNotificationsOutline, IoMdMic } from 'react-icons/io'
import { RiMenuLine, RiVideoAddLine } from 'react-icons/ri'

const Navbar = () => {
    return (
        <div>
            <div className="flex items-center justify-between py-2 px-7">
                <div className="flex gap-6 items-center">
                    <RiMenuLine className="text-2xl" />
                    <div className="text-xl font-semibold">Youtube</div>
                </div>
                <div className="flex w-2/4 items-center">
                    <div className="justify-between flex w-full rounded-full gap-6 items-center bg-[#121212]  border-[1px] border-[#222222]">
                        <CiSearch className="text-3xl ml-4" />

                        <input
                            type="text"
                            className="bg-transparent outline-none p-2 w-full"
                        />
                        <div className="bg-[#222222] p-2 px-4 rounded-e-full">
                            <CiSearch className="text-2xl" />
                        </div>
                    </div>
                    <div className="bg-[#222222] p-2 rounded-full items-center ml-3">
                        <IoMdMic className="text-xl" />
                    </div>
                </div>
                <div className="flex gap-6 items-center">
                    <RiVideoAddLine className="text-2xl" />
                    <IoIosNotificationsOutline className="text-2xl" />
                    <img
                        src="https://i.pravatar.cc/300"
                        width="150"
                        height="150"
                        alt="Avathar"
                        className="object-contain w-8 h-auto rounded-full"
                    />{' '}
                </div>
            </div>
        </div>
    )
}

export default Navbar
