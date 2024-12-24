"use client"

import React from 'react'
import Logo from '../ui/logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import HomeMenu from './HomeMenu'
import Tweetpost from '../teewt/Tweetpost'

const Homeheader = () => {
    const [showMenu, setShowMenu] = React.useState(false)
  return (
    <header className='lg:hidden flex justify-between p-6 border-b-2 border-gray-900'>
        <div className='lg:hidden'>
            <Logo size={24}/>
        </div>
        <div className='hidden lg:block text-2xl'>Pagina Inicial</div>
        <div className='cursor-pointer lg:hidden' onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faBars} className='size-6'/>
        </div>

        {showMenu && <HomeMenu closeAction={() => setShowMenu(false)}
        />
        }
    
    </header>
    
  )
}

export default Homeheader