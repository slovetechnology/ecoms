import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa'
import { SlArrowRight } from 'react-icons/sl'
import { Apis, Geturl, offlineServer } from '../Utils/Api'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const CartItem = ({ item, deletingFromCart, setProdcart, prodcarts }) => {
    const [product, setProduct] = useState({})
    const [cartitem, setCartitem] = useState({})
    const priceref = useRef(1)
    const [qyt, setQyt] = useState(priceref.current)
    const [open, setOpen] = useState(false)
    
    
    const addprice = () => {
        priceref.current += 1
        setQyt(priceref.current)
        const dataPrice = parseFloat(cartitem.price)
        
        setCartitem({
            ...cartitem,
            pricing: dataPrice * priceref.current
        })
        const mappedData = prodcarts.map((data) => {
            if(data.id === item.id) {
                return {
                    ...data,
                    price: dataPrice * priceref.current,
                    quantity: priceref.current
                    // product
                }
            }
            return data
        })
        setProdcart(mappedData)
    }

    const subPrice = () => {
        if (qyt === 1) return setQyt(1)
        priceref.current -= 1
        setQyt(priceref.current)
        const dataPrice = parseFloat(cartitem.price)

        setCartitem({
            ...cartitem,
            price: dataPrice * priceref.current
        })
        const mappedData = prodcarts.map((data) => {
            if(data.id === item.id) {
                return {
                    ...data,
                    price: dataPrice * priceref.current,
                    quantity: priceref.current
                    // product
                }
            }
            return data
        })
        setProdcart(mappedData)
    }

    const deleteCart = () => {
        deletingFromCart(item)
        setOpen(!open)
    }


    const fetchItemProduct = useCallback(async () => {
        const res = await Geturl(`${Apis.products.single_product}/${item.product}`)
        if (res.status === 200) {
            setProduct(res.msg)
        }
    }, [item])

    const manageItems = useCallback(() => {
        const dataset = {
            ...item,
            pricing: item.price,
        }
        setCartitem(dataset)

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        fetchItemProduct()
        manageItems()
    }, [fetchItemProduct, manageItems])


    return (
        <>
            <div className='relative'>
                {open && <div className="absolute top-0 left-0 z-[1] w-full h-full cartmodal bg-black/30">
                    <div className="flex items-center justify-around h-full">
                        <button onClick={() => setOpen(!open)} className="py-3 hover:scale-125 transition-all shadow-xl px-6 text-sm text-slate-600 bg-slate-300 rounded-md capitalize font-semibold">cancel</button>
                        <button onClick={deleteCart} className="py-3 hover:scale-125 transition-all shadow-xl px-6 text-sm bg-red-500 text-white rounded-md capitalize font-semibold">delete</button>
                    </div>
                </div>}
                <div className="grid grid-cols-2 p-2 border-b">
                    <div className="flex flex-col gap-1 items-start relative">
                        <div onClick={() => setOpen(!open)} className="absolute top-0 transition-all left-0 bg-red-400/80 hover:scale-125 hover:bg-red-400 text-white text-xs cursor-pointer p-1 rounded-full">
                            <FaTimes />
                        </div>
                        {product.id &&
                            <LazyLoadImage
                                src={`${offlineServer}/products/${product.images[0].name}`}
                                alt=""
                                className="w-14 h-14"
                            />
                        }
                        <div className="font-semibold text-slate-600 text-sm">{product.title}</div>
                        <div className="font-semibold text-slate-600 text-sm">&#8358;{product.discount ? parseFloat(product.discount).toLocaleString() : parseFloat(product.currentprice).toLocaleString()}</div>
                    </div>
                    <div className="">
                        <div className="text-orange-500 text-right mr-5 font-bold text-sm">&#8358;{parseFloat(item.price).toLocaleString()}</div>
                        <div className="flex w-3/5 ml-auto mr-5">
                            <div className="outline-none border h-fit border-r p-2 w-2/3 text-sm">{qyt}</div>
                            <div className="flex flex-col items-center w-1/3 border">
                                <button onClick={addprice} className='p-2 border-b text-slate-500 cursor-pointer text-xs text-center'> <FaPlus /> </button>
                                <button onClick={subPrice} className='p-2 text-slate-500 cursor-pointer text-xs text-center'> <FaMinus /> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem