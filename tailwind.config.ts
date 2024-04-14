import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        label: {
          l1: 'var(--label-l1)',
          l2: 'var(--label-l2)',
          l3: 'var(--label-l3)'
        },
        primary: {
          p1: 'var(--primary-p1)',
          p2: 'var(--primary-p2)',
          on_primary: 'var(--primary-on-primary)'
        },
        secondary: {
          p1: 'var(--secondary-p1)',
          p2: 'var(--secondary-p2)',
          on_secondary: 'var(--secondary-on-secondary)'
        },
        third: {
          p1: 'var(--third-p1)',
          p2: 'var(--third-p2)',
          on_third: 'var(--third-on-third)'
        },
        playseeGray: {
          gray1: 'var(--playseeGray-gray1)',
          gray2: 'var(--playseeGray-gray2)',
          gray3: 'var(--playseeGray-gray3)',
          gray4: 'var(--playseeGray-gray4)',
          gray5: 'var(--playseeGray-gray5)'
        },
        background: {
          b1: 'var(--background-b1)',
          '1st': 'var(--background-1st)',
          '2nd': 'var(--background-2nd)'
        },
        background_elevated: {
          b1: 'var(--background-elevated-b1)',
          '1st': 'var(--background-elevated-1st)',
          '2nd': 'var(--background-elevated-2nd)'
        },
        floating: 'var(--floating)',
        alert: 'var(--alert)',

        label_still: {
          l1: 'var(--label-still-l1)',
          l2: 'var(--label-still-l2)',
          l3: 'var(--label-still-l3)'
        },
        primary_still: {
          p1: 'var(--primary-still-p1)',
          p2: 'var(--primary-still-p2)',
          on_primary: 'var(--primary-still-on-primary)'
        },
        secondary_still: {
          p1: 'var(--secondary-still-p1)',
          p2: 'var(--secondary-still-p2)',
          on_secondary: 'var(--secondary-still-on-secondary)'
        },
        third_still: {
          p1: 'var(--third-still-p1)',
          p2: 'var(--third-still-p2)',
          on_third: 'var(--third-still-on-third)'
        },
        playseeGray_still: {
          gray1: 'var(--playseeGray-still-gray1)',
          gray2: 'var(--playseeGray-still-gray2)',
          gray3: 'var(--playseeGray-still-gray3)',
          gray4: 'var(--playseeGray-still-gray4)',
          gray5: 'var(--playseeGray-still-gray5)'
        },
        background_still: {
          b1: 'var(--background-still-b1)',
          '1st': 'var(--background-still-1st)',
          '2nd': 'var(--background-still-2nd)'
        },
        background_elevated_still: {
          b1: 'var(--background-still-elevated-b1)',
          '1st': 'var(--background-still-elevated-1st)',
          '2nd': 'var(--background-still-elevated-2nd)'
        },
        floating_still: 'var(--floating-still)',
        alert_still: 'var(--alert-still)',

        overlay: {
          light: 'var(--overlay-light)',
          still: 'var(--overlay-still)',
          thick: 'var(--overlay-thick)'
        },
        glass_special: {
          alpha_0: 'var(--glass-special-alpha-0)',
          tips: 'var(--glass-special-tips)',
          options: 'var(--glass-special-options)',
          separators: 'var(--glass-special-separators)'
        },
        glass_ios: {
          '20blur_light': 'var(--glass-ios-20blur-light)',
          '20blur_still': 'var(--glass-ios-20blur-still)'
        },
        glass_android: {
          light: 'var(--glass-android-light)',
          still: 'var(--glass-android-still)'
        }
      },
      fontSize: {
        '3xl': ['var(--font-size-3xl)', 'var(--line-height-3xl)'],
        '2xl': ['var(--font-size-2xl)', 'var(--line-height-2xl)'],
        xl: ['var(--font-size-xl)', 'var(--line-height-xl)'],
        lg: ['var(--font-size-lg)', 'var(--line-height-lg)'],
        md: ['var(--font-size-md)', 'var(--line-height-md)'],
        sm: ['var(--font-size-sm)', 'var(--line-height-sm)'],
        xs: ['var(--font-size-xs)', 'var(--line-height-xs)'],
        base: ['var(--font-size-md)', 'var(--line-height-md)']
      },
      lineHeight: {
        '3xl': 'var(--line-height-3xl)',
        '2xl': 'var(--line-height-2xl)',
        xl: 'var(--line-height-xl)',
        lg: 'var(--line-height-lg)',
        md: 'var(--line-height-md)',
        sm: 'var(--line-height-sm)',
        xs: 'var(--line-height-xs)',
        base: 'var(--line-height-md)'
      },
      backgroundImage: {
        'gradient-post': 'var(--gradient-post)'
      },
      dropShadow: {
        repost: [
          '0px 1px 3px rgba(0, 0, 0, 0.12)',
          '0px 0px 2px rgba(0, 0, 0, 0.12)'
        ]
      },
      zIndex: {
        header: 'var(--z-index-header)',
        'mobile-nav': 'var(--z-index-mobile-nav)',
        modal: 'var(--z-index-modal)',
        'modal-1': 'var(--z-index-modal-1)',
        alert: 'var(--z-index-alert)',
        'alert-1': 'var(--z-index-alert-1)',
        popover: 'var(--z-index-popover)',
        'popover-1': 'var(--z-index-popover-1)',
        download: 'var(--z-index-download)',
        toast: 'var(--z-index-toast)'
      }
    }
  },
  plugins: []
}
export default config
