import React, { useState } from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { SlBasketLoaded, SlEnvolope, SlMagnifier, SlMenu, SlPhone, SlUser } from 'react-icons/sl'
import { TfiHeart } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useSelector } from 'react-redux'
import { Flags } from '../Utils/Flags'
import MobileNavbar from './MobileNavbar'

const Navbar = ({ closeView, closeCart }) => {
    const { user } = useSelector(state => state.data)
    const [open, setOpen] = useState(false)
    const navlinks = [
        {
            title: 'home',
            url: '/',
        },
        {
            title: 'blogs',
            url: '/blogs',
        },
        {
            title: 'privacy',
            url: '/privacy',
        },
        {
            title: 'terms',
            url: '/terms',
        },
        {
            title: 'about',
            url: '/about',
        },
        {
            title: 'login',
            url: '/login',
        }
    ]
    return (
        <div>
            {open && <MobileNavbar closeView={() => setOpen(!open)} links={navlinks} />}
            <div className="fixed top-[8rem] hidden min-w-[15rem] right-[5rem] z-20 bg-white border shadow-xl">
                <div className="py-3">
                    {Flags.map((item, i) => (
                        item.name.startsWith(user.country_name) && <div className="" key={i}>
                            <div className="flex text-zinc-600 items-center gap-2 px-2.5 py-2"> <img src={item.file_url} alt="" className="w-10" /> {item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* header one */}
            <div className="bg-white py-3">
                <div className="w-11/12 mx-auto grid grid-cols-2">
                    <div className="flex items-start flex-col md:flex-row gap-2">
                        <div className="flex items-center gap-2">
                            <SlPhone /> <span className="text-sm">+coming soon</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <SlEnvolope /> <span className="text-sm">support@companyname.com</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-wrap items-center gap-5 md:gap-8 text-xl justify-end h-full text-gold">
                            <BsFacebook className='cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]' />
                            <BsWhatsapp className='cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]' />
                            <BsInstagram className='cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]' />
                            <BsTwitter className='cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]' />
                            <BsLinkedin className='cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]' />
                        </div>
                    </div>
                </div>
            </div>
            {/* header two */}
            <div className="bg-slate-100 py-2.5">
                <div className="grid grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
                    <div className="flex items-center justify-start">
                        <Link to='/' className=""> <img src={logo} alt="" className="h-[3rem] w-auto" /> </Link>
                    </div>
                    <div className="hidden lg:block">
                        <div className="">
                            <div className="flex items-center shadow-lg rounded-xl my-3">
                                <div onClick={closeView} className="w-full py-2.5 px-2 rounded-tl-xl rounded-bl-xl text-sm bg-white cursor-pointer">Search By Category!..</div>
                                <button className="bg-gold text-2xl py-2 px-3 rounded-tr-xl rounded-br-xl"> <SlMagnifier /> </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 flex-row text-sm text-zinc-700">
                            <Link to=''>Fashion</Link> x
                            <Link to=''>Accessories</Link> x
                            <Link to=''>Stationaries</Link>x
                            <Link to=''>Footwares</Link>
                        </div>
                    </div>
                    <div className="flex items-center text-2xl text-slate-600 justify-end gap-10">
                        <div onClick={closeView} className="cursor-pointer block lg:hidden hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <SlMagnifier /> </div>
                        <div className="cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <TfiHeart /> </div>
                        <div className="">
                            {Flags.map((item, i) => (
                                item.name.startsWith(user.country_name) && <img key={i} src={item.file_url} alt="" className="w-10 h-10 cursor-pointer" />
                            ))}
                        </div>
                        <div onClick={closeCart} className="cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <SlBasketLoaded /> </div>
                    </div>
                </div>
            </div>
            {/* header three */}
            <div className="bg-gold grid grid-cols-6 sticky top-0 left-0">
                <div className="col-span-3 flex md:hidden items-center justify-start ml-3 text-xl"> <SlMenu className='cursor-pointer' onClick={() => setOpen(!open)} /> </div>
                <div className="md:flex items-center flex-row col-span-4 hidden">
                    {navlinks.map((item, i) => (
                        <Link key={i} to={`${item.url}`} className='hdlinks'>{item.title}</Link>
                    ))}
                </div>
                <div className="cust col-span-3 py-[0.71rem] md:col-span-2">
                    <div className="w-11/12 mx-auto flex items-center text-gold justify-end h-full text-base md:text-xl capitalize font-semibold gap-5">
                        <a href="" className='flex items-center gap-3'> <BsWhatsapp className='text-3xl' />
                            contact us</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar