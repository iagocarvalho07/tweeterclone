"use client";

import { useRouter } from 'next/navigation'
import React from 'react'
import MyInput from '../ui/MyInput'
import MyButton from '../ui/MyButton'

const Signupform = () => {

    const router = useRouter()
    const [name, setname] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
  
    const handleEnterButton = async () => {
      router.replace('/home')
    }
    return (
      <div className='gap-6 flex flex-col'>
        <MyInput placeholder='Digite Seu nome' value={name} onChange={e => setname(e)} />
        <MyInput placeholder='Digite Seu email' value={email} onChange={e => setEmail(e)} />
        <MyInput password placeholder='Digite Sua senha' value={password} onChange={e => setPassword(e)} />
        <MyButton label='Cadastre-se' onClick={handleEnterButton} size={1}></MyButton>
      </div>
    )
  
}

export default Signupform