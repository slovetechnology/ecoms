import React, { useCallback, useEffect, useState } from 'react'
import { Apis, Geturl, offlineServer } from '../../../Components/Utils/Api'
import { Link } from 'react-router-dom'

const Brands = () => {
    const [brands, setBrands] = useState([])
    const fetchAllBrands = useCallback(async () => {
        const res = await Geturl(Apis.products.all_brand)
        if (res.status === 200) return setBrands(res.msg)
    }, [])

    useEffect(() => {
        fetchAllBrands()
    }, [fetchAllBrands])
    return (
        <section>
            <div>
                <div className="w-11/12 mx-auto overflow-x-auto scrollsdown">
                    <div className="w-fit flex items-center gap-5 py-10">
                        {brands.map((item, i) => (
                            item?.logo && <Link to='' className="h-[5rem] md:h-[7rem] w-[7rem] md:w-[10rem]" key={i}>
                                <img src={`${offlineServer}/brands/${item.logo}`} alt="" className="w-full h-full" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands