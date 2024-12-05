// import Image from 'next/image'
import React from 'react'
import { CgMenuGridO } from 'react-icons/cg'

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between p-4 items-center text-sm">
                <div className="flex gap-4">
                    <div>About</div>
                    <div>Store</div>
                </div>
                <div className="flex gap-4 items-center">
                    <div>Gmail</div>
                    <div>Images</div>
                    <CgMenuGridO className="text-2xl" />

                    <img
                        src="https://i.pravatar.cc/300"
                        width="150"
                        height="150"
                        alt="Avathar"
                        className="object-contain w-8 h-auto rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar
