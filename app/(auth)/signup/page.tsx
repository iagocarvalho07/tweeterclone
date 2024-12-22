import Signupform from '@/components/auth/signupform'
import Logo from '@/components/ui/logo'
import Link from 'next/link'
import React from 'react'


const page = () => {
    return (
        <div className='max-w-lg mx-auto mt-12 px-6'>
            <Logo size={56} />
            <h1>Crie sua conta</h1>
            <div className='mt-10 mb-14 flex flex-col gap-6'>
               <Signupform/>
            </div>

            <div className='flex flex-col gap-4 justify-center items-center md:flex-row' >
                <div className='text-gray-500'> Já tem uma conta?</div>
                <Link href={'/signin'} className='hover:underline'>Entrar</Link>
            </div>
        </div>
    )
}

export default page