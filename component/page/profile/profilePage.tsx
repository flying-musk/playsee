'use client'

import { useEffect, useState, useRef } from 'react'
import { IProfileData, IProfilePost } from 'type/profile'
import Headshot from 'component/block/headshot'
import { Button } from 'component/block/button'
import { getProfilePosts } from 'api/post'
import Spinner from 'component/block/spinner'
import { HEADSHOT_TYPE } from 'component/block/headshot'

interface IProfilePage {
  userId: string
  profile: IProfileData
  profilePost: IProfilePost
}
const ProfilePage = (props: IProfilePage) => {
  const [pageToken, setPageToken] = useState(props.profilePost.page_token)
  const [posts, setPosts] = useState(
    props.profilePost.post_list.map(post => ({
      coverUrl: post.display_resources.thumbnail_url,
      locationName: post.geo.poi.name,
      desc: post.desc,
      postId: post.post_id
    }))
  )

  const observer = useRef<IntersectionObserver | null>(null)
  const lastPostRef = useRef(null)

  const fetchMorePosts = async () => {
    console.log('enter fetching more posts')
    try {
      const { data } = await getProfilePosts({
        user_id: props.userId,
        page_token: pageToken
      })
      console.log(data)
      setPageToken(data.page_token)
      setPosts(
        posts.concat(
          data.post_list.map(post => ({
            coverUrl: post.display_resources.thumbnail_url,
            locationName: post.geo.poi.name,
            desc: post.desc,
            postId: post.post_id
          }))
        )
      )
    } catch (error) {
      console.error('Error fetching profile posts:', error)
    }
  }

  useEffect(() => {
    observer.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && pageToken !== 'NO_MORE_DATA') {
          fetchMorePosts()
        }
      },
      { threshold: 0.5 }
    )

    if (lastPostRef.current) {
      observer.current.observe(lastPostRef.current)
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [pageToken])

  return (
    <div className='flex justify-center text-[#314146]'>
      <div className='flex max-w-[480px] grow flex-col'>
        <div className='p-[16px] text-center text-[16px]'>
          {props.profile.user.name}
        </div>
        <div className='flex gap-[32px] p-[16px]'>
          <Headshot
            type={HEADSHOT_TYPE.image}
            size={96}
            headShotUrl={props.profile.user.head_shot.large_headshot_url}
          />
          <div className='flex grow gap-[8px] self-center'>
            <div className='grow text-center'>
              <div className='text-[20px]'>{props.profile.count.follower}</div>
              <div className='text-[12px]'>Followers</div>
            </div>
            <div className='grow text-center'>
              <div className='text-[20px]'>
                {props.profile.count.following +
                  props.profile.count.following_hashtag +
                  props.profile.count.following_location}
              </div>
              <div className='text-[12px]'>Following</div>
            </div>
            <div className='grow text-center'>
              <div className='text-[20px]'>{props.profile.count.joined}</div>
              <div className='text-[12px]'>Joined</div>
            </div>
          </div>
        </div>
        <div className='px-[16px]'>
          <div>{props.profile.user.name}</div>
          <div>{props.profile.profile.public_info.about}</div>
        </div>
        <div className='flex gap-[8px] p-[16px]'>
          <Button
            className={
              'grow rounded-[6px] bg-[#F2F4F5] p-[6px] text-center text-[#314146]'
            }
          >
            Edit Profile
          </Button>
          <div
            className={
              'flex items-center justify-center rounded-[6px] bg-[#F2F4F5] p-[6px] text-[#314146]'
            }
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.26 7.555L8.63 13.6525C8.5625 13.7125 8.4725 13.75 8.375 13.75C8.165 13.75 8 13.585 8 13.375V10C4.25 10 2.1725 11.1175 1.2275 12.4825C1.0625 12.715 0.664999 12.6325 0.619999 12.3625C-0.295001 6.505 5 4 8 4V0.625C8 0.5275 8.0375 0.4375 8.0975 0.37C8.24 0.22 8.48 0.2125 8.63 0.3475L15.26 6.445C15.275 6.46 15.29 6.475 15.305 6.49C15.5825 6.7975 15.56 7.27 15.26 7.555Z'
                fill='#314146'
              />
            </svg>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-[12px] pt-[16px]'>
          {posts.map((post, index) => (
            <div
              ref={posts.length === index + 1 ? lastPostRef : null}
              key={post.postId}
              className='relative flex h-[176px]'
            >
              <img src={post.coverUrl} alt={post.desc} />
              <div className='absolute bottom-[6px] left-[6px] text-[14px] text-[#ffffff]'>
                {post.locationName.substring(0, 12) + '...'}
              </div>
            </div>
          ))}
        </div>
        {pageToken !== 'NO_MORE_DATA' ? (
          <div className='relative p-[32px]'>
            <Spinner $size='md' />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default ProfilePage
