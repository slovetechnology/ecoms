
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Apis, AuthGeturl } from '../Components/Utils/Api'
import { useDispatch } from 'react-redux'
import { dispatchAdmin } from '../app/reducer'

const Admins = ({ children }) => {
    const navigate = useNavigate()
    const [allowed, setAllowed] = useState(false)
    const dispatch = useDispatch()

    const fetchUser = useCallback(async () => {
        const res = await AuthGeturl(Apis.users.get_account)
        if (res.status === 200) {
            setAllowed(true)
            dispatch(dispatchAdmin(res.msg))
        } else {
            navigate('/login')
        }
    }, [])
    useEffect(() => {
        fetchUser()
    }, [fetchUser])
    if (allowed)
        return children
}

export default Admins