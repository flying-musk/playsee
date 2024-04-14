import { NextResponse } from 'next/server'
import randomDelay from 'util/randomDelay'
import data from './data.json'

const page_size = 12
export async function POST(request: Request) {
  const { page_token, user_id } = await request.json()

  if (decodeURIComponent(user_id) !== '!1NMGhCcD3!') {
    return NextResponse.json(
      {
        error: 'User not found'
      },
      {
        status: 404
      }
    )
  }

  let page = 1
  if (page_token) {
    page = parseInt(page_token)
  }

  let nextPage = `${page + 1}`
  const page_list = data.slice((page - 1) * page_size, page * page_size)
  if (page_list.length < page_size) {
    nextPage = 'NO_MORE_DATA'
  }

  await randomDelay(100, 500)

  return NextResponse.json(
    {
      post_list: page_list,
      page_token: nextPage,
      server_timestamp: Date.now()
    },
    {
      status: 200
    }
  )
}
