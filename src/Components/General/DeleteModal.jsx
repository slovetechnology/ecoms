import React, { useEffect, useRef } from 'react'

const DeleteModal = ({ closeView, children }) => {
    const togref = useRef()

    useEffect(() => {
        togref && window.addEventListener('click', (e) => {
            togref.current !== null && !togref.current.contains(e.target) && closeView()
        }, true)
    }, [])
    return (
        <div className='bg-black/30 z-10 fixed cartmodal top-0 left-0 w-full h-screen flex items-start justify-center'>
            <div className='w-11/12 max-w-xl p-3 bg-white rounded-lg mt-5 relative' ref={togref}>
                {children}
            </div>
        </div>
    )
}

export default DeleteModal