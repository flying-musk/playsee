'use client'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import cn from 'util/cn'

const buttonVariants = cva(
  'ease relative flex flex-nowrap items-center justify-center border-[1px] border-transparent text-md font-semibold transition-all duration-300 enabled:cursor-pointer',
  {
    variants: {
      $variant: {
        primary: 'bg-primary-p1 text-primary-on_primary',
        secondary: 'bg-background-2nd text-label-l1',
        third: 'bg-third-p1 text-third-on_third',
        outline:
          'border-label-l3 bg-background-1st text-label-l1 disabled:text-label-l3',
        'outline-white':
          'border-label_still-l1 bg-transparent text-label_still-l1',
        text: 'bg-transparent text-primary-p1',
        'text-white': 'bg-transparent text-label_still-l1',
        'text-still': 'bg-transparent text-label-l1 disabled:text-label-l3'
      },
      $radius: {
        sm: 'rounded-[2px]',
        md: 'rounded-[6px]',
        lg: 'rounded-[8px]',
        xl: 'rounded-[12px]',
        round: 'rounded-full'
      }
    },
    defaultVariants: {
      $variant: 'primary',
      $radius: 'md'
    }
  }
)
export type ButtonVariants = VariantProps<typeof buttonVariants>

const sizeVariants = cva('', {
  variants: {
    $size: {
      xs: 'px-[6px] py-[3px]',
      sm: 'px-[12px] py-[6px]',
      md: 'px-[14px] py-[10px]',
      lg: 'px-[18px] py-[14px]',
      // Temp xl size
      xl: 'px-[24px] py-[18px]'
    }
  },
  defaultVariants: {
    $size: 'md'
  }
})

const iconSizeVariants = cva('', {
  variants: {
    $size: {
      xs: 'h-[16px] w-[16px]',
      sm: 'h-[24px] w-[24px]',
      md: 'h-[32px] w-[32px]',
      lg: 'h-[40px] w-[40px]',
      xl: 'h-[48px] w-[48px]'
    }
  },
  defaultVariants: {
    $size: 'md'
  }
})

export type SizeVariants = VariantProps<typeof sizeVariants>

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants,
    SizeVariants {
  asChild?: boolean
  $icon?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      $variant,
      $radius,
      $size,
      asChild = false,
      $icon = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({ $radius, $variant }),
          $icon ? iconSizeVariants({ $size }) : sizeVariants({ $size }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
