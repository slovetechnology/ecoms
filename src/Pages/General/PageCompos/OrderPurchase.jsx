import React, { useRef, useState } from 'react'
import ModalLayout from '../../../Components/General/ModalLayout'
import { Apis, Posturl, frontendServer, offlineServer } from '../../../Components/Utils/Api'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { SwalAlert, ToastAlert } from '../../../Components/Utils/Functions'
import Loading from '../../../Components/Utils/Loading'

const OrderPurchase = ({ closeView, product }) => {
    const priceref = useRef(1)
    const [gen, setGen] = useState(false)
    const { user } = useSelector(state => state.data)
    const [qyt, setQyt] = useState(priceref.current)
    const [pricing, setpricing] = useState(product.discount ? product.discount : product.currentprice)
    const statsPrice = product.discount ? product.discount : product.currentprice

    const addQyt = () => {
        priceref.current += 1
        setQyt(priceref.current)
        setpricing(statsPrice * priceref.current)
    }
    const subQyt = () => {
        if (qyt === 1) return setQyt(1)
        priceref.current -= 1
        setQyt(priceref.current)
        setpricing(statsPrice * priceref.current)
    }

    const handleSubmission = () => {
        const formdata = {
            user: user,
            link: frontendServer,
            products: [{
                image: product.images[0].id,
                category: product.category,
                productname: product.title,
                pricing: pricing,
                pricetag: statsPrice,
                quantity: qyt,
                product: product.id,
            }]
        }
        setGen(true)
        setTimeout(async () => {
            const res = await Posturl(Apis.products.generate_order, formdata)
            if (res.status === 200) {
                setGen(false)
                console.log(res)
                SwalAlert("Request Successful", res.msg, 'success')
            } else {
                ToastAlert(res.msg)
            }
        }, 2000);
    }
    return (
        <ModalLayout closeView={closeView}>
            {gen && <Loading title="Generating Order Link!..." />}
            <div className="">
                <div className="mb-4">
                    <div className="bg-blue-50 text-xl rounded-lg p-3 shadow-xl mb-4 text-slate-600 font-semibold">Open Order</div>
                    <div className="grid grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-2">
                            <div className="w-fit mx-auto">
                                <LazyLoadImage
                                    effect="blur"
                                    src={`${offlineServer}/products/${product.images[0].name}`}
                                    className="h-32 w-full"
                                    alt={product.images[0].name}
                                />
                            </div>
                        </div>
                        <div className="md:col-span-3">
                            <div className="font-semibold text-slate-600 capitalize text-lg">summary</div>
                            <div className="text-sm text-slate-600 mb-2 uppercase">Product Name: <b>{product.title}</b> </div>
                            <div className="text-xs text-slate-600 mb-2 uppercase">category: <b className='text-blue-700'>{product.cart.title}</b> </div>
                            <div className="text-sm text-slate-600 mb-2 uppercase flex items-center justify-between">Quantity Needed:
                                <div className="flex items-center gap-6">
                                    <button onClick={subQyt} className="border p-2 cursor-pointer"> <FaMinus /> </button>
                                    <div className="p-2"> {qyt < 10 ? '0' : ''}{qyt} </div>
                                    <button onClick={addQyt} className="border p-2 cursor-pointer"> <FaPlus /> </button>
                                </div>
                            </div>
                            <div className="text-sm text-slate-600 mb-2 uppercase">Initial pricing: <b> &#8358;{parseFloat(statsPrice).toLocaleString()}</b> </div>
                            <div className="text-sm text-slate-600 mb-2 uppercase">total price estimated: <b> &#8358;{parseFloat(pricing).toLocaleString()}</b> </div>

                            <div className="w-3/4 mx-auto mt-10">
                                <button onClick={handleSubmission} className="bg-blue-600 shadow-xl py-3 w-full text-white capitalize rounded-lg">open order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalLayout>
    )
}

export default OrderPurchase