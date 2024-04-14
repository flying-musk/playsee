import { cva, type VariantProps } from 'class-variance-authority'
import cn from 'util/cn'

const spinnerVariants = cva(
  [
    'absolute left-1/2 top-1/2',
    'animate-spinner-rotate rounded-full border-playseeGray-gray4 border-l-transparent'
  ],
  {
    variants: {
      $size: {
        sm: 'h-[14px] w-[14px] border-[3px]',
        md: 'h-[24px] w-[24px] border-[4px]'
      }
    },
    defaultVariants: {
      $size: 'md'
    }
  }
)

type SpinnerVariants = VariantProps<typeof spinnerVariants>

const Spinner = ({ $size }: SpinnerVariants) => {
  return <div className={cn(spinnerVariants({ $size }))} />
}

export default Spinner
