import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SlGlobe, SlStar } from 'react-icons/sl'
import img3 from '../../assets/img02.jpg'
import img5 from '../../assets/blog-camera.jpg'
import Layout from '../../Components/General/Layout'
import TrendingProducts from './PageCompos/TrendingProducts'
import { BsCart4, BsWhatsapp } from 'react-icons/bs'
import { TfiHeart } from 'react-icons/tfi'
import Brands from './PageCompos/Brands'
import { useSelector } from 'react-redux'
import OrderPurchase from './PageCompos/OrderPurchase'



const NewHome = () => {
    const { user } = useSelector(state => state.data)
    const [vieworder, setViewOrder] = useState(false)
    const [product, setProduct] = useState({})

    const generateDirectOrder = (item) => {
        setViewOrder(!vieworder)
        setProduct(item)
    }

    return (
        <Layout>
            {vieworder && <OrderPurchase product={product} closeView={() => setViewOrder(!vieworder)} />}
            <h1> {user.IPv4} </h1>
            <div className="grid grid-cols-1 w-[95%] my-5 mx-auto md:grid-cols-9 lg:gap-3 h-fit">
                <div className="md:col-span-6 bg-banner h-[17rem] md:h-[22rem] md:auto bg-cover bg-center">
                    <div className="flex items-start w-10/12 mx-auto justify-center h-full flex-col gap-3">
                        <div className="font-bold text-gold text-xl uppercase">Stationaries</div>
                        <div className="capitalize text-zinc-800 text-lg font-semibold">best and new generation stationaries for you</div>
                        <Link to='' className='bg-gold uppercase py-2.5 px-5 shadow-lg'>enquiry now</Link>
                    </div>
                </div>
                <div className="md:col-span-3 bg-banner2 bg-center bg-cover h-[22rem]">
                    <div className="w-11/12 mx-auto gap-5 max-w-[60%] h-full flex flex-col items-center justify-start">
                        <div className="text-slate-600 capitalize text-2xl font-semibold"># new arrivals</div>
                        <div className="font-semibold text-3xl text-center capitalize">fashion made simple</div>
                    </div>
                </div>
            </div>
            <section>
                <div className="grid grid-cols-2 py-3 px-5 border-b-2">
                    <div className="text-2xl font-semibold capitalize text-slate-600">new trending</div>
                    <Link to='' className="text-right text-indigo-600 w-fit ml-auto text-lg">view all</Link>
                </div>
                <TrendingProducts generateDirectOrder={generateDirectOrder} />
                <TrendingProducts generateDirectOrder={generateDirectOrder} />
            </section>
            <div className="w-11/12 mx-auto my-10">
                <img src={img3} alt="" className="rounded-xl md:rounded-3xl" />
            </div>
            <section>
                <div className="grid grid-cols-2 py-3 px-5 border-b-2 bg-sky-50">
                    <div className="text-2xl font-semibold capitalize text-slate-600">technologies</div>
                    <Link to='' className="text-right text-indigo-600 w-fit ml-auto text-lg">view all</Link>
                </div>
                <TrendingProducts generateDirectOrder={generateDirectOrder} />
            </section>
            <section>
                <div className="grid grid-cols-2 py-3 px-5 border-b-2 bg-sky-50 mt-10">
                    <div className="text-2xl font-semibold capitalize text-slate-600">clothings and accessories</div>
                    <Link to='' className="text-right text-indigo-600 w-fit ml-auto text-lg">view all</Link>
                </div>
                <TrendingProducts generateDirectOrder={generateDirectOrder} />
            </section>
            <section>
                <div className="grid grid-cols-2 py-3 px-5 border-b-2 mt-10">
                    <div className="text-2xl font-semibold capitalize text-slate-600">latest blog posts</div>
                </div>
                <div className="bg-[#f4f4f4]">
                    <div className="w-11/12 mx-auto overflow-x-auto scrollsdown">
                        <div className="w-fit flex items-center gap-5 py-10">
                            {new Array(10).fill().map((item, i) => (
                                <div className="h-[26rem] w-[18rem] shadow-xl bg-white" key={i}>
                                    <img src={img5} alt="" className='h-[13rem] mx-auto' />
                                    <div className="flex w-11/12 mx-auto items-center mt-2 gap-3 bg-sky-50 p-2 rounded-lg border">
                                        <img src={img5} alt="" className="w-8 shadow-xl rounded-full object-cover h-8 border-2 border-gold" />
                                        <div className="text-sm text-indigo-600 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing </div>
                                    </div>
                                    <div className="p-3">
                                        <div className="text-slate-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempora modi</div>
                                        <div className="text-xs mt-1 flex items-center flex-row font-semibold text-indigo-600 justify-end w-11/12">
                                            <SlGlobe />3/5/2023
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Brands />
        </Layout>
    )
}

export default NewHome