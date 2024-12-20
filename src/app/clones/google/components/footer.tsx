import React from 'react'

const Footer = () => {
    return (
        <div className="w-full absolute bottom-0 p-4 text-sm bg-[#171717]">
            <div className="w-full ml-4">India</div>
            <div className="border-b-[1px] opacity-30 my-2"></div>
            <div className="w-full flex flex-wrap justify-around mt-4">
                <div className="flex gap-6 flex-wrap ">
                    <div>Advertising</div>
                    <div>Business</div>
                    <div>How Search Works</div>
                </div>
                <div className="flex flex-wrap gap-6">
                    <div>Privacy</div>
                    <div>Terms</div>
                    <div>Settings</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
