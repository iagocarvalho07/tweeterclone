import HomeFeed from '@/components/home/HomeFeed'
import Homeheader from '@/components/home/Homeheader'
import Tweetpost from '@/components/teewt/Tweetpost'
import React from 'react'

const page = () => {
  return (
    <div>
      <Homeheader/>
      <Tweetpost/>
      <HomeFeed/>
    </div>
  )
}

export default page