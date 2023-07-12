import React, { useState } from 'react'
import Layout from '../../Components/General/Layout'
import { SlUser } from 'react-icons/sl'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { SwalAlert, ToastAlert } from '../../Components/Utils/Functions'
import { Apis, Posturl } from '../../Components/Utils/Api'
import Cookies from 'js-cookie'
import {decodeToken} from 'react-jwt'
import { Routes } from '../../privateRoutes/Routes'
import Loading from '../../Components/Utils/Loading'

const Register = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [pass1, setPass1] = useState(false)
    const [pass2, setPass2] = useState(false)
    const Icon1 = pass1 ? FaEye : FaEyeSlash
    const Icon2 = pass2 ? FaEye : FaEyeSlash
    const [forms, setForms] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        confirm_password: '',
    })
    const handleForms = e => {
        setForms({
            ...forms,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmission = async e => {
        e.preventDefault()
        if(!forms.firstname) return ToastAlert('firstname is required')
        if(!forms.lastname) return ToastAlert('lastname is required')
        if(!forms.email) return ToastAlert('email is required')
        if(!forms.phone) return ToastAlert('phone is required')
        if(!forms.password) return ToastAlert('password is required')
        if(!forms.confirm_password) return ToastAlert('confirming password is required')
        if(forms.confirm_password !== forms.password) return ToastAlert('password(s) do not match')
        const formdata = {...forms}

        setLoading(true)
        // const res = await Posturl(Apis.users.register_account, formdata)
        setTimeout(() => {
            setLoading(false)
            SwalAlert('Request Successful', 'Account Demo', 'success')
        }, 3000);

        // if(res.status === 200) {
        //     ToastAlert(res.msg)
        //     const token = res.token
        //     Cookies.set('ecoms', token)
        //     const decoded = decodeToken(token)
        //     const findRole = Routes.find(item => item.role === decoded.role)
        //     if(findRole) {
        //         setTimeout(() => {
        //            return navigate(`${findRole.url}`)
        //         }, 2000);
        //     }
        // }else {
        //     ToastAlert(res.msg)
        // }
    }
    return (
        <Layout>
            {loading && <Loading /> }
            <div className="w-11/12 mx-auto max-w-xl my-10 shadow-xl">
                <div className="grid grid-cols-2 bg-gold">
                    <div className="text-2xl p-3 capitalize text-slate-800 font-semibold flex items-center gap-3"> <SlUser /> create account</div>
                    <div className="cust"></div>
                </div>
                <form onSubmit={handleSubmission} className='px-4 py-8'>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="">
                            <div className="uppercase text-sm">firstname</div>
                            <input name="firstname" value={forms.firstname} onChange={handleForms} type="text" className="input" />
                        </div>
                        <div className="">
                            <div className="uppercase text-sm">lastname</div>
                            <input name="lastname" value={forms.lastname} onChange={handleForms} type="text" className="input" />
                        </div>
                    </div>
                    <div className=" mb-4">
                        <div className="uppercase text-sm">email address</div>
                        <input name="email" value={forms.email} onChange={handleForms} type="text" className="input" />
                    </div>
                    <div className=" mb-4">
                        <div className="uppercase text-sm">phone number</div>
                        <input name="phone" value={forms.phone} onChange={handleForms} type="text" className="input" />
                    </div>
                    <div className="mb-4 relative">
                        <div onClick={() => setPass1(!pass1)} className="absolute top-8 right-4 cursor-pointer text-2xl text-slate-500"> <Icon1 /> </div>
                        <div className="uppercase text-sm">password</div>
                        <input name="password" value={forms.password} onChange={handleForms} type={pass1 ? 'text' : 'password'} className="input" />
                    </div>
                    <div className="mb-4 relative">
                        <div onClick={() => setPass2(!pass2)} className="absolute top-8 right-4 cursor-pointer text-2xl text-slate-500"> <Icon2 /> </div>
                        <div className="uppercase text-sm">confirm password</div>
                        <input name="confirm_password" value={forms.confirm_password} onChange={handleForms} type={pass2 ? 'text' : 'password'} className="input" />
                    </div>
                    <div className="w-3/4 mx-auto">
                        <button className="bg-slate-700 py-3 rounded-lg w-full text-lg shadow-xl capitalize text-white">create account</button>
                    </div>
                    <div className="mt-5">
                        <div className="text-center text-slate-600">Already have an account? <Link to='/login' className='text-blue-600'>Login Now</Link> </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Register