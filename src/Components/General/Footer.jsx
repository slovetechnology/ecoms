import React from 'react'
import { FcMoneyTransfer, FcOnlineSupport, FcPrivacy, FcShipped } from 'react-icons/fc'
import { sitename } from '../Utils/Functions'
import img1 from '../../assets/footer-payment.png'

const Footer = () => {
    return (
        <>
            <footer className='bg-[#f4f4f4] mt-14 py-16'>
                <div className="w-11/12 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="flex items-center gap-3 border-r-2 border-zinc-400 justify-center mb-8 p-2">
                            <FcShipped className='text-3xl' />
                            <div className="">
                                <div className="font-semibold capitalize">free shipping</div>
                                <div className="text-slate-600 text-sm">on every order, every day!</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:border-r-2 border-zinc-400 justify-center mb-8 p-2">
                            <FcPrivacy className='text-3xl' />
                            <div className="">
                                <div className="font-semibold capitalize">secure payment</div>
                                <div className="text-slate-600 text-sm">we value your security</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 border-r-2 border-zinc-400 justify-center mb-8 p-2">
                            <FcOnlineSupport className='text-3xl' />
                            <div className="">
                                <div className="font-semibold capitalize">money back guarantee</div>
                                <div className="text-slate-600 text-sm">30 days money back guarantee</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 justify-center px-2 -mt-8">
                            <FcMoneyTransfer className='text-3xl' />
                            <div className="">
                                <div className="font-semibold capitalize">24/7 customer service</div>
                                <div className="text-slate-600 text-sm">support number +coming soon</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t-2 border-dashed border-zinc-400 mt-5 pt-5">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="text-slate-600 mt-2">© 2021 <span className="capitalize">{sitename}</span>.com Ltd. Trademarks and brands</div>
                            <div className="w-fit md:ml-auto mb-3 mt-2"> <img src={img1} alt="" className="" /> </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer