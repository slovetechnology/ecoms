import React, { useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const AdminSidebar = ({handleLogs}) => {
  const [view, setView] = useState('')

  const handleView = tag => {
    (view !== tag) ? setView(tag) : setView('')
  }
  return (
    <div>
      <div className="flex flex-col">
        <Link to='/auth/admin' className='text-blue-100 py-3 border-b px-3 border-slate-500 capitalize'>dashboard</Link>
        <Link to='/auth/admin/category/manage' className='text-blue-100 py-3 border-b px-3 border-slate-500 capitalize'>categories</Link>
        <Link to='/auth/admin/brands/manage' className='text-blue-100 py-3 border-b px-3 border-slate-500 capitalize'>brands</Link>
        <div className=" cursor-pointer py-3 border-b px-3 border-slate-500">
          <div onClick={() => handleView(1)} className="flex items-center justify-between text-blue-100 capitalize mb-2"> products <SlArrowDown className='text-xs' /></div>
          {view === 1 && <div className="flex flex-col">
            <Link to='/auth/admin/product/new' className='text-blue-100 text-[0.95rem] flex items-center gap-2 capitalize px-3 py-2'> <div className="p-1 rounded-full bg-blue-100 w-fit"></div> new products</Link>
            <Link to='/auth/admin/products' className='text-blue-100 text-[0.95rem] flex items-center gap-2 capitalize px-3 py-2'> <div className="p-1 rounded-full bg-blue-100 w-fit"></div> all products</Link>
          </div>}
        </div>
        <Link to='/auth/admin/orders' className='text-blue-100 py-3 border-b px-3 border-slate-500 capitalize'>orders</Link>
        <Link to='/auth/admin/tracking' className='text-blue-100 py-3 border-b px-3 border-slate-500 capitalize'>tracking</Link>
        <Link to='' onClick={handleLogs} className='text-blue-100 py-3 border-b px-3 border-slate-500 capitalize'>Logout</Link>
      </div>
    </div>
  )
}

export default AdminSidebar