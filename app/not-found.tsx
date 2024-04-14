'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h4 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        Please move to&nbsp;
        <Link
          href='/profile/!1NMGhCcD3!'
          className='underline underline-offset-4'
        >
          /profile/!1NMGhCcD3!
        </Link>
      </h4>
    </div>
  )
}
