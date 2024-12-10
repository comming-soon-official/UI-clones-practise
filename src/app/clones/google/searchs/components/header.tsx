import { BiCamera, BiSearch } from 'react-icons/bi'
import { CgMenuGridO } from 'react-icons/cg'
import { IoMdMore } from 'react-icons/io'
import { MdMic } from 'react-icons/md'

const menu = ['All', 'Images', 'shopping', 'News', 'Videos', 'Web', 'More']
const Header = () => {
    return (
        <div>
            <div>
                <div className="flex items-center justify-between p-5">
                    <div className="flex items-center gap-10 w-4/5">
                        <div className="text-3xl md:text-4xl font-semibold">
                            Google
                        </div>
                        <div className="flex items-center bg-[#5F6368] px-5 p-2 rounded-full gap-2 md:w-1/2 w-full">
                            <input
                                type="text"
                                className="bg-transparent outline-none w-full"
                            />
                            {/* <IoMdClose className="size-7" />
                            | */}
                            <MdMic className="size-7" />
                            <BiCamera className="size-7" />
                            <BiSearch className="size-7" />
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
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
                <div className="flex justify-between px-6  text-sm">
                    <ul className="flex gap-4 ">
                        {menu.map((items, i) => (
                            <li
                                key={i}
                                className={`${
                                    i === 0 ? 'border-b-4' : ''
                                } px-2 items-center flex`}
                            >
                                {i === 6 ? <IoMdMore className="size-4" /> : ''}
                                {items}
                            </li>
                        ))}
                    </ul>
                    <div className="p-2">Tools</div>
                </div>
                <div className="border-b-[1px] opacity-35"></div>
            </div>
        </div>
    )
}

export default Header
