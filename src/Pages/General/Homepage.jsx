import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/kids_fashion_14_2.jpg'
import img4 from '../../assets/kids_fashion_18_2.jpg'
import img2 from '../../assets/mobile_9_2.jpg'
import { SlGlobe, SlStar } from 'react-icons/sl'
import img3 from '../../assets/img02.jpg'
import img5 from '../../assets/blog-camera.jpg'
import img6 from '../../assets/ss.jpg'
import img7 from '../../assets/placeholder_thumbnail.jpg'
import img8 from '../../assets/adidas.jpg'
import img9 from '../../assets/acer.jpg'
import img10 from '../../assets/apple.jpg'
import img11 from '../../assets/gucci.jpg'
import Layout from '../../Components/General/Layout'
import TrendingProducts from './PageCompos/TrendingProducts'
import { BsCart4, BsWhatsapp } from 'react-icons/bs'
import { TfiHeart } from 'react-icons/tfi'



const Homepage = () => {
    const brands = [img6, img7, img8, img9, img10, img11, img6, img7, img8, img9, img10, img11]
    return (
        <Layout>
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
                {/* <TrendingProducts /> */}
                <div className="w-11/12 mx-auto overflow-x-auto scrollsdown">
                    <div className="w-fit flex items-center">
                        {new Array(10).fill().map((item, i) => (
                            <div className="h-[19.5rem] w-[19.5rem] relative" key={i}>
                                <div className="absolute top-0 left-2 h-full pt-10 flex flex-col gap-5">
                                    <div className="text-2xl cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <BsCart4 /> </div>
                                    <div className="text-2xl cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <TfiHeart /> </div>
                                    <div className="text-2xl cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <BsWhatsapp /> </div>
                                </div>
                                <Link to='/product' onClick={() => window.scrollTo(0, 0)}> <img src={img1} alt="" className='h-4/6 mx-auto' /></Link>
                                <div className="p-3">
                                    <div className="">&#8358;460.99</div>
                                    <div className="text-slate-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing </div>
                                    <div className="flex items-center text-gold text-xs gap-1">
                                        <SlStar />
                                        <SlStar />
                                        <SlStar />
                                        <SlStar />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="w-11/12 mx-auto my-10">
                <img src={img3} alt="" className="rounded-xl md:rounded-3xl" />
            </div>
            <section>
                <div className="grid grid-cols-2 py-3 px-5 border-b-2 bg-sky-50">
                    <div className="text-2xl font-semibold capitalize text-slate-600">technologies</div>
                    <Link to='' className="text-right text-indigo-600 w-fit ml-auto text-lg">view all</Link>
                </div>
                <div className="w-11/12 mx-auto overflow-x-auto scrollsdown">
                    <div className="w-fit flex items-center">
                        {new Array(10).fill().map((item, i) => (
                            <div className="h-[19.5rem] w-[19.5rem] relative" key={i}>
                                <div className="absolute top-0 left-2 h-full pt-10 flex flex-col gap-5">
                                    <div className="text-2xl cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <BsCart4 /> </div>
                                    <div className="text-2xl cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <TfiHeart /> </div>
                                    <div className="text-2xl cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <BsWhatsapp /> </div>
                                </div>
                                <Link to='/product' onClick={() => window.scrollTo(0, 0)}><img src={img2} alt="" className='h-4/6 mx-auto' /></Link>
                                <div className="p-3">
                                    <div className="">&#8358;460.99</div>
                                    <div className="text-slate-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing </div>
                                    <div className="flex items-center text-gold text-xs gap-1">
                                        <SlStar />
                                        <SlStar />
                                        <SlStar />
                                        <SlStar />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="grid grid-cols-2 py-3 px-5 border-b-2 bg-sky-50 mt-10">
                    <div className="text-2xl font-semibold capitalize text-slate-600">clothings and accessories</div>
                    <Link to='' className="text-right text-indigo-600 w-fit ml-auto text-lg">view all</Link>
                </div>
                <div className="w-11/12 mx-auto overflow-x-auto scrollsdown">
                    <div className="w-fit flex items-center">
                        {new Array(10).fill().map((item, i) => (
                            <div className="h-[19.5rem] w-[19.5rem] relative" key={i}>
                                <div className="absolute top-0 left-2 h-full pt-10 flex flex-col gap-5">
                                    <div className="text-2xl cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <BsCart4 /> </div>
                                    <div className="text-2xl cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <TfiHeart /> </div>
                                    <div className="text-2xl cursor-pointer hover:text-gold hover:scale-150 transition-all hover:rotate-[360deg]"> <BsWhatsapp /> </div>
                                </div>
                                <Link to='/product' onClick={() => window.scrollTo(0, 0)}> <img src={img4} alt="" className='h-4/6 mx-auto' /></Link>
                                <div className="p-3">
                                    <div className="">&#8358;460.99</div>
                                    <div className="text-slate-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing </div>
                                    <div className="flex items-center text-gold text-xs gap-1">
                                        <SlStar />
                                        <SlStar />
                                        <SlStar />
                                        <SlStar />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
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
            <section>
                <div>
                    <div className="w-11/12 mx-auto overflow-x-auto scrollsdown">
                        <div className="w-fit flex items-center gap-5 py-10">
                            {brands.map((item, i) => (
                                <div className="h-[5rem] md:h-[7rem] w-[7rem] md:w-[10rem]" key={i}>
                                    <img src={item} alt="" className="w-full h-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Homepage