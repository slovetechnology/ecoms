import React, { useState } from 'react'
import { BsClock, BsQuestionCircle, BsStarFill } from 'react-icons/bs'
import {
    BsEmojiFrown,
    BsEmojiNeutral,
    BsEmojiSmile,
    BsEmojiLaughing,
    BsEmojiHeartEyes,
} from 'react-icons/bs'
import {ImUser} from 'react-icons/im'
import { useSelector } from 'react-redux'
import { SwalAlert, ToastAlert, formatDate } from '../../Components/Utils/Functions'
import Loading from '../../Components/Utils/Loading'
import { Apis, Posturl } from '../../Components/Utils/Api'
import SingleReview from './PageCompos/SingleReview'

const ProductReview = ({ prodId, revs, sendSignal }) => {
    const [loading, setLoading] = useState(false)
    const [zone, setZone] = useState(false)
    const { user } = useSelector(state => state.data)
    const [forms, setForms] = useState({
        content: '',
        username: ''
    })
    const handleForms = e => {
        setForms({
            ...forms,
            [e.target.name]: e.target.value
        })
    }
    const [rates, setRates] = useState(0)
    const handleRates = num => {
        if (rates !== num) {
            setRates(num)
        } else {
            setRates(prev => prev - 1)
        }
    }
    let Icon = rates === 1 ? BsEmojiFrown : rates === 2 ? BsEmojiNeutral : rates === 3 ? BsEmojiSmile : rates === 4 ? BsEmojiLaughing : rates === 5 ? BsEmojiHeartEyes : BsQuestionCircle

    const handleSubmission = async e => {
        e.preventDefault()
        if (!forms.username) return ToastAlert('Username is required!')
        if (!forms.content) return ToastAlert('your review is required!')

        const formdata = {
            username: forms.username,
            content: forms.content,
            product: prodId,
            user,
            rating: rates,
            status: Icon.name
        }
        setLoading(true)
        const res = await Posturl(Apis.products.add_review, formdata)
        setLoading(false)

        if (res.status === 200) {
            setForms({
                content: '',
                username: ''
            })
            setRates(0)
            sendSignal()
            return SwalAlert("Request Successful", res.msg, 'success')
        } else {
            return SwalAlert('Request Failed', res.msg, 'error')
        }
    }
    return (
        <div className="">
            <div className="mt-5">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="">
                        {revs.length > 0 ? revs.map((item, i) => (
                            <SingleReview key={i} item={item} />
                        )) : <div className="text-center text-sm text-slate-500 mt-10">Be the first to make a review on this product</div> }
                    </div>
                    <div>
                        {loading && <Loading title="Uploading Review!..." />}
                        <div className="">
                            <form onSubmit={handleSubmission}>
                                <div className="mt-3 mb-6 bg-slate-50 rounded-lg shadow-xl p-2.5">
                                    <div className="text-slate-400 font-semibold">Submit Review</div>
                                </div>
                                <div className="mb-3">
                                    <div className="text-slate-600">Enter Name</div>
                                    <input name="username" value={forms.username} onChange={handleForms} type="text" className="input" />
                                </div>
                                <div className="mb-3">
                                    <div className="text-slate-600">Enter Review</div>
                                    <textarea name="content" value={forms.content} onChange={handleForms} className="input" cols="30" rows="10"></textarea>
                                </div>
                                <div className="mb-3">
                                    <div className="flex items-center flex-row gap-3">
                                        <div className="">Rate this product</div>
                                        <BsStarFill onClick={() => handleRates(1)} className={`cursor-pointer text-2xl hover:scale-150 transition-all ${rates > 0 ? 'text-orange-600' : 'text-slate-300'}`} />
                                        <BsStarFill onClick={() => handleRates(2)} className={`cursor-pointer text-2xl hover:scale-150 transition-all ${rates > 1 ? 'text-orange-600' : 'text-slate-300'}`} />
                                        <BsStarFill onClick={() => handleRates(3)} className={`cursor-pointer text-2xl hover:scale-150 transition-all ${rates > 2 ? 'text-orange-600' : 'text-slate-300'}`} />
                                        <BsStarFill onClick={() => handleRates(4)} className={`cursor-pointer text-2xl hover:scale-150 transition-all ${rates > 3 ? 'text-orange-600' : 'text-slate-300'}`} />
                                        <BsStarFill onClick={() => handleRates(5)} className={`cursor-pointer text-2xl hover:scale-150 transition-all ${rates > 4 ? 'text-orange-600' : 'text-slate-300'}`} />
                                    </div>
                                    <div className="w-fit mx-auto mt-5">
                                        <Icon className='text-4xl text-slate-500' />
                                    </div>
                                </div>
                                <div className="w-fit ml-auto">
                                    <button className="bg-slate-800 transition-all text-white rounded-full py-3 w-44 capitalize shadow-xl hover:bg-slate-200 hover:text-slate-800">submit review</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductReview