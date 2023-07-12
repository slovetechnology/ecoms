import React, { useEffect, useState } from 'react'
import { BsClock, BsStarFill } from 'react-icons/bs'
import { ImUser } from 'react-icons/im'
import { formatDate } from '../../../Components/Utils/Functions'
import {
    BsEmojiFrown,
    BsEmojiNeutral,
    BsEmojiSmile,
    BsEmojiLaughing,
    BsEmojiHeartEyes,
} from 'react-icons/bs'

const Icons = [
    BsEmojiFrown,
    BsEmojiNeutral,
    BsEmojiSmile,
    BsEmojiLaughing,
    BsEmojiHeartEyes,
]
const SingleReview = ({item}) => {
    const [len, setLen] = useState(60)
    const contentLen = len !== 0 ? item.content.length > 0 ? item.content.slice(0, len) : item.content : item.content

    const handleLen = () => {
        if(len !== 0) {
            setLen(0)
        }else {
            setLen(60)
        }
    }
    return (
        <div className="mb-3">
            <div className="flex gap-5">
                <div className="text-3xl text-slate-400 rounded-full border mr-3 self-start p-2">
                    <ImUser />
                </div>
                <div className="bg-slate-50 py-1 px-2.5 rounded-lg shadow-lg rev">
                    <div className="text-sm font-semibold capitalize text-slate-500">{item.username}</div>
                    <div className="text-xs flex items-center gap-2"> <BsClock /> {formatDate(item.createdAt)}</div>
                    <div className="flex items-center gap-2">
                        {new Array(parseInt(item.rating)).fill().map((item, i) => (
                            <BsStarFill key={i} className='text-orange-400' />
                        ))}
                    </div>
                    <div className="absolute top-4 right-4">{Icons.map((Data, i) => {
                        return (
                           Data.name === item.status && <Data key={i} className='text-xl text-slate-500' /> 
                        )
                    })} </div>
                    <div className="text-sm text-slate-600 whitespace-pre-wrap">{contentLen}</div>
                    <div onClick={handleLen} className="text-right cursor-pointer text-indigo-600">read {len === 0 ? 'less' : 'more'}...</div>
                </div>
            </div>
        </div>
    )
}

export default SingleReview