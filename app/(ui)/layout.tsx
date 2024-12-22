
import Navigation from '@/components/nav/navigation'
import NavigationLogout from '@/components/nav/navigationLogout'
import NavMyProfile from '@/components/nav/navMyProfile'
import Logo from '@/components/ui/logo'
import RecomendationArea from '@/components/ui/RecomendationArea'
import SearchInput from '@/components/ui/SearchInput'
import TrendArea from '@/components/ui/TrendArea'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <main className='min-h-screen flex justify-center mx-auto max-w-7xl'>
            <section
                className='hidden lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-r-2 border-gray-900'
            >
                <div className='flex-1 mt-6'>
                    <Logo size={24} />
                    <nav className='mt-11'>
                        <Navigation label={'Pagina Inicial'} icon={faHouse} href={'/home'} active={false} />
                        <Navigation label={'Perfil'} icon={faUser} href={'/profile'} active={false} />
                    </nav>
                </div>
                <div className='mb-6 flex flex-col gap-6'>
                    <NavigationLogout/>
                    <NavMyProfile/>
                </div>


            </section>
            <section className='flex-1 max-w-lg'>{children}</section>
            <section className='hidden lg:flex flex-col sticky gap-6 top-0 h-fit w-96 px-8 py-6 border-l-2 border-gray-900'>
                <SearchInput hideOnSearch/>
                <TrendArea/>
                <RecomendationArea/>

            </section>
        </main>
    )
}

export default layout