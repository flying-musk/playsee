import { IProfilePost } from 'type/profile'

export const getProfilePosts = async (req: {
  user_id: string
  page_token: string
}): Promise<{ data: IProfilePost }> => {
  const data = await fetch(`http://localhost:3000/api/profile/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
  }).then(res => res.json())

  if (data.error) {
    throw data.error
  }
  
  return { data }
}
