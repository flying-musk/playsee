'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { ReactComponent as ProfileFill } from 'asset/icon/tab/account_f_big.svg'
import { ReactComponent as Profile } from 'asset/icon/tab/account_s_big.svg'
import { ReactComponent as PlayFill } from 'asset/icon/tab/play_f_big.svg'
import { ReactComponent as Play } from 'asset/icon/tab/play_s_big.svg'
import { ReactComponent as CommunityFill } from 'asset/icon/tab/us_f_big.svg'
import { ReactComponent as Community } from 'asset/icon/tab/us_s_big.svg'

const NavLink = (props: React.ComponentPropsWithoutRef<typeof Link>) => {
  return (
    <Link
      {...props}
      className='mx-auto flex min-w-0 items-center space-x-[16px] rounded-[12px] bg-transparent p-[16px] text-2xl text-label-l1 hover:bg-background-2nd lg:mx-[32px] lg:rounded-full lg:p-[8px]'
    />
  )
}

const NavLabel = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) => {
  return (
    <span
      {...props}
      className='hidden min-w-0 flex-shrink flex-grow basis-0 text-ellipsis lg:inline-block'
    >
      {children}
    </span>
  )
}

const svgClassName = 'w-[32px] h-[32px] fill-current flex-shrink-0'

const Sidebar = () => {
  const pathname = usePathname()
  const isSpot = pathname === '/spot'
  const isCommunity = pathname === '/community'
  const isProfile = pathname === '/profile/!1NMGhCcD3!'

  return (
    <div className='fixed top-[--fixed-top] max-h-0 min-h-[inherit] w-[--left-sidebar-width] flex-shrink-0 flex-grow-0 p-[8px] shadow-[inset_-1px_0_0_0_var(--glass-special-separators)] lg:space-y-[16px] lg:px-0 lg:py-[16px]'>
      <NavLink href='/spot' title='Spot'>
        {isSpot ? (
          <PlayFill className={svgClassName} />
        ) : (
          <Play className={svgClassName} />
        )}
        <NavLabel>Spot</NavLabel>
      </NavLink>
      <NavLink href='/community' title='Community' className='community'>
        {isCommunity ? (
          <CommunityFill className={svgClassName} />
        ) : (
          <Community className={svgClassName} />
        )}
        <NavLabel>Community</NavLabel>
      </NavLink>
      <NavLink href='/profile/!1NMGhCcD3!' title='Profile'>
        {!isSpot && isProfile ? (
          <ProfileFill className={svgClassName} />
        ) : (
          <Profile className={svgClassName} />
        )}
        <NavLabel>Profile</NavLabel>
      </NavLink>
    </div>
  )
}

export default Sidebar
