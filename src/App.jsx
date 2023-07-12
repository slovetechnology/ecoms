import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./Pages/General/Homepage"
import Product from "./Pages/General/Product"
import NewProuct from "./Pages/Admin/Product/NewProuct"
import Tensed from "./Pages/Admin/Product/Tensed"
import ManageCategory from "./Pages/Admin/Category/ManageCategory"
import AdminProducts from "./Pages/Admin/Product/Adminproducts"
import EditProduct from "./Pages/Admin/Product/EditProduct"
import Login from "./Pages/Forms/Login"
import Register from "./Pages/Forms/Register"
import NewHome from "./Pages/General/NewHome"
import NewProduct from "./Pages/General/NewProduct"
import ManageBrands from "./Pages/Admin/brand/ManageBrands"
import Orders from "./Pages/General/Orders"
import ManageOrders from "./Pages/Admin/order/ManageOrders"
import Notfound from "./Pages/General/Notfound"
import TrackingOrders from "./Pages/Admin/tracking/TrackingOrders"
import SeeAllCarts from "./Pages/Admin/carts/SeeAllCarts"
import AHome from './Pages/Admin/AHome'
import Admins from "./privateRoutes/Admins"
import Privacy from "./Pages/General/Privacy"
import Terms from "./Pages/General/Terms"
import AboutUs from "./Pages/General/AboutUs"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<Product />} />

      <Route path="/auth/admin" element={<Admins><AHome /></Admins>} />
      <Route path="/auth/admin/category/manage" element={<Admins><ManageCategory /></Admins>} />
      <Route path="/auth/admin/brands/manage" element={<Admins><ManageBrands /></Admins>} />
      <Route path="/auth/admin/product/new" element={<Admins><NewProuct /></Admins>} />
      <Route path="/auth/admin/product/edit/:id" element={<Admins><EditProduct /></Admins>} />
      <Route path="/auth/admin/products" element={<Admins><AdminProducts /></Admins>} />
      <Route path="/auth/admin/orders" element={<Admins><ManageOrders /></Admins>} />
      <Route path="/auth/admin/tracking" element={<Admins><TrackingOrders /></Admins>} />
      <Route path="/auth/admin/carts" element={<Admins><SeeAllCarts /></Admins>} />


      <Route path="/login" element={<Login />} />
      <Route path="/auth/admin/register/setup-admin-account" element={<Register />} />
      <Route path="/new" element={<NewHome />} />
      <Route path="/new/product/:cart/:id/:slug" element={<NewProduct />} />
      <Route path="/products/:order" element={<Orders />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/tensed" element={<Tensed />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App