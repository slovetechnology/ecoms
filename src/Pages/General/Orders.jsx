import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../../Components/General/Layout'
import { useParams } from 'react-router-dom'
import { Apis, Geturl, offlineServer } from '../../Components/Utils/Api'
import notfound from '../../assets/404.svg'

const Orders = () => {
  const { order } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errmsg, setErr] = useState('')

  const fetchProducts = useCallback(async () => {
    const res = await Geturl(`${Apis.products.order}/${order}`)
    setLoading(false)
    if (res.status === 200) {
       setProducts(res.msg)
    }else {
      return setErr(res.msg)
    }

  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  return (
    <Layout>
      <div className="w-11/12 mx-auto my-10">
            {!loading && errmsg && <div className="w-fit mx-auto">
              <img src={notfound} alt="" />
              </div> }
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {!loading && <div className="">
              {products.map((item, i) => (
                <div className="mb-4" key={i}>
                  <div className="flex gap-5 border-l-4 px-4">
                    <div className="">
                      <div className=""> <img src={`${offlineServer}/products/${item.productimage.name}`} alt="" className="h-32 w-auto" /> </div>
                    </div>
                    <div className="">
                      <div className="font-semibold text-slate-600 capitalize text-lg">summary</div>
                      <div className="text-sm text-slate-600 mb-2 uppercase">Product Name: <b>{item.name}</b> </div>
                      <div className="text-xs text-slate-600 mb-2 uppercase">category: <b className='text-blue-700'>{item.cartorder.title}</b> </div>
                      <div className="text-sm text-slate-600 mb-2 uppercase">Quantity Needed: <b>{item.quantity} </b> </div>
                      <div className="text-sm text-slate-600 mb-2 uppercase">initial price: <b> &#8358;{parseFloat(item.pricetag).toLocaleString()} </b> </div>
                      <div className="text-sm text-slate-600 mb-2 uppercase">total price estimated: <b> &#8358;{parseFloat(item.pricing).toLocaleString()} </b> </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>}
          </div>
          <div className="lg:col-span-2"></div>
        </div>
      </div>
    </Layout>
  )
}

export default Orders