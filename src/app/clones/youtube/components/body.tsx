import React from 'react'

const Body = () => {
    return (
        <div>
            <div className="flex flex-wrap gap-4 justify-center">
                {Array.from({ length: 12 }, (_) => (
                    <div className="w-[400px]">
                        <div>
                            <img
                                src="https://i.ytimg.com/vi/UdIXUDpeTXU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDOE0Y7x0kJ_qGTwu7Dn1ry5O8-cQ"
                                className="w-[400px] rounded-lg mb-2"
                                alt=""
                            />
                        </div>
                        <div className="grid grid-cols-[auto_1fr] gap-2">
                            <img
                                src="https://i.pravatar.cc/300"
                                className="object-contain w-10 h-10 rounded-full"
                                alt=""
                            />
                            <div className="">
                                <div className="">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit reere.
                                </div>
                                <div className="text-sm">ThePrimeTv</div>
                                <div className="text-sm">
                                    200k views - 3hours ago
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Body
