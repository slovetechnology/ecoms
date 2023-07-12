import React, { useState } from 'react'
import { SlArrowLeft, SlArrowRight, SlBasket, SlStar } from 'react-icons/sl'
import { FaMinus, FaPlus } from 'react-icons/fa'
import img1 from '../../assets/footer-payment.png'
import img2 from '../../assets/kids_fashion_15_2.jpg'
import Layout from '../../Components/General/Layout'

const Product = () => {
    const [zone, setZone] = useState(0)
    return (
        <Layout>
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-8 mt-10 w-11/12 mx-auto border-2 rounded-lg mb-10">
                    <div className="col-span-3 mb-5 px-3 relative">
                        <div className="w-fit mx-auto h-18rem]">
                            <div className="text-2xl hover:bg-slate-200 rounded-full p-3 transition-all hover:scale-150 absolute top-1/3 left-0 cursor-pointer"> <SlArrowLeft /> </div>
                            <div className="text-2xl hover:bg-slate-200 rounded-full p-3 transition-all hover:scale-150 absolute top-1/3 right-0 cursor-pointer"> <SlArrowRight /> </div>
                            <img src={img2} alt="" className="h-full" />
                        </div>
                        <div className="">
                            <div className="flex items-center justify-center">
                                {new Array(5).fill().map((item, i) => (
                                    <div className="w-24 h-24">
                                        <img src={img2} alt="" className="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="px-4 py-10">
                                <div className="text-xl text-indigo-600 capitalize mb-3 font-semibold">boys blue shirt</div>
                                <div className="flex items-center text-gold text-xs gap-1">
                                    <SlStar />
                                    <SlStar />
                                    <SlStar />
                                    <SlStar />
                                    <SlStar />
                                </div>
                                <div className="grid grid-cols-2 gap-5 mt-4">
                                    <div className="font-semibold border-r-2 uppercase text-sm">1 review</div>
                                    <div className="font-semibold text-gold text-sm uppercase cursor-pointer">add your review</div>
                                </div>
                                <div className="flex items-center uppercase text-teal-600 mt-3 mb-4 text-sm">
                                    (350) in stock
                                </div>
                                <div className="border-t mt-2 pt-2">
                                    <div className="font-semibold uppercase text-sm">Quick overview</div>
                                    <div className="text-slate-600 text-sm mt-2">Adjustable sternum and shoulder straps, multiple pockets, and compression straps to stabilize your load keep you prepped for any adventure. Also compatible with our 2L Hydration Reservoir (sold separately).</div>
                                </div>
                            </div>
                            <div className="bg-slate-100 px-3 py-6 h-[25rem]">
                                <div className="text-2xl text-gold font-semibold">&#8358;6590.00</div>
                                <div className="py-8 grid grid-cols-2">
                                    <div className="uppercase">qyt</div>
                                    <div className="flex items-center flex-row gap-7 justify-end">
                                        <button className="text-slate-600 p-2.5"> <FaMinus /> </button>
                                        <div className="text-slate-700 font-semibold">3</div>
                                        <button className="text-slate-600 p-2.5"> <FaPlus /> </button>
                                    </div>
                                </div>
                                <div className="w-11/12 mx-auto flex items-center gap-2 uppercase rounded-md py-2 px-3 bg-gold justify-center font-semibold"> <SlBasket className='text-3xl' /> add to cart</div>
                                <div className="text-sm text-center py-2 text-slate-700">Secured and trusted checkout with</div>
                                <div className="w-fit mx-auto mb-3 mt-2"> <img src={img1} alt="" className="" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto border-2 p-3 rounded-lg">
                <div className="border-b-2">
                    <div className="flex items-center">
                        <div onClick={() => setZone(0)} className={`uppercase py-3 px-6 text-sm cursor-pointer transition-all border-b-2 ${zone === 0 ? 'border-gold' : 'border-white'}`}>details</div>
                        <div onClick={() => setZone(1)} className={`uppercase py-3 px-6 text-sm cursor-pointer transition-all border-b-2 ${zone === 1 ? 'border-gold' : 'border-white'}`}>reviews (20)</div>
                    </div>
                </div>
                <div className="">
                    <div className="whitespace-pre-wrap text-sm text-slate-600">
                        {`Available while supplies last.

                        D105 17.5-HP Single-Cylinder Automatic 42-in Lawn Tractor

                        Easy one-pedal speed operation with forward and reverse lever
                        The Edge™ cutting system provides superior performance and a precise, even cut with 1/4-in cut height adjustment
                        Operator seat with heat resistant surface and easy in-seat adjustment provides greater operator comfort
                        Powerful engine with full-pressure lubrication for long life
                        Automatic transmission makes it easy to choose the exact travel speed for each operating condition
                        Manual blade engagement
                        Full-length welded steel frame for reliability
                        Features headlights, grease fittings, and a cup holder
                        Includes engine oil
                        Specifications:

                        Cut Width: 42-in
                        Number of Blades: 2
                        Maximum Forward Speed: 5.5 MPH
                        Maximum Reverse Speed: 3.2 MPH
                        Turning Radius: 18-in
                        Front Wheel Size: 15-in
                        Rear Wheel Size: 20-in
                        Deck Wheel Size: 5-in
                        Number of Deck/Anti-Scalp Wheels: 2
                        Deck Gauge: 13
                        Cutting Range/Yard Size: 1 to 2 acres
                        Discharge Location: Side
                        Ammeter: No
                        Bagger Capable: Yes (2-bin bagger sold separately)
                        Hour Meter Type: Meter with service reminder
                        Mulching Capable: Yes (kit sold separately)
                        Operator-Controlled Mow-in-Reverse: Yes
                        Steering Type: Standard wheel
                        Engine Specifications:

                        Brand: Briggs & Stratton
                        Displacement: 500cc
                        Horsepower: 17.5
                        Type: Single cylinder
                        Transmission Type: Foot pedal automatic
                        Fuel Capacity: 2.4-gal
                        Oil Capacity: 48-oz
                        Recommended Oil: 10W30
                        Oil Filter Type: Spin-on`}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Product