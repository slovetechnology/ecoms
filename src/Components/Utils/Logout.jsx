import React, { useState } from 'react'
import ModalLayout from '../../Components/General/ModalLayout'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Loading from '../../Components/Utils/Loading'

const Logout = ({closeView}) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const LogoutUser = () => {
        Cookies.remove('ecoms')
        setLoading(true)
        setTimeout(() => {
            navigate('/login')
        }, 2000);
    }
  return (
    <ModalLayout closeView={closeView}>
        {loading && <Loading /> }
        <div className="">
            <div className="text-center text-slate-600">Are you sure you want to logout?</div>
            <div className="mt-5 w-fit mx-auto">
                <button onClick={LogoutUser} className="bg-red-500 text-white w-44 py-3 hover:bg-red-600 rounded-full capitalize shadow-xl">proceed</button>
            </div>
        </div>
    </ModalLayout>
  )
}

export default Logout