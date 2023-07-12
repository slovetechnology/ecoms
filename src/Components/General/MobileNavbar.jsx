import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { BsWhatsapp } from 'react-icons/bs'

const MobileNavbar = ({ links, closeView }) => {
    const togref = useRef()

    useEffect(() => {
        togref && window.addEventListener('click', (e) => {
            togref.current !== null && !togref.current.contains(e.target) && closeView()
        }, true)
    }, [])
    return (
        <div className='h-screen block md:hidden bg-black/50 fixed w-full z-10 cartmodal'>
            <div ref={togref} className="bg-white w-[100vw] flex flex-col py-3 px-4">
                <div className="w-fit mx-auto py-3"> <Link to='/'> <img src={logo} alt="" /> </Link> </div>
                {links.map((item, i) => (
                    <Link onClick={closeView} to={`${item.url}`} key={i} className='p-2.5 hover:scale-105 transition-all hover:bg-slate-50 text-slate-700 capitalize'>{item.title}</Link>
                ))}
                <div className="flex items-center justify-center py-5">
                    <a href="" className='flex items-center gap-3 text-green-400'> <BsWhatsapp className='text-3xl' />
                        contact us</a>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar