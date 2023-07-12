import React, { useState } from 'react'
import DeleteModal from '../../../Components/General/DeleteModal'
import { Apis, Posturl } from '../../../Components/Utils/Api'
import { ToastAlert } from '../../../Components/Utils/Functions'
import spins from '../../../assets/spinner.gif'
import Loading from '../../../Components/Utils/Loading'

const DeleteProductImage = ({closeView, id, resendSignal}) => {
    const [loading, setLoading] = useState(false)
    const handleExecution = async () => {
        const data = {
            id: id
        }
        setLoading(true)
        const res = await Posturl(Apis.products.delete_product_image, data)
        setLoading(false)
        if(res.status === 200) {
            ToastAlert(res.msg)
            resendSignal(res.imgs)
        }else {
            ToastAlert(res.msg)
        }
    }
  return (
    <DeleteModal closeView={closeView}>
       {loading && <Loading />}
        <div className="">
            <div className="text-center">Are you sure you want to delete this image?!</div>
            <div className="mt-10 w-2/3 mx-auto">
                <button onClick={handleExecution} className="bg-red-500 py-3 w-full rounded-lg text-white uppercase shadow-xl">confirm</button>
            </div>
        </div>
    </DeleteModal>
  )
}

export default DeleteProductImage