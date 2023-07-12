import React, { useCallback, useEffect, useState } from 'react'
import AdminLayout from '../../../Components/Admin/AdminLayout'
import moment from 'moment'
import { Apis, Geturl } from '../../../Components/Utils/Api'
import { formatDate } from '../../../Components/Utils/Functions'

const TrackingOrders = () => {
    const [items, setItems] = useState([])
    const tableHeaders = [
        `S/N`,
        "tracking id",
        "tracking url",
        "nationality of customer",
        "customer ip",
        "date initiated"
    ]

    const fetchALlCategories = useCallback(async () => {
        const res = await Geturl(Apis.products.all_tracks)
        if (res.status === 200) {
            console.log(res.msg)
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
                <div className="w-11/12 mx-auto bg-white p-3 rounded-lg overflow-x-auto scrollsdown shadow-xl mt-10 mb-16">
                    <table className='w-full border table-auto'>
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
                                    <td className='text-sm p-2 border'>{item.trackid}</td>
                                    <td className='text-sm p-2 border'>{item.track_url}</td>
                                    <td className='uppercase text-sm p-2 border'>{item.track.country}</td>
                                    <td className='uppercase text-sm p-2 border'>{item.track.ip}</td>
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

export default TrackingOrders