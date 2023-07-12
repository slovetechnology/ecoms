import React, { useState } from 'react'
import ModalLayout from '../../../Components/General/ModalLayout'
import { ToastAlert } from '../../../Components/Utils/Functions'
import { Apis, Posturl } from '../../../Components/Utils/Api'
import { ToastContainer } from 'react-toastify'

const CategoryModal = ({ closeView, singles, resendSignal }) => {
    const [title, setTitle] = useState(singles.id ? singles.title : '')
    const handleSubmission = async () => {
        try {
            if (!title) return ToastAlert('Title of category is required!.')
            const data = { title, id: singles.id ? singles.id : '' }
            const res = singles.id ? await Posturl(Apis.products.update_category, data) : await Posturl(Apis.products.add_category, data)
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
                <div className="text-slate-600 text-xl rounded-lg shadow-xl mb-5 bg-blue-50 p-3">New Category</div>
                <div className="">
                    <div className="text-sm uppercase text-slate-700">title of category</div>
                    <input value={title.toUpperCase()} onChange={e => setTitle(e.target.value)} type="text" className="input" />
                </div>
                <div className="w-fit ml-auto mt-8">
                    <button onClick={handleSubmission} className="bg-purple-700 py-2 px-8 uppercase text-sm rounded-lg text-white">save</button>
                </div>
            </div>
            <ToastContainer />
        </ModalLayout>
    )
}

export default CategoryModal