import React, { useState } from 'react'
import Layout from '../../Components/General/Layout'
import { SlUser } from 'react-icons/sl'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastAlert } from '../../Components/Utils/Functions'
import { Apis, Posturl } from '../../Components/Utils/Api'
import Cookies from 'js-cookie'
import {decodeToken} from 'react-jwt'
import { Routes } from '../../privateRoutes/Routes'
import Loading from '../../Components/Utils/Loading'

const Login = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [pass1, setPass1] = useState(false)
    const Icon1 = pass1 ? FaEye : FaEyeSlash
    const [forms, setForms] = useState({
        email: '',
        password: '',
    })
    const handleForms = e => {
        setForms({
            ...forms,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmission = async e => {
        e.preventDefault()
        if(!forms.email) return ToastAlert('email is required')
        if(!forms.password) return ToastAlert('password is required')
        const formdata = {...forms}

        setLoading(true)
        // const res = await Posturl(Apis.users.login_account, formdata)
        setTimeout(() => {
            setLoading(false)
            ToastAlert('Account Demo Login')
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
                <div className="">
                </div>
                <div className="grid grid-cols-2 bg-gold">
                    <div className="text-2xl p-3 capitalize text-slate-800 font-semibold flex items-center gap-3"> <SlUser /> login account</div>
                    <div className="cust"></div>
                </div>
                <form onSubmit={handleSubmission} className='px-4 py-8'>
                    <div className=" mb-4">
                        <div className="uppercase text-sm">email address</div>
                        <input name="email" value={forms.email} onChange={handleForms} type="text" className="input" />
                    </div>
                    {/* <div className="text-right">
                        <Link to='' className='text-blue-600'>Forgot Password?</Link>
                    </div> */}
                    <div className="mb-4 relative">
                        <div onClick={() => setPass1(!pass1)} className="absolute top-8 right-4 cursor-pointer text-2xl text-slate-500"> <Icon1 /> </div>
                        <div className="uppercase text-sm">password</div>
                        <input name="password" value={forms.password} onChange={handleForms} type={pass1 ? 'text' : 'password'} className="input" />
                    </div>
                    <div className="w-3/4 mx-auto">
                        <button className="bg-slate-700 py-3 rounded-lg w-full text-lg shadow-xl capitalize text-white">login account</button>
                    </div>
                    <div className="mt-5">
                        <div className="text-center text-slate-600">Don't have an account? <Link to='/auth/admin/register/setup-admin-account' className='text-blue-600'>Register Now</Link> </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Login