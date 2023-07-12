import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import AdminSidebar from './AdminSidebar'
import { SlMenu, SlPower } from 'react-icons/sl'
import Logout from '../Utils/Logout'

const AdminLayout = ({children}) => {
  const [mobile, setMobile] = useState(false)
  const [logs, setLogs] = useState(false)
  const handleLogout = () => {
    setLogs(!logs)
  }
  const handleLogs = e => {
    e.preventDefault()
    setLogs(!logs)
  }
  return (
    <div>
      {logs && <Logout closeView={() => setLogs(!logs)} /> }
        <div className="flex items-center">
            <div className={`h-screen ${mobile ? 'w-[40vw]' : 'w-0'} bg-slate-700 transition-all lg:w-[20%] overflow-y-auto`}>
              <AdminSidebar handleLogs={handleLogs} />
            </div>
            <div className={`h-screen ${mobile ? 'w-[60vw]' : 'w-full'} ml-auto transition-all overflow-x-hidden lg:w-[90%]`}>
                <div className="h-[10vh] bg-white">
                  <div className="flex items-center justify-between pt-5 w-11/12 mx-auto">
                    <div className="">
                      <SlMenu onClick={() => setMobile(!mobile)} className='cursor-pointer lg:hidden text-xl' />
                    </div>
                    <div className="">
                      <div className="flex items-center justify-end">
                        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 hover:scale-110 transition-all rounded-full text-white shadow-xl py-1.5 px-4 gap-2 text-sm capitalize font-semibold flex items-center"> <SlPower />  logout </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[90vh] overflow-y-auto bg-[whitesmoke]">
                    {children}
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default AdminLayout