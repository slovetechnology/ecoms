
import AdminLayout from '../../../Components/Admin/AdminLayout'
import { useParams } from 'react-router-dom'
import React, { useCallback, useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { ToastAlert } from '../../../Components/Utils/Functions'
import { Apis, Geturl, Posturl } from '../../../Components/Utils/Api'
import Loading from '../../../Components/Utils/Loading'
import EditImageUploader from './EditImageUploader'

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ["link"],
        // ["link", "image"],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'direction': 'rtl' }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],

        ['clean']
    ]
}



const EditProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [content, setContent] = useState(product?.id ? product.content : '')
    const formdata = new FormData()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [brands, setBrands] = useState([])
    const [forms, setForms] = useState({
        title: '',
        quantity: '',
        category: '',
        oldprice: '',
        currentprice: '',
        brand: '',
        discount: '',
    })
    const [images, setImages] = useState({
        img1: null,
        img2: null,
        img3: null,
        img4: null,
        img5: null,
    })

    const fetchProduct = useCallback(async () => {
        const response = await Geturl(`${Apis.products.single_product}/${id}`)
        if (response.status === 200) {
            const prod = response.msg
            setForms({
                title: prod?.id ? prod.title : '',
                brand: prod?.brand ? prod?.brand : '',
                quantity: prod?.id ? prod.quantity : '',
                category: prod?.id ? prod.category : '',
                oldprice: prod?.id ? prod.oldprice : '',
                currentprice: prod?.id ? prod.currentprice : '',
                discount: prod?.id ? prod.discount : '',
            })
            setContent(prod?.id ? prod.content : '')
            setImages({
                img1: prod?.id ? prod.images[0] : null,
                img2: prod?.id ? prod.images[1] : null,
                img3: prod?.id ? prod.images[2] : null,
                img4: prod?.id ? prod.images[3] : null,
                img5: prod?.id ? prod.images[4] : null,
            })
            return setProduct(response.msg)
        }
    }, [id])

    useEffect(() => {
        fetchProduct()
    }, [fetchProduct])

    const refetchData = (imgprod) => {
        // setProduct(imgprod)
        fetchProduct()
    }

    const handleForms = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
    }
    const handleImage = (file, tag) => {
        setImages({
            ...images,
            [tag]: file
        })
    }

    const fetchALlCategories = useCallback(async () => {
        const res = await Geturl(Apis.products.all_category)
        if (res.status === 200) {
            setBrands(res.brands)
            return setItems(res.msg)
        }
    }, [])

    useEffect(() => {
        fetchALlCategories()
    }, [fetchALlCategories])


    const loadSubmission = async () => {
        try {
            if (!forms.title) return ToastAlert('Product title is required!')
            if (!forms.quantity) return ToastAlert('Product quantity is required!')
            if (!forms.category) return ToastAlert('Product category is required!')
            if (!forms.currentprice) return ToastAlert('Product current price is required!')
            if (!images.img1) return ToastAlert('Upload an image thumbnail for your product')
            if (!content) return ToastAlert('Product contents required')
            formdata.append('title', forms.title)
            formdata.append('brand', forms.brand)
            formdata.append('quantity', forms.quantity)
            formdata.append('category', forms.category)
            formdata.append('currentprice', forms.currentprice)
            formdata.append('oldprice', forms.oldprice)
            formdata.append('discount', forms.discount)
            formdata.append('content', content)
            images.img1 && formdata.append('img1', images.img1)
            images.img2 && formdata.append('img2', images.img2)
            images.img3 && formdata.append('img3', images.img3)
            images.img4 && formdata.append('img4', images.img4)
            images.img5 && formdata.append('img5', images.img5)
            formdata.append('productid', product.id)

            setLoading(true)
            const res = await Posturl(Apis.products.update_product, formdata)
            setLoading(false)
            if (res.status === 200) {
                setForms({
                    title: '',
                    quantity: '',
                    category: '',
                    oldprice: '',
                    currentprice: '',
                    brand: '',
                    discount: ''
                })
                ToastAlert(res.msg)
                setImages([])
                setContent('')
            } else {
                return ToastAlert(res.msg)
            }
        } catch (error) {
            return false
        }
    }
    return (
        <AdminLayout>
            <div className=''>
                {loading && <Loading />}
                <div className="px-5 w-11/12 my-16 bg-white py-16 shadow-xl rounded-lg mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                        <div className="">
                            <div className="tetx-slate-600">
                                <div className="text-slate-600 text-sm uppercase">Product title</div>
                                <input name="title" value={forms.title} onChange={handleForms} type="text" className="input" />
                            </div>
                        </div>
                        <div className="">
                            <div className="text-slate-600 uppercase text-sm">Product Brand (optional)</div>
                            <select name="brand" value={forms.brand} onChange={handleForms} className="input uppercase">
                                <option value="">--Select--</option>
                                {brands.map((item, i) => (
                                    <option key={i} value={item.id}>{item.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="">
                                <div className="text-slate-600 text-sm uppercase">Quantity</div>
                                <input name="quantity" value={forms.quantity} onChange={handleForms} type="number" className="input" />
                            </div>
                            <div className="">
                                <div className="text-slate-600 uppercase text-sm">category</div>
                                <select name="category" value={forms.category} onChange={handleForms} className="input uppercase">
                                    <option value="">--Select--</option>
                                    {items.map((item, i) => (
                                        <option key={i} value={item.id}>{item.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 gap-5">
                        <div className="">
                            <div className="text-slate-600 text-sm uppercase">old price (optional) </div>
                            <input name="oldprice" value={forms.oldprice} onChange={handleForms} type="number" className="input" />
                        </div>
                        <div className="">
                            <div className="text-slate-600 text-sm uppercase">Current price</div>
                            <input name="currentprice" value={forms.currentprice} onChange={handleForms} type="number" className="input" />
                        </div>
                        <div className="">
                            <div className="text-slate-600 text-sm uppercase">Discount price (Optional)</div>
                            <input name="discount" value={forms.discount} onChange={handleForms} type="number" className="input" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-7">
                        <div className="">
                            <div className="">
                                <div className="ml-3 text-slate-600 uppercase text-sm mb-2">Upload Thumbnail Image</div>
                                {product?.id && <EditImageUploader refetchData={refetchData} views="big" tag="img1" imgData={product?.images[0]} handleImage={handleImage} />}
                            </div>
                        </div>
                        <div className="">
                            <div className="text-slate-600 text-sm uppercase ml-3 mb-2">Upload Product Images</div>
                            <div className="w-full overflow-x-auto scrollsdown">
                                <div className="w-fit flex items-center gap-5">
                                    {product?.id && <EditImageUploader refetchData={refetchData} views="small" imgData={product?.images[1]} tag="img2" handleImage={handleImage} />}
                                    {product?.id && <EditImageUploader refetchData={refetchData} views="small" imgData={product?.images[2]} tag="img3" handleImage={handleImage} />}
                                    {product?.id && <EditImageUploader refetchData={refetchData} views="small" imgData={product?.images[3]} tag="img4" handleImage={handleImage} />}
                                    {product?.id && <EditImageUploader refetchData={refetchData} views="small" imgData={product?.images[4]} tag="img5" handleImage={handleImage} />}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[30rem]">
                        <ReactQuill
                            theme='snow'
                            value={content}
                            onChange={setContent}
                            className='h-[25.5rem]'
                            modules={modules}
                        />
                        {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
                    </div>
                    <div className="w-fit ml-auto mt-6">
                        <button onClick={loadSubmission} className="bg-blue-500 text-white active:scale-110 hover:animate-pulse transition-all hover:scale-110 shadow-xl rounded-lg py-3 px-6 tetx-white uppercase">publish</button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default EditProduct