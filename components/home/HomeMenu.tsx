import React from 'react'
import Logo from '../ui/logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker } from '@fortawesome/free-solid-svg-icons/faMarker'
import { faHouse, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import SearchInput from '../ui/SearchInput'
import Navigation from '../nav/navigation'

type Props = {
    closeAction: () => void
}

const HomeMenu = ({ closeAction }: Props) => {
    return (
        <div className='fixed inset-0 p-6 bg-black'>
            <div className='flex justify-between items-center'>
                <Logo size={32} />
                <div className='cursor-pointer flex justify-center items-center size-12 rounded-full border-2 border-gray-900'
                    onClick={closeAction}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className='my-6'>
                <SearchInput />
            </div>
            <div>
            <nav className='mt-11'>
                        <Navigation label={'Pagina Inicial'} icon={faHouse} href={'/home'} active={false} />
                        <Navigation label={'Perfil'} icon={faUser} href={'/profile'} active={false} />
                    </nav>
            </div>
           
        </div>
    )
}

export default HomeMenu