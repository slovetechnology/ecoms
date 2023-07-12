import React, { useCallback, useEffect, useState } from 'react'
import { SlArrowLeft, SlArrowRight, SlBasket, SlStar } from 'react-icons/sl'
import img1 from '../../assets/footer-payment.png'
import Layout from '../../Components/General/Layout'
import { Apis, Geturl, Posturl, offlineServer } from '../../Components/Utils/Api'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { BsCheck2All, BsWhatsapp } from 'react-icons/bs'
import RelatedProducts from './PageCompos/RelatedProducts'
import OrderPurchase from './PageCompos/OrderPurchase'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchCart } from '../../app/reducer'
import { ToastAlert } from '../../Components/Utils/Functions'
import ProductReview from './ProductReview'

const NewProduct = () => {
    const [zone, setZone] = useState(0)
    const [vieworder, setViewOrder] = useState(false)
    const dispatch = useDispatch()
    const { user, carts } = useSelector(state => state.data)
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { id, cart } = useParams()
    const [revs, setRevs] = useState([])
    const [thumb, setThumb] = useState(null)
    const generateDirectOrder = (item) => {
        setViewOrder(!vieworder)
        setProduct(item)
    }
    const [incart, setIncart] = useState(false)

    const fetchSingleProduct = useCallback(async () => {
        const res = await Geturl(`${Apis.products.single_product}/${id}`)
        if (res.status === 200) {
            setLoading(false)
            setProduct(res.msg)
            setThumb(`${res.msg.images[0].name}`)
            const checkMyCart = carts.find(item => item.product === res.msg.id.toString())
            if(checkMyCart) return setIncart(true)
        }
    }, [id])

    const fetchProductReview = useCallback(async () => {
        const res = await Geturl(`${Apis.products.product_review}/${id}`)
        if(res.status === 200) return setRevs(res.msg)
    }, [])

    useEffect(() => {
        fetchSingleProduct()
        fetchProductReview()
    }, [fetchSingleProduct, fetchProductReview])

    const handleImaging = img => {
        setThumb(img)
    }

    const nextThumb = () => {
        //
    }

    const prevThumb = () => {
        //
    }

    const AddToCart = async (productItem) => {
        const data = {
            user: user,
            product: productItem
        }
        const res = await Posturl(Apis.products.add_to_cart, data)
        if(res.status === 200) {
            dispatch(dispatchCart(res.carts))
            setIncart(true)
            ToastAlert(res.msg)
        }else {
            ToastAlert(res.msg)
        }
    }
    return (
        <Layout>
            {loading && <div className="">Loading...</div>}
            {vieworder && <OrderPurchase product={product} closeView={() => setViewOrder(!vieworder)} />}
            {!loading &&
                <>
                    <div className="">
                        <div className="grid grid-cols-1 lg:grid-cols-8 mt-10 w-11/12 mx-auto border-2 rounded-lg mb-10">
                            <div className="col-span-3 mb-5 relative">
                                <div className="h-[18rem]">
                                    <div onClick={prevThumb} className="text-2xl hover:bg-slate-200 rounded-full p-3 transition-all hover:scale-150 absolute top-1/3 left-0 cursor-pointer"> <SlArrowLeft /> </div>
                                    <div onClick={nextThumb} className="text-2xl hover:bg-slate-200 rounded-full p-3 transition-all hover:scale-150 absolute top-1/3 right-0 cursor-pointer"> <SlArrowRight /> </div>
                                    <img src={`${offlineServer}/products/${thumb}`} alt="" className="h-full object-contain w-full" />
                                </div>
                                <div className="mt-5">
                                    <div className="flex items-center gap-3 justify-center">
                                        {product.images.map((item, i) => (
                                            <div className="w-24 h-24" key={i}>
                                                <img onClick={() => handleImaging(item.name)} src={`${offlineServer}/products/${item.name}`} alt="" className="cursor-pointer w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-5">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="px-4 py-10">
                                        <div className="text-xl text-indigo-600 capitalize mb-3 font-semibold">{product.title}</div>
                                        <div className="flex items-center text-gold text-xs gap-1">
                                            <SlStar />
                                            <SlStar />
                                            <SlStar />
                                            <SlStar />
                                            <SlStar />
                                        </div>
                                        <div className="grid grid-cols-2 gap-5 mt-4">
                                            <div className="font-semibold border-r-2 uppercase text-sm">{revs.length} review</div>
                                            <div className="font-semibold text-gold text-sm uppercase cursor-pointer">add your review</div>
                                        </div>
                                        <div className="flex items-center uppercase text-teal-600 mt-3 mb-4 text-sm">
                                            ({product.quantity}) in stock
                                        </div>
                                        <div className="border-t mt-2 pt-2">
                                            <div className="text-sm overflow-ellipsis w-4/5 overflow-hidden whitespace-nowrap">{parse(product.content)}...</div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-100 px-3 py-6 h-[25rem]">
                                        <div className="grid grid-cols-2">
                                            <del className="text-2xl text-slate-500 font-semibold">&#8358;{parseFloat(product.oldprice).toLocaleString()}</del>
                                            <div className="text-2xl text-right text-orange-600 font-semibold">&#8358;{parseFloat(product.currentprice).toLocaleString()}</div>
                                        </div>
                                        {product.discount && <div className="w-3/5 mx-auto mt-5 mb-10">
                                            <div className="text-2xl text-center text-green-600 font-semibold">Discount @: &#8358;{parseFloat(product.discount).toLocaleString()}</div>
                                        </div>}
                                        {incart 
                                        ? <div className="w-11/12 mx-auto flex items-center gap-2 uppercase rounded-md py-2 px-3 bg-teal-500 text-teal-100 justify-between hover:scale-110 transition-all cursor-pointer font-semibold"> <BsCheck2All className='text-3xl' /> product added</div>
                                        : <div onClick={() => AddToCart(product)} className="w-11/12 mx-auto flex items-center gap-2 uppercase rounded-md py-2 px-3 bg-gold justify-between hover:scale-110 transition-all cursor-pointer font-semibold"> <SlBasket className='text-3xl' /> add to cart</div>}
                                        <div className="text-sm text-center py-2 text-slate-700">Secured and trusted checkout with</div>
                                        <div className="w-fit mx-auto mb-3 mt-2"> <img src={img1} alt="" className="" /> </div>
                                        <div onClick={() => generateDirectOrder(product)} className="w-11/12 hover:scale-110 transition-all cursor-pointer mx-auto flex items-center justify-between gap-2 uppercase rounded-md py-2 px-6 bg-[#32c733] text-white font-semibold"> <BsWhatsapp className='text-3xl' /> message us</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-11/12 mx-auto border-2 p-3 rounded-lg">
                        <div className="border-b-2">
                            <div className="flex items-center">
                                <div onClick={() => setZone(0)} className={`uppercase py-3 px-6 text-sm cursor-pointer transition-all border-b-2 ${zone === 0 ? 'border-gold' : 'border-white'}`}>details</div>
                                <div onClick={() => setZone(1)} className={`uppercase py-3 px-6 text-sm cursor-pointer transition-all border-b-2 ${zone === 1 ? 'border-gold' : 'border-white'}`}>reviews ({revs.length})</div>
                            </div>
                        </div>
                        <div className={zone === 0 ? '' : 'hidden'}>
                            <div className="whitespace-pre-wrap text-sm text-slate-600">
                                {parse(product.content)}
                            </div>
                        </div>
                        <div className={zone === 1 ? '' : 'hidden'}>
                            <div className="">
                                <ProductReview revs={revs} prodId={id} sendSignal={() => fetchProductReview()} />
                            </div>
                        </div>
                    </div>
                    <div className="w-11/12 mx-auto mt-10">
                        <div className="text-4xl capitalize drop-shadow-md font-semibold text-zinc-600">related <span className="text-orange-600">products</span> </div>
                        <RelatedProducts AddToCart={AddToCart} generateDirectOrder={generateDirectOrder} cart={cart} />
                    </div>
                </>}
        </Layout>
    )
}

export default NewProduct