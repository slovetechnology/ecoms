import React, { useRef, useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { ToastAlert } from '../../../Components/Utils/Functions'
import { offlineServer } from '../../../Components/Utils/Api'
import DeleteProductImage from './DeleteProductImage'

const EditImageUploader = ({ handleImage, tag, views, imgData, refetchData }) => {
    const [openmodal, setOpenmodal] = useState(false)
    const [prodId, setProdId] = useState('')
    const [image, setImage] = useState({
        pic: imgData?.id ? `${offlineServer}/products/${imgData.name}` : null
    })
    const imgref = useRef()
    const handleUpload = e => {
        const file = e.target.files[0]
        if (file.size > 3000000) return ToastAlert('Image must not be greater than 3MB!')
        if (!file.type.startsWith('image/')) return ToastAlert('File must be a valid image only')
        const reads = new FileReader()
        reads.readAsDataURL(file)
        reads.onloadend = () => {
            setImage({
                pic: reads.result
            })
            handleImage(file, tag)
        }
    }

    const handleRemoval = () => {
        if(imgData) {
            setOpenmodal(!openmodal)
            setProdId(imgData.id)
        }else {
            setImage({
                pic: null
            })
            imgref.current.value = null
        }
    }

    const deletedImageFunc = (imgprod) => {
        refetchData(imgprod)
        setOpenmodal(!openmodal)
        setImage({
            pic: null
        })
        imgref.current.value = null
    }
    return (
        <div className="relative">
          {openmodal && <DeleteProductImage resendSignal={deletedImageFunc} id={prodId} closeView={() => setOpenmodal(!openmodal)} />}
            {image.pic && <div className="absolute top-0 left-0 w-full p-2 bg-black/40 rounded-tr-lg rounded-tl-lg">
                <div onClick={handleRemoval} className="w-fit ml-auto cursor-pointer text-white text-xl">
                    <FaTimes />
                </div>
            </div>}
            <label className='w-fit cursor-pointer'>
                {!image.pic ? <div className={`bg-slate-200 rounded-lg flex items-center justify-center ${views === 'small' ? 'w-[8rem]' : 'w-auto'} h-[8rem]`}> <FaPlus /> </div> :
                    <div className={`${views === 'small' ? 'w-[8rem]' : 'w-auto'} h-[8rem]`}><img src={image.pic} alt="" className={`${views === 'small' ? 'w-[8rem]' : 'w-full'} h-[8rem] rounded-lg object-cover`} /></div>
                }
                <input name={tag} ref={imgref} onChange={handleUpload} type="file" hidden />
            </label>
        </div>
    )
}

export default EditImageUploader