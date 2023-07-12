import React, { useCallback, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SearchComponent from './SearchComponent'
import CartComponent from './CartComponent'
import { BsCart4 } from 'react-icons/bs'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchCart, dispatchUser } from '../../app/reducer'
import { Apis, Geturl } from '../Utils/Api'
import { ToastContainer } from 'react-toastify'

const Layout = ({ children }) => {
  const [view, setView] = useState(false)
  const [cartview, setCartview] = useState(false)
  const dispatch = useDispatch()
  const {carts} = useSelector(state => state.data)

  const fetchUseApi = useCallback(async () => {
    const res = await axios.get(`https://geolocation-db.com/json/ae667f70-1348-11ee-968c-19b76e6b8f05`)
    dispatch(dispatchUser(res.data))
    if (res.status === 200) {
      const result = await Geturl(`${Apis.products.my_carts}/${res.data?.IPv4}`)
      if(result.status === 200) return dispatch(dispatchCart(result.msg))
    }
  }, [])

  useEffect(() => {
    fetchUseApi()
  }, [fetchUseApi])
  return (
    <div>
      {view && <SearchComponent closeView={() => setView(!view)} />}
      {cartview && <CartComponent closeView={() => setCartview(!cartview)} />}
      <Navbar closeView={() => setView(!view)} closeCart={() => setCartview(!cartview)} />
      {children}
      {carts.length > 0 && <div onClick={() => setCartview(!cartview)} className="fixed animate-bounce bottom-20 rounded-lg shadow-xl right-4 cursor-pointer p-3 bg-blue-600 text-white text-4xl z-[3] cardfix">
        <BsCart4 />
      </div>}
      <Footer closeView={() => setView(!view)} />
      <ToastContainer />
    </div>
  )
}

export default Layout