import { IoMdMore } from 'react-icons/io'

const Body = () => {
    return (
        <div className="p-4">
            <div>
                <div>
                    <div>
                        <p className="text-xl">
                            Did you mean : <span>rtr</span>
                        </p>
                    </div>
                    <div>
                        <div>
                            <div className="grid grid-cols-[auto_1fr] gap-4 items-center text-sm">
                                <img
                                    src="https://i.pravatar.cc/300"
                                    width="150"
                                    height="150"
                                    alt="Avathar"
                                    className="object-contain w-8 h-auto rounded-full"
                                />
                                <div className="flex flex-col">
                                    <div>BYJU'S</div>
                                    <div className="flex items-center">
                                        {
                                            'https://cyberkrypts.dev > please-explain-main'
                                        }
                                        {<IoMdMore className="size-4" />}
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm">
                                <h3 className="text-lg py-1">
                                    How to Learn at 10x
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. At neque et, sit nam
                                    facilis saepe reprehenderit porro a quasi,
                                    harum dolor, dolorem vero laudantium aliquid
                                    iure illo inventore iste ab.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
