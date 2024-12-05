import React from 'react'

const Footer = () => {
    return (
        <div className="w-full absolute bottom-0 p-4 bg-[#1e1f22]">
            <div className="w-full ml-4">India</div>
            <div className="border-b-[1px] opacity-30 my-2"></div>
            <div className="w-full flex flex-wrap justify-around ">
                <div className="flex gap-4 flex-wrap ">
                    <div>Advertising</div>
                    <div>Business</div>
                    <div>How Search Works</div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <div>Privacy</div>
                    <div>Terms</div>
                    <div>Settings</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
