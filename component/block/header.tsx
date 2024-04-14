'use client'
import Link from 'next/link'

import { ReactComponent as LogoText } from 'asset/icon/logo/playsee_logo_text.svg'
import { ReactComponent as Logo } from 'asset/icon/logo/Playsee_OA.svg'

const Header = () => {
  return (
    <div className='z-header fixed top-0 left-0 h-[--fixed-top] w-full bg-background-1st shadow-[inset_0_-1px_0_0_var(--glass-special-separators)]'>
      <div className='relative mx-auto flex h-[--fixed-top] w-full max-w-[1440px] items-center'>
        <Link
          href='/'
          title='Playsee'
          className='absolute left-[16px] top-1/2 flex -translate-y-1/2 transform items-center lg:left-[36px]'
        >
          <Logo className='mr-[8px]' />
          <LogoText />
        </Link>
      </div>
    </div>
  )
}

export default Header
