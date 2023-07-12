import React, { useRef, useState } from 'react'
import ModalLayout from '../../../Components/General/ModalLayout'
import { ToastAlert } from '../../../Components/Utils/Functions'
import { Apis, Posturl, offlineServer } from '../../../Components/Utils/Api'
import { ToastContainer } from 'react-toastify'
import { FaTimes } from 'react-icons/fa'

const BrandsModal = ({ closeView, singles, resendSignal }) => {
    const [title, setTitle] = useState(singles.id ? singles.title : '')
    const [image, setImage] = useState(null)
    const imgref = useRef()
    const handleFiling = e => {
        const file = e.target.files[0]
        if(file.size > 3000000) return ToastAlert('logo must not be more than 3MB')
        if(!file.type.startsWith('image/')) return ToastAlert('logo must be a valid image file')
        setImage(file)
    }

    const cancelImage = () => {
        setImage(null)
        imgref.current.value = null
    }
    const handleSubmission = async () => {
        try {
            if (!title) return ToastAlert('Title of brand is required!.')
            // const data = { title, id: singles.id ? singles.id : '' }
            const data = new FormData()
            data.append('image', image)
            data.append('title', title)
            singles?.id && data.append('id', singles.id)
            const res = singles.id ? await Posturl(Apis.products.update_brand, data) : await Posturl(Apis.products.new_brand, data)
            if (res.status === 200) {
                setTitle('')
                closeView()
                resendSignal()
                ToastAlert(res.msg)
            } else {
                ToastAlert(res.msg)
            }
        } catch (error) {
            return ToastAlert(error)
        }
    }
    return (
        <ModalLayout closeView={closeView}>
            <div className="">
                <div className="text-slate-600 text-xl rounded-lg shadow-xl mb-5 bg-blue-50 p-3">Manage Brands</div>
                <div className="mb-4">
                    <div className="text-sm uppercase text-slate-700">title of Brand</div>
                    <input value={title.toUpperCase()} onChange={e => setTitle(e.target.value)} type="text" className="input" />
                </div>
                <div className="">
                    <div className="text-sm uppercase text-slate-700">Upload Brand Logo (optional)</div>
                    <div className="flex items-center gap-5">
                        {singles?.id && <img src={`${offlineServer}/brands/${singles.logo}`} alt="" className="h-10" /> }
                        <input name="logo" ref={imgref} onChange={handleFiling} type="file" className="input" />
                        {image && <FaTimes onClick={cancelImage} className='text-red-600 cursor-pointer text-xl' />}
                    </div>
                </div>
                <div className="w-fit ml-auto mt-8">
                    <button onClick={handleSubmission} className="bg-purple-700 py-2 px-8 uppercase text-sm rounded-lg text-white">save</button>
                </div>
            </div>
            <ToastContainer />
        </ModalLayout>
    )
}

export default BrandsModal