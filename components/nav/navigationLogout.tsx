"use client"

import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useRouter } from 'next/navigation'
import React from 'react'

const NavigationLogout = () => {
    const router = useRouter();

    const handleClickLogout = ()=>{
        router.replace('/signin');
    }

    return (
        <div onClick={handleClickLogout} className={`cursor-pointer flex items-center gap-6 py-3 opacity-50 hover:opacity-100 `}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='size-6' />
            <div className='text-lg'>Sair</div>
        </div>
    )
}

export default NavigationLogout