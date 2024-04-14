'use client'
import { cva, type VariantProps } from 'class-variance-authority'
import { memo, MouseEvent, useState } from 'react'

import cn from 'util/cn'
import Image from 'component/block/image'

// HeadShot
export const enum HEADSHOT_TYPE {
  no_image = '-1',
  image = '0',
  video = '1'
}

export const enum HEADSHOT_SIZE {
  xxSmall = 18,
  xSmall = 24,
  small = 36,
  medium = 48,
  large = 64,
  xLarge = 96,
  xxLarge = 128
}

const headshotVariant = cva(
  [
    'relative flex-shrink-0 flex-grow-0 basis-auto cursor-pointer rounded-full',
    'bg-no-photo bg-background-2nd bg-cover bg-center',
    'before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:rounded-full before:border before:border-glass_special-separators'
  ],
  {
    variants: {
      size: {
        [HEADSHOT_SIZE.xxSmall]: `h-[18px] w-[18px]`,
        [HEADSHOT_SIZE.xSmall]: `h-[24px] w-[24px]`,
        [HEADSHOT_SIZE.small]: `h-[36px] w-[36px]`,
        [HEADSHOT_SIZE.medium]: `h-[48px] w-[48px]`,
        [HEADSHOT_SIZE.large]: `h-[64px] w-[64px]`,
        [HEADSHOT_SIZE.xLarge]: `h-[96px] w-[96px]`,
        [HEADSHOT_SIZE.xxLarge]: `h-[128px] w-[128px]`
      } satisfies Record<HEADSHOT_SIZE, string>
    },
    defaultVariants: {
      size: HEADSHOT_SIZE.medium
    }
  }
)

type HeadShotVariants = VariantProps<typeof headshotVariant>

interface IHeadShot extends HeadShotVariants {
  type: HEADSHOT_TYPE
  headShotUrl?: string
  onClick?: (event: MouseEvent) => void
  className?: string
}
const Headshot = memo((props: IHeadShot) => {
  const { type, size, headShotUrl, onClick, className } = props

  const [useType] = useState<HEADSHOT_TYPE>(() => {
    if (!headShotUrl) {
      return HEADSHOT_TYPE.no_image
    }
    return type
  })

  const renderAvatar = () => {
    switch (useType) {
      case HEADSHOT_TYPE.image:
        return (
          <Image
            src={decodeURIComponent(headShotUrl || '')}
            alt='headShot-avatar'
            loading='lazy'
            className='overflow-hidden rounded-full object-cover'
            fill={true}
            fallback={null}
          />
        )
      case HEADSHOT_TYPE.no_image:
      default:
        return null
    }
  }

  return (
    <div className={cn(headshotVariant({ size }), className)} onClick={onClick}>
      {renderAvatar()}
    </div>
  )
})

Headshot.displayName = 'Headshot'

export default Headshot
