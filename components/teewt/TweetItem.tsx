"use client";

import { Tweet } from '@/types/tweet'
import { formatRelativeTime } from '@/utils/formatRelative';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import {faHeartCircleCheck, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

type Props = {
    tweet: Tweet;
    hideComments?: boolean;
}


const TweetItem = ({ tweet, hideComments }: Props) => {
    const [isLiked, setIsLiked] = React.useState(tweet.liked)
    const handleLikeButton = ()=>{
        setIsLiked(!isLiked)
    }


    return (
        <div className='flex gap-2 p-6 border-b-2 border-gray-900'>
            <div>
                <Link href={`/${tweet.user.slug}`}>
                    <img src={tweet.user.avatar} alt={tweet.user.name} className='size-10 rounded-full' />
                </Link>
            </div>
            <div className='flex-1'>
                <div className='flex flex-wrap items-center gap-x-2'>
                    <div className='font-bold text-lg'>
                        <Link href={`/${tweet.user.slug}`}>{tweet.user.name}</Link>
                    </div>
                    <div className='text-xs items-center'>@{tweet.user.slug} - {formatRelativeTime(tweet.dataPost)}</div>
                </div>
                <div className='py-4 text-lg'>{tweet.body}</div>
                {tweet.image &&
                    <div className='w-full'>
                        <img src={tweet.image} alt="" className='w-full rounded-2xl' />
                    </div>
                }
                 {!hideComments &&
                        <div className="flex-1">
                            <Link href={`/tweet/${tweet.id}`}>
                                <div className="inline-flex items-center gap-2 cursor-pointer">
                                    <FontAwesomeIcon icon={faComment} className="size-6" />
                                    <div className="text-lg">{tweet.commentCount}</div>
                                </div>
                            </Link>
                        </div>
                    }
                <div className='flex mt-6 text-gray-500'>
                    <div className='flex-1'>
                        <Link href={`/${tweet.id}`}>
                            <div className='inline-flex items-center gap-2 cursor-pointer'>
                                <FontAwesomeIcon icon={faComment} />
                                <div className='text-lg'>{tweet.commentCount}</div>
                            </div>
                        </Link>
                    </div>
                    <div className='flex-1'>
                        <div className='inline-flex items-center gap-2 cursor-pointer'>
                            <FontAwesomeIcon icon={faRetweet} />
                            <div className='text-lg'>{tweet.retweetCount}</div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div onClick={handleLikeButton} className={`inline-flex items-center gap-2 cursor-pointer ${isLiked && 'text-red-500'}`}>
                            <FontAwesomeIcon icon={isLiked ? faHeart : faHeartCircleCheck} />
                            <div className='text-lg'>{tweet.likeCount}</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TweetItem