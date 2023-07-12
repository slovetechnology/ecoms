import React, { useCallback, useEffect, useState } from 'react'
import AdminLayout from '/src/Components/Admin/AdminLayout'
import { Apis, AuthGeturl } from '../../Components/Utils/Api'
import { SlBell } from 'react-icons/sl'
import { formatDate } from '../../Components/Utils/Functions'
import { Link } from 'react-router-dom'

const AHome = () => {
  const [feeds, setFeeds] = useState([])
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const fetchAllFeeds = useCallback(async () => {
    const res = await AuthGeturl(Apis.products.feed_admin)
    if (res.status === 200) {
      setLoading(false)
      console.log(res.msg)
      setFeeds(res.msg)
    }
  }, [])

  useEffect(() => { fetchAllFeeds() }, [fetchAllFeeds])

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
      <div className="w-11/12 my-10 mx-auto">
        {!loading && <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {feeds.map((item, i) => (
            <div className="bg-white mb-2 md:mb-4 hover:-translate-y-5 transition-all rounded-lg shadow-xl" key={i}>
              <div className="grid grid-cols-5">
                <div className={`col-span-1 md:col-span-2 bg-indigo-300 rounded-tl-lg rounded-bl-lg h-32 flex items-center justify-center text-3xl md:text-5xl text-indigo-100`}> <SlBell /> </div>
                <div className="col-span-4 md:col-span-3 p-3">
                  <div className="capitalize font-semibold text-slate-600 bg-slate-100 shadow-xl py-2 px-5 w-fit rounded-lg">{item.tag}</div>
                  <div className={`text-right text-2xl md:text-3xl text-zinc-500 font-bold break-words text-${item.bg}-400`}>{item.total}</div>
                </div>
              </div>
            </div>
          ))}
        </div>}
<div className="text-3xl font-semibold drop-shadow-lg mt-4 text-zinc-500">All Products</div>
        <div className=" bg-white p-3 rounded-lg shadow-xl mt-5 mb-16 overflow-x-auto scrollsdown">
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

export default AHome