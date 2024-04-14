import { IProfileData } from 'type/profile'

export const getProfile = async (req: {
  user_id: string
}): Promise<{ data: IProfileData }> => {
  const data = await fetch(`http://localhost:3000/api/profile`, {
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
