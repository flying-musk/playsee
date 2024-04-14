import { notFound } from 'next/navigation'

import { getProfilePosts } from 'api/post'
import { getProfile } from 'api/profile'
import ProfilePage from 'component/page/profile/profilePage'
import { IParams } from 'type/common'

export default async function Page({ params }: { params: IParams }) {
  const userId = decodeURIComponent(params.user_id)

  try {
    const [{ data: profileData }, { data: profilePostData }] =
      await Promise.all([
        getProfile({ user_id: userId }),
        getProfilePosts({
          user_id: userId,
          page_token: ''
        })
      ])

    return (
      <ProfilePage
        userId={userId}
        profile={profileData}
        profilePost={profilePostData}
      />
    )
  } catch (error) {
    console.log('render profile error', error)
    notFound()
  }
}
