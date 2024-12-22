'use client'


import { User } from '@/types/user'
import Link from 'next/link'
import React from 'react'
import MyButton from './MyButton'

type Props = {
    user: User
}

const RecomentaditonItem = ({ user }: Props) => {
    const [isFollowing, setIsFollowing] = React.useState(false)
    function handleFollowButton(): void {
        setIsFollowing(true)
    }

    return (
        <div className='flex items-center gap-4'
        ><div className='size-10 mr-2 rounded-full overflow-hidden'>
                <Link href={user.slug}>
                    <img src={user.avatar} alt={user.name} className='size-full' />
                </Link>
            </div>
            <div className='flex-1 overflow-hidden'>
                <Link href={user.slug}>
                    <div className='font-bold'>{user.name}</div>
                </Link>
                <div className='text-sm text-gray-400'>{user.postCount} Posts</div>
            </div>
            <div className='pl-2 w-20'>
                {!isFollowing && <MyButton label="Seguir" size={3} onClick={handleFollowButton} />}

            </div>


        </div>
    )
}

export default RecomentaditonItem


export const RecomentaditonItemSkeleton = () => {
    return (
        <div className='flex items-center gap-4 animate-pulse'>
            <div className='size-10 mr-2 rounded-full overflow-hidden'>
                <div className='bg-gray-600 size-full'></div>
            </div>
            <div className='flex-1 overflow-hidden'>
                <div className='bg-gray-600 w-3/4 h-4'></div>
                <div className='bg-gray-600 w-1/4 h-4'></div>
            </div>
            <div className='pl-2 w-20'>
                <div className='bg-gray-600 w-3/4 h-4'></div>
            </div>
        </div>
    )
}