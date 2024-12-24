"use client"

import { user } from '@/data/user'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import MyButton from '../ui/MyButton'

const Tweetpost = () => {
    const handleImageUpload = () => { }
    const handlePost = () => { }

    return (
        <div className='flex gap-6 py-6 px-8 border-b-2 border-gray-900'>
            <div>
                <img
                    src={user.avatar}
                    alt={user.name}
                    className='size-12 rounded-full' />
            </div>
            <div className='flex-1'>
                <div
                    className='min-h-14 outline-none text-lg text-white empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)]'
                    contentEditable role='textbox'
                    data-placeholder='O que está acontecendo?'>
                </div>
                <div className='flex justify-between items-center'>
                    <div
                        className='cursor-pointer'
                        onClick={handleImageUpload}>
                        <FontAwesomeIcon
                            icon={faImage}
                            className='size-6' />
                    </div>
                    <div className='w-28'>
                        <MyButton
                            label={'Post'}
                            size={2}
                            onClick={handlePost}></MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweetpost