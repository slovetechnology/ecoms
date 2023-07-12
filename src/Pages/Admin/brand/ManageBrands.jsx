import React, { useCallback, useEffect, useState } from 'react'
import AdminLayout from '../../../Components/Admin/AdminLayout'
import { FaPlus } from 'react-icons/fa'
import BrandsModal from './BrandsModal'
import { Apis, Geturl, offlineServer } from '../../../Components/Utils/Api'
import { formatDate } from '../../../Components/Utils/Functions'

const tableTitle = [
    "s/n",
    "logo",
    "title",
    "date created",
    "",
]

const ManageBrands = () => {
    const [view, setView] = useState(false)
    const [shows, setShows] = useState(false)
    const [items, setItems] = useState([])
    const [singles, setSingles] = useState({})
    const fetchAllBrands = useCallback(async () => {
        const res = await Geturl(Apis.products.all_brand)
        if (res.status === 200) {
            return setItems(res.msg)
        }
    }, [])

    useEffect(() => {
        fetchAllBrands()
    }, [fetchAllBrands])

    const SingleItem = val => {
        setSingles(val)
        setView(!view)
    }
    return (
        <AdminLayout>
            {view && <BrandsModal singles={singles} resendSignal={() => fetchAllBrands()} closeView={() => {setView(!view); fetchAllBrands()}} />}
            <div className="">
                <div className="mt-10 w-11/12 mx-auto pl-3 flex items-center gap-3">
                    <div className="text-2xl font-semibold text-slate-600">All Brands</div>
                    <button onClick={() => {setView(!view); setSingles({})}} className="border border-blue-700 text-blue-700 py-3 px-5 rounded-full uppercase hover:bg-blue-700 hover:text-white flex items-center gap-2 text-xs"> <FaPlus /> new</button>
                </div>
                <div className="w-11/12 mx-auto bg-white p-3 rounded-lg shadow-xl mt-10 mb-16">
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
                                    <td className='uppercase text-sm p-2 border'>{i + 1}</td>
                                    <td className='uppercase text-sm p-2 border'> {item.logo ? <img src={`${offlineServer}/brands/${item.logo}`} alt="" className="h-10" /> : '?'} </td>
                                    <td className='uppercase text-sm p-2 border'>{item.title}</td>
                                    <td className=' text-sm p-2 border'>{formatDate(item.createdAt)}</td>
                                    <td className='uppercase text-sm p-2 border'> <button onClick={() => SingleItem(item)} className="bg-blue-700 text-xs rounded-lg text-white py-2 px-4 uppercase">edit</button> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    )
}

export default ManageBrands