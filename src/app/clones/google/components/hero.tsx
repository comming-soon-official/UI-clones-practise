import React from 'react'
import { IoIosSearch, IoMdMic } from 'react-icons/io'
import { IoCamera } from 'react-icons/io5'

const Hero = () => {
    return (
        <div className="w-full absolute top-[20%] left-1/2 -translate-x-1/2">
            <div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-7xl my-4 font-semibold">Google</h1>
                    <div className="flex items-center rounded-full p-4 w-2/3 bg-[#444746] justify-around my-4">
                        <div className="mx-2">
                            <IoIosSearch className="text-xl" />
                        </div>
                        <input
                            type="text"
                            className="w-full bg-transparent outline-none"
                        />
                        <div className="flex gap-4 mx-2">
                            <IoMdMic className="text-xl" />
                            <IoCamera className="text-xl" />
                        </div>
                    </div>
                    <div className="flex my-4 gap-2 ">
                        <div className="bg-[#444746] rounded-md p-2">
                            Google Search
                        </div>
                        <div className="bg-[#444746] rounded-md p-2">
                            Im Feeling Lucky
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center items-center text-sm">
                        Google offers in:{' '}
                        <div className="flex flex-wrap justify-center items-center gap-1 text-blue-800 ">
                            <div>हिन्दी</div>
                            <div>বাংলা</div>
                            <div>తెలుగు</div>
                            <div>मराठी</div>
                            <div>தமிழ்</div>
                            <div>ગુજરાતી</div>
                            <div>ಕನ್ನಡ</div>
                            <div>മലയാളം</div>
                            <div>ਪੰਜਾਬੀ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
