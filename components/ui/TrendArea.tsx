import React from 'react'
import TrendItem, { TrendItemSkeleton } from './TrendItem'

const TrendArea = () => {
  return (
    <div className='bg-gray-700 rounded-3xl'>
        <h2 className='text-xl p-6'>Oque esta acontecendo</h2>
        <div className='flex flex-col gap-4 p-6 pt-8'>
            <TrendItem label={'#teste'} count={15815}/>
            <TrendItem label={'#teste'} count={15815}/>
            <TrendItemSkeleton/>
       
        </div>
    </div>
  )
}

export default TrendArea