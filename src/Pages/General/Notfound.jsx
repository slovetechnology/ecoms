import React from 'react'
import notfound from '../../assets/404.svg'
import Layout from '../../Components/General/Layout'
import { useLocation } from 'react-router-dom'

const Notfound = () => {
    const location = useLocation()
    
  return (
    <Layout>
        <div className="w-fit mx-auto">
            <img src={notfound} alt="" />
            <div className="text-xl w-10/12 mx-auto text-slate-600 text-center mt-10">Looks like the page <span className="font-bold text-red-500">{`"${location.pathname.slice(1)}"`}</span> you are looking for does not exists!</div>
        </div>
    </Layout>
  )
}

export default Notfound