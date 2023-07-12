import React, { useCallback, useEffect, useState } from 'react'
import AdminLayout from '../../../Components/Admin/AdminLayout'
import moment from 'moment'
import { Apis, Geturl } from '../../../Components/Utils/Api'
import { formatDate } from '../../../Components/Utils/Functions'

const ManageCategory = () => {
    const [items, setItems] = useState([])
    const tableHeaders = [
        `S/N`,
        "product name",
        "initial price",
        "purchasing price",
        "quantity",
        "date initiated"
    ]

    const fetchALlCategories = useCallback(async () => {
        const res = await Geturl(Apis.products.all_orders)
        if (res.status === 200) {
            return setItems(res.msg)
        }
    }, [])

    useEffect(() => {
        fetchALlCategories()
    }, [fetchALlCategories])

    return (
        <AdminLayout>
            <div className="">
                <div className="mt-10 w-11/12 mx-auto pl-3 flex items-center gap-3">
                    <div className="text-2xl font-semibold text-slate-600">All Orders</div>
                </div>
                <div className="w-11/12 mx-auto p-3 mt-10 mb-16">
                    <table className='w-full border bg-white shadow-xl rounded-xl table-auto'>
                        <thead>
                            <tr className='bg-sky-100'>
                                {tableHeaders.map((item, i) => (
                                    <td key={i} className='uppercase text-sm p-2 border'>{item}</td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {items.length > 0 && items.map((item, i) => (
                                <tr key={i}>
                                    <td className='uppercase text-sm p-2 border'>{i + 1}</td>
                                    <td className='uppercase text-sm p-2 border'>{item.name}</td>
                                    <td className='uppercase text-sm p-2 border'>&#8358;{parseFloat(item.pricetag).toLocaleString()}</td>
                                    <td className='uppercase text-sm p-2 border'>&#8358;{parseFloat(item.pricing).toLocaleString()}</td>
                                    <td className='uppercase text-sm p-2 border'>{item.quantity}</td>
                                    <td className='lowercase text-sm p-2 border'>{formatDate(item.createdAt)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    )
}

export default ManageCategory