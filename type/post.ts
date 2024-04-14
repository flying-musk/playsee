import { IPlace } from './place'
import { IUser } from './user'

interface IPostCount {
  favorites: number
  replies: number
  views: number
}

export interface IMedia {
  id: string
  type: string // "0"=map, "1"=photo, "2"=vdo
  timestamp: number // default=0
  large_headshot_url: string // large size of headshot
  headshot_url: string // normal size of headshot
  small_headshot_url: string // small size of headshot
  video_headshot_url: string // video headshot
}

export interface IPostUser {
  user_id: string
  uid: string
  name: string
  full_name: string
  level: number // 0=normal; 1=creator; 2=biz w/o location; 3=biz; 4=勾勾
  verified_status: number //0 no, 1 yes
  is_bot: number // 0=not bot; 1=bot
  is_following: number // 0=not flwing, 1=flwing,  2=flw req
  is_private: number // 0=pubilc account, 1=private account
  is_block: boolean
  head_shot: IMedia
}

interface IDisplayResource {
  cover: string // !BO_J2RiH_!_c.jpg,
  cover_url: string // https://g-pst.placeyapp.com/stk/!BO_J2RiH_!_c.jpg,
  middle_cover: string // !BO_J2RiH_!_c.jpg,
  middle_cover_url: string // https://g-pst.placeyapp.com/stk/!BO_J2RiH_!_c.jpg,
  preview: string // !BO_J2RiH_!.jpg,
  preview_url: string // https://g-pst.placeyapp.com/stk/!BO_J2RiH_!.jpg,
  thumbnail: string // !BO_J2RiH_!_n.jpg,
  thumbnail_url: string // https://g-pst.placeyapp.com/stk/!BO_J2RiH_!_n.jpg,
  video_url: string // https://g-pst.placeyapp.com/vdo/!BO_J2RiH_!.mp4,
  hls_file_url: string
  hls_file_s0_url: string
  hls_file_s1_url: string
}

interface IRepost {
  post_id: string
  is_reposted: boolean // 代表有人repost這篇
  is_reposted_by_me: boolean // 代表自己有repost這篇
  created_at: number // 這篇被repost的時間點
  reposter_list: any[] // 用來顯示reposted by誰
  count: number //repost的人數
  my_following_count: number //repost的人裡面我的following的數量
  show_repost_icon: boolean // 決定要不要在profile秀repost icon
}

export interface IPost {
  post_id: string
  created_at: number
  rotation: string // 舊版 post 會是 "", 新版 post default "0"
  desc: string
  is_favorite: boolean
  is_official: boolean
  is_promote_create_ads: boolean // 為推薦廣告的 user
  count: IPostCount
  is_collect: boolean
  owner: IPostUser
  geo: {
    poi: IPlace
  }
  is_private: number // 0=pubilc post, 1=private post,
  duration: number
  is_booster: boolean
  interests: string[]
  display_resources: IDisplayResource
  repost: IRepost
  // ...
}

export interface IPostVideo {
  post: {
    id: string
    cover_img_url: string
    video_url: string
    desc: string
    like_count: number
    repost_count: number
    comment_count: number
    is_favorite: boolean
    thumbnail_url: string
    created_at: number
  }
  geo: IPlace & {
    id: string
    name: string
  }
  user: {
    user_id: string
    uid: string
    name: string
    is_following: number
    is_private: number
    head_shot: IUser['head_shot']
  }
  _original?: IPost // for debug
}