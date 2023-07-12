import axios from "axios"
import Cookies from "js-cookie"

export const frontendServer = 'http://localhost:5173'
export const offlineServer = 'http://localhost:5001'
export const offline = 'http://localhost:5001/api'

const token = Cookies.get('ecoms')

const prod = "products"
const user = "user"

const user_urls = {
    register_account: `${user}/register`,
    login_account: `${user}/login`,
    get_account: `${user}/get-account`,
}

const product_urls = {
    all_products: `${prod}`,
    new_product: `${prod}/new`,
    new_brand: `${prod}/brand/new`,
    all_brand: `${prod}/brand/all`,
    update_brand: `${prod}/brand/update`,
    update_product: `${prod}/update`,
    delete_product_image: `${prod}/product-image`,
    single_product: `${prod}/single-product`,
    add_category: `${prod}/category/add`,
    update_category: `${prod}/category/update`,
    all_category: `${prod}/category-all`,
    single_category: `${prod}/category`,
    product_cartegory: `${prod}/product-cart`,
    generate_order: `${prod}/generate-order`,
    generate_multiple_order: `${prod}/generate-multiple-order`,
    order: `${prod}/order`,
    all_orders: `${prod}/all-orders`,
    all_tracks: `${prod}/tracks/all`,
    my_carts: `${prod}/cart/get-my-carts`,
    add_to_cart: `${prod}/cart/add-new-cart`,
    delete_cart_item: `${prod}/cart/delete-cart-item`,
    add_review: `${prod}/reviews/add-review`,
    update_review: `${prod}/reviews/update-review`,
    delete_review: `${prod}/reviews/delete-review`,
    product_review: `${prod}/reviews/review-product`,
    feed_admin: `${prod}/all/feed-admin`
}

export const Apis = {
    products: product_urls,
    users: user_urls,
}

const options = {
    headers: {
        authorization: `Bearer ${token}`
    }
}

export const Posturl = async (endpoint, data) => {
    const res = await axios.post(`${offline}/${endpoint}`, data)
    return res.data
}

export const Deleteurl = async (endpoint, data) => {
    const res = await axios.delete(`${offline}/${endpoint}`, data)
    return res.data
}

export const Geturl = async (endpoint) => {
    const res = await axios.get(`${offline}/${endpoint}`)
    return res.data
}

// authorized configuration

export const AuthPosturl = async (endpoint, data) => {
    const res = await axios.post(`${offline}/${endpoint}`, data, options)
    return res.data
}

export const AuthDeleteurl = async (endpoint, data) => {
    const res = await axios.delete(`${offline}/${endpoint}`, data, options)
    return res.data
}

export const AuthGeturl = async (endpoint) => {
    const res = await axios.get(`${offline}/${endpoint}`, options)
    return res.data
}