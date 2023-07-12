import React, { useCallback, useEffect, useState } from 'react'
import AdminLayout from '../../../Components/Admin/AdminLayout'
import { FaPlus } from 'react-icons/fa'
import { Apis, AuthGeturl } from '../../../Components/Utils/Api'
import { Link } from 'react-router-dom'
import { formatDate } from '../../../Components/Utils/Functions'

const AdminProducts = () => {
    const [items, setItems] = useState([])
    const fetchAllProducts = useCallback(async () => {
        const res = await AuthGeturl(Apis.products.all_products)
        if (res.status === 200) {
            return setItems(res.msg)
        }
    }, [])

    const tableTitle = [
        "s/n",
        "title",
        "quantity",
        "category",
        "brand",
        "old price",
        "current price",
        "discount",
        "date created",
        "",
    ]

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])
    return (
        <AdminLayout>
            <div className="">
                <div className="mt-10 w-11/12 mx-auto pl-3 flex items-center gap-3">
                    <div className="text-2xl font-semibold text-slate-600">All Products</div>
                    <Link to='/auth/admin/product/new' className="border border-blue-700 text-blue-700 py-3 px-5 rounded-full uppercase hover:bg-blue-700 hover:text-white flex items-center gap-2 text-xs"> <FaPlus /> new</Link>
                </div>
                <div className="w-11/12 mx-auto bg-white p-3 rounded-lg shadow-xl mt-10 mb-16 overflow-x-auto scrollsdown">
                    <table className='w-full border table-auto'>
                        <thead>
                            <tr className='bg-sky-100'>
                                {tableTitle.map((item, i) => (
                                    <td key={i} className='uppercase text-sm p-2 border'>{item}</td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {items.length > 0 && items.map((item, i) => (
                                <tr key={i}>
                                    <td className='uppercase text-sm p-3 border'>{i + 1}</td>
                                    <td className='uppercase text-sm p-3 border'>{item.title}</td>
                                    <td className='uppercase text-sm p-3 border'>{item.quantity}</td>
                                    <td className='uppercase text-sm p-3 border'>{item.category}</td>
                                    <td className='uppercase text-sm p-3 border'>{item.brands?.title || `?`}</td>
                                    <td className='uppercase text-sm p-3 border'>{item.oldprice}</td>
                                    <td className='uppercase text-sm p-3 border'>{item.currentprice}</td>
                                    <td className='uppercase text-sm p-3 border'>{item.discount || `?`}</td>
                                    <td className=' text-sm p-3 border'>{formatDate(item.createdAt)}</td>
                                    <td className='uppercase text-sm p-3 border'> <Link to={`/auth/admin/product/edit/${item.id}`} className="bg-blue-700 text-xs shadow-xl hover:bg-blue-800 hover:scale-110 transition-all rounded-lg text-white py-2 px-4 uppercase">edit</Link> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminProducts