import Header from 'component/block/header'
import Sidebar from 'component/block/sidebar'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  robots: {
    follow: false,
    index: false
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div className='h-full'>
          <Header />
          <div className='relative top-[--fixed-top] mx-auto min-h-[calc(100vh_-_var(--fixed-top))] max-w-[1440px]'>
            <div className='mb-[-100vh_+_var(--fixed-top))] flex min-h-[inherit] relative z-0'>
              <Sidebar />
              <main className='flex-1 min-h-[inherit] pl-[--left-sidebar-width]'>{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
