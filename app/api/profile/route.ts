import { NextRequest, NextResponse } from 'next/server'
import randomDelay from 'util/randomDelay'
import data from './data.json'

export async function POST(request: NextRequest) {
  const { user_id } = await request.json()

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

  await randomDelay(100, 500)

  return NextResponse.json({
    ...data,
    server_timestamp: Date.now()
  })
}
