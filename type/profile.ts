import { IPost } from './post'
import { IUser } from './user'

export interface IProfilePost {
  page_token: string
  post_list: IPost[]
  interest_mapping: { [x: string]: string[] }
}

export interface IProfileData {
  count: {
    follower: number
    following: number
    following_hashtag: number
    following_location: number
    post: number
    repost: number
    joined: number
  }
  profile: {
    public_info: {
      about: string | ''
    }
    biz_info: {
      web: string | ''
    }
  }
  user: IUser
}
