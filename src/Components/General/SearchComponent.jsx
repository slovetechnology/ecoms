import React from 'react'
import { SlMagnifier } from 'react-icons/sl'
import { FaTimes } from 'react-icons/fa'

const SearchComponent = ({closeView}) => {
    return (
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen z-10 cartmodal flex items-center justify-center'>
            <div className='w-11/12 max-w-xl pt-32 rounded-lg relative'>
                <div className="">
                    <FaTimes className='text-2xl text-white cursor-pointer absolute top-0 right-0' onClick={closeView} />
                </div>
                <div className="">
                    <div className="flex items-center gap-2">
                        <input type="text" autoFocus={true} className="w-full outline-none placeholder:text-slate-200 bg-transparent border-b text-lg p-2" placeholder='Enter Text Here!...' />
                        <SlMagnifier className='text-white text-3xl cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SearchComponent