import React from 'react'
import RecomentaditonItem, { RecomentaditonItemSkeleton } from './RecomentaditonItem'
import { user } from '@/data/user'

const RecomendationArea = () => {
  return (
    <div className='bg-gray-700 rounded-3xl'>
    <h2 className='text-xl p-6'>Quem seguir</h2>
    <div className='flex flex-col gap-4 p-6 pt-8'>
        <RecomentaditonItem user={user}/>
        <RecomentaditonItemSkeleton/>
    </div>
</div>
  )
}

export default RecomendationArea