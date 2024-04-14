export interface IUser {
  user_id: string
  uid: string
  name: string
  full_name: string
  level: number // 0=normal; 1=creator; 2=biz w/o location; 3=biz; 4=勾勾
  verified_status: number //0 no, 1 yes
  is_bot: number // 0=not bot; 1=bot
  is_following: number // 0=not following, 1=following,  2=follow req
  is_private: number // 0=public account, 1=private account
  is_block: boolean
  head_shot: {
    id: string
    type: string // 0=map, 1=photo, 2=video
    timestamp: number // default=0
    large_headshot_url: string // large size of headshot
    headshot_url: string // normal size of headshot
    small_headshot_url: string // small size of headshot
    video_headshot_url: string // video headshot
  }
  // campaign?: CAMPAIGN_STRUCT (optional)
}