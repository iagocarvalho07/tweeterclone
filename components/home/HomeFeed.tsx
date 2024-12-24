import React from 'react'
import TweetItem from '../teewt/TweetItem'
import { tweet } from '@/data/tweeter'

const HomeFeed = () => {
    return (
        <div>
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />



        </div>
    )
}

export default HomeFeed