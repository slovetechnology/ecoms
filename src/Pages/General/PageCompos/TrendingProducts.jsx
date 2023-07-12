import React, { useCallback, useEffect, useState } from 'react'
import { Apis, Geturl, Posturl, offlineServer } from '../../../Components/Utils/Api'
import { Link } from 'react-router-dom'
import { SlStar } from 'react-icons/sl'
import { BsCart4, BsWhatsapp } from 'react-icons/bs'
import { TfiHeart } from 'react-icons/tfi'
import { ToastAlert, getRandomObjectsFromArray } from '../../../Components/Utils/Functions'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux'
import { dispatchCart } from '../../../app/reducer'

const TrendingProducts = ({generateDirectOrder}) => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.data)

    const fetchAllProducts = useCallback(async () => {
        const res = await Geturl(Apis.products.all_products)
        if (res.status === 200) {
            const result = getRandomObjectsFromArray(res.msg, res.msg.length)
            setProducts(result)
        }
    }, [])

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    const AddToCart = async (productItem) => {
        const data = {
            user: user,
            product: productItem
        }
        const res = await Posturl(Apis.products.add_to_cart, data)
        if(res.status === 200) {
            dispatch(dispatchCart(res.carts))
            ToastAlert(res.msg)
        }else {
            ToastAlert(res.msg)
        }
    }
    return (
        <>
            <div className="w-11/12 mx-auto overflow-x-auto scrollsdown">
                <div className="w-fit flex items-center gap-7 py-10 px-3">
                    {products.map((item, i) => (
                        <div className="h-[20rem] w-[19rem] shadow-xl relative overflow-hidden" key={i}>
                            {item.discount && <div className="absolute top-4 right-4 shadow-xl rounded-tl-xl border-2 border-white rounded-br-xl bg-red-500 backdrop-blur-sm text-white z-[3] text-xs py-1.5 px-3 font-semibold">Discount: &#8358;{parseFloat(item.discount).toLocaleString()}</div>}
                            <Link to={`/new/product/${item.category}/${item.id}/${item.slug}`} onClick={() => window.scrollTo(0, 0)}> {!item?.images[0].name ? '' :
                                <LazyLoadImage
                                    alt={item?.images[0]?.name}
                                    effect="blur"
                                    className='h-[13rem] object-cover mx-auto w-[32rem] transition-all hover:scale-110'
                                    src={`${offlineServer}/products/${item?.images[0]?.name}`} />
                            }
                            </Link>
                            <div className="p-3">
                                <div className="grid grid-cols-2">
                                    <del className="">&#8358;{parseFloat(item.oldprice).toLocaleString()}</del>
                                    <div className="font-semibold text-xl text-right text-orange-500">&#8358;{parseFloat(item.currentprice).toLocaleString()}</div>
                                </div>
                                <div className="text-slate-600 text-sm">{item.title} </div>
                                <div className="flex items-center text-gold text-xs gap-1">
                                    <SlStar />
                                    <SlStar />
                                    <SlStar />
                                    <SlStar />
                                </div>
                                <div className="flex items-center gap-8 justify-end">
                                    <div onClick={() => AddToCart(item)} className="text-2xl cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <BsCart4 /> </div>
                                    <div className="text-2xl cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <TfiHeart /> </div>
                                    <div onClick={() => generateDirectOrder(item)} className="text-2xl cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <BsWhatsapp /> </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TrendingProducts