import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FaSadTear, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import bagy from '../../assets/bagy.jpeg'
import { Apis, Posturl, frontendServer } from '../Utils/Api'
import { dispatchCart } from '../../app/reducer'
import { SwalAlert, ToastAlert } from '../Utils/Functions'
import Loading from '../Utils/Loading'

const CartComponent = ({ closeView }) => {
    const togref = useRef()
    const { carts, user } = useSelector(state => state.data)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [prodcarts, setProdcart] = useState(carts)
    const [gen, setGen] = useState(false)
    const [totals, setTotals] = useState(0)

    const addUpPrices = useCallback(() => {
        let priced = 0
        
        prodcarts.map((item) => {
            priced += parseFloat(item.price)
        })
        setTotals(priced)
    })
    

    useEffect(() => {
        addUpPrices()
        togref && window.addEventListener('click', (e) => {
            togref.current !== null && !togref.current.contains(e.target) && closeView()
        }, true)
    }, [addUpPrices])


    const deleteCart = async (cartitem) => {
        setLoading(true)
        setTimeout(async () => {
            const formdata = {
                id: cartitem.id,
                user: user.IPv4
            }
            
            const res = await Posturl(Apis.products.delete_cart_item, formdata)
            setLoading(false)
            if (res.status === 200) {
                dispatch(dispatchCart(res.carts))
                const filt = prodcarts.filter(item => item.id !== cartitem.id)
                setProdcart(filt)
                ToastAlert(res.msg)
            } else {
                ToastAlert(res.msg)
            }
        }, 2000);
    }

    const handleCheckout = () => {

        const formdata = {
            user: user,
            link: frontendServer,
            products: prodcarts
        }
        
        setGen(true)
        setTimeout(async () => {
            const res = await Posturl(Apis.products.generate_multiple_order, formdata)
            if (res.status === 200) {
                setGen(false)
                dispatch(dispatchCart({}))
                SwalAlert("Request Successful", res.msg, 'success')
            } else {
                ToastAlert(res.msg)
            }
        }, 2000);
    }
    return (
        <div className='w-full fixed bg-black/50 top-0 left-0 h-screen z-10 cartmodal'>
        {loading && <Loading title="Deleting cart item from store!..." /> }
            {gen && <Loading title="Generating Order Link!..." />}
            <div className="bg-white w-full max-w-sm ml-auto h-screen z-10" ref={togref}>
                <div className="h-[75vh] overflow-y-auto scrolls">
                    <div className="bg-slate-100 py-3 flex items-center justify-between px-4 lg:px-8">
                        <div className="text-slate-600 uppercase text-lg">cart summary</div>
                        <div className="">
                            <FaTimes onClick={closeView} className='text-slate-500 text-2xl cursor-pointer' />
                        </div>
                    </div>
                    <div className="">
                        {prodcarts.map((item, i) => (
                            <CartItem setProdcart={setProdcart} prodcarts={prodcarts} deletingFromCart={deleteCart} item={item} key={i} />
                        ))}
                    </div>
                    {carts.length < 1 && <div className='flex items-center justify-center flex-col gap-3'>
                        <img src={bagy} alt="" className="" />
                        <div className="text-center text-xl w-3/5 mx-auto drop-shadow-md italic text-slate-600">You have not added any item to your cart!..</div>
                    </div>}
                </div>
                <div className={carts.length < 1 ? 'hidden' : ''}>
                    <div className="h-[25vh] bg-slate-100 flex flex-col gap-3 px-4 lg:px-10">
                        <div className="grid grid-cols-2 py-8">
                            <div className="font-semibold uppercase text-slate-600 text-xl">total price</div>
                            <div className="text-right text-orange-600 font-bold text-xl">&#8358;{totals.toLocaleString()}</div>
                        </div>
                        <button onClick={handleCheckout} className='bg-orange-500 py-4 w-full text-center shadow-xl hover:bg-orange-600 text-base font-semibold text-white uppercase rounded-lg'>checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartComponent
