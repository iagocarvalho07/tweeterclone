"use client";

import { useRouter } from 'next/navigation';
import React from 'react'
import MyInput from '../ui/MyInput';
import MyButton from '../ui/MyButton';

const Signinform = () => {
  const router = useRouter()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleEnterButton = async () => {
    router.replace('/home')
  }
  return (
    <div className='gap-6 flex flex-col'>
      <MyInput placeholder='Digite Seu email' value={email} onChange={e => setEmail(e)} />

      <MyInput password placeholder='Digite Sua senha' value={password} onChange={e => setPassword(e)} />

      <MyButton label='Entrar' onClick={handleEnterButton} size={1}></MyButton>
    </div>
  )
}

export default Signinform