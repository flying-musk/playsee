import { IPost, IPostVideo } from 'type/post'

function mapPostToPostVideo(post: IPost): IPostVideo {
  return {
    post: {
      id: post.post_id,
      desc: post.desc,
      created_at: post.created_at,
      cover_img_url: post.display_resources.middle_cover_url,
      video_url: post.display_resources.video_url,
      comment_count: post.count.replies,
      repost_count: post.repost.count,
      like_count: post.count.favorites,
      is_favorite: post.is_favorite,
      thumbnail_url: post.display_resources.thumbnail_url
    },
    geo: {
      ...post.geo.poi,
      id: post.geo.poi.place_id,
      name: post.geo.poi.name
    },
    user: {
      user_id: post.owner.user_id,
      name: post.owner.name,
      uid: post.owner.uid,
      is_private: post.owner.is_private,
      is_following: post.owner.is_following,
      head_shot: post.owner.head_shot
    }
  }
}

export default mapPostToPostVideo
