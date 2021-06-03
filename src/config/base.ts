import { colors } from './colors';
import { keyframes } from './keyframes';
import { variantOrder } from './order';
import type { Config } from '../interfaces';

export const defaultColors = {
  transparent: 'transparent',
  current: 'currentColor',
  light: colors.light,
  dark: colors.dark,
  black: colors.black,
  white: colors.white,
  gray: colors.coolGray,
  red: colors.red,
  yellow: colors.amber,
  green: colors.emerald,
  blue: colors.blue,
  indigo: colors.indigo,
  purple: colors.violet,
  pink: colors.pink,
  rose: colors.rose,
  fuchsia: colors.fuchsia,
  violet: colors.violet,
  cyan: colors.cyan,
  teal: colors.teal,
  emerald: colors.emerald,
  lime: colors.lime,
  amber: colors.amber,
  orange: colors.orange,
  'light-blue': colors.lightBlue,
  'warm-gray': colors.warmGray,
  'true-gray': colors.trueGray,
  'cool-gray': colors.coolGray,
  'blue-gray': colors.blueGray,
};

export const baseConfig: Config = {
  // purge: [],
  presets: [],
  prefixer: true,
  attributify: false,
  darkMode: 'class', // or 'media'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: defaultColors,
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      // float -> float/4 rem
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
      'shock': {
        animation: 'shock',
        transformOrigin: 'center bottom',
      },
      'flash': 'flash',
      'bubble': 'bubble',
      'rubber-band': 'rubberBand',
      'shake-x': 'shakeX',
      'shake-y': 'shakeY',
      'head-shake': 'headShake 1s ease-in-out',
      'swing': {
        animation: 'swing',
        transformOrigin: 'top center',
      },
      'tada': 'tada',
      'wobble': 'wobble',
      'jello': 'jello',
      'heart-beat': 'heartBeat 1s ease-in-out',
      'hinge': 'hinge 2s',
      'jack-in': 'jackInTheBox',
      'light-speed-in-left': 'lightSpeedInLeft',
      'light-speed-in-right': 'lightSpeedInRight',
      'light-speed-out-left': 'lightSpeedOutLeft',
      'light-speed-out-right': 'lightSpeedOutRight',
      'flip': {
        animation: 'flip',
        backfaceVisibility: 'visible',
      },
      'flip-in-x': {
        animation: 'flipInX',
        backfaceVisibility: 'visible',
      },
      'flip-in-y': {
        animation: 'flipInY',
        backfaceVisibility: 'visible',
      },
      'flip-out-x': {
        animation: 'flipOutX',
        backfaceVisibility: 'visible',
      },
      'flip-out-y': {
        animation: 'flipOutY',
        backfaceVisibility: 'visible',
      },
      'rotate-in': 'rotateIn',
      'rotate-in-down-left': 'rotateInDownLeft',
      'rotate-in-down-right': 'rotateInDownRight',
      'rotate-in-up-left': 'rotateInUpLeft',
      'rotate-in-up-right': 'rotateInUpRight',
      'rotate-out': 'rotateOut',
      'rotate-out-down-left': 'rotateOutDownLeft',
      'rotate-out-down-right': 'rotateOutDownRight',
      'rotate-out-up-left': 'rotateOutUpLeft',
      'rotate-out-up-right': 'rotateOutUpRight',
      'roll-in': 'rollIn',
      'roll-out': 'rollOut',
      'zoom-in': 'zoomIn',
      'zoom-in-down': 'zoomInDown',
      'zoom-in-left': 'zoomInLeft',
      'zoom-in-right': 'zoomInRight',
      'zoom-in-up': 'zoomInUp',
      'bounce-in': 'bounceIn 750ms',
      'bounce-in-down': 'bounceInDown',
      'bounce-in-left': 'bounceInLeft',
      'bounce-in-right': 'bounceInRight',
      'bounce-in-up': 'bounceInUp',
      'bounce-out': 'bounceOut 750ms',
      'bounce-out-down': 'bounceOutDown',
      'bounce-out-left': 'bounceOutLeft',
      'bounce-out-right': 'bounceOutRight',
      'bounce-out-up': 'bounceOutUp',
      'zoom-out': 'zoomOut',
      'zoom-out-down': 'zoomOutDown',
      'zoom-out-left': 'zoomOutLeft',
      'zoom-out-right': 'zoomOutRight',
      'zoom-out-up': 'zoomOutUp',
      'slide-in-down': 'slideInDown',
      'slide-in-left': 'slideInLeft',
      'slide-in-right': 'slideInRight',
      'slide-in-up': 'slideInUp',
      'slide-out-down': 'slideOutDown',
      'slide-out-left': 'slideOutLeft',
      'slide-out-right': 'slideOutRight',
      'slide-out-up': 'slideOutUp',
      'fade-in': 'fadeIn',
      'fade-in-down': 'fadeInDown',
      'fade-in-down-big': 'fadeInDownBig',
      'fade-in-left': 'fadeInLeft',
      'fade-in-left-big': 'fadeInLeftBig',
      'fade-in-right': 'fadeInRight',
      'fade-in-right-big': 'fadeInRightBig',
      'fade-in-up': 'fadeInUp',
      'fade-in-up-big': 'fadeInUpBig',
      'fade-in-top-left': 'fadeInTopLeft',
      'fade-in-top-right': 'fadeInTopRight',
      'fade-in-bottom-left': 'fadeInBottomLeft',
      'fade-in-bottom-right': 'fadeInBottomRight',
      'fade-out': 'fadeOut',
      'fade-out-down': 'fadeOutDown',
      'fade-out-down-big': 'fadeOutDownBig',
      'fade-out-left': 'fadeOutLeft',
      'fade-out-left-big': 'fadeOutLeftBig',
      'fade-out-right': 'fadeOutRight',
      'fade-out-right-big': 'fadeOutRightBig',
      'fade-out-up': 'fadeOutUp',
      'fade-out-up-big': 'fadeOutUpBig',
      'back-in-up': 'backInUp',
      'back-in-down': 'backInDown',
      'back-in-left': 'backInLeft',
      'back-in-right': 'backInRight',
      'back-out-up': 'backOutUp',
      'back-out-down': 'backOutDown',
      'back-out-left': 'backOutLeft',
      'back-out-right': 'backOutRight',
    },
    animationDuration: {
      DEFAULT: '1000ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
      1500: '1500ms',
      2000: '2000ms',
      2500: '2500ms',
      3000: '3000ms',
      // int >=0 -> int ms
    },
    animationDelay: {
      DEFAULT: '500ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
      1500: '1500ms',
      2000: '2000ms',
      2500: '2500ms',
      3000: '3000ms',
      // int >=0 -> int ms
    },
    animationIterationCount: {
      DEFAULT: '1',
      loop: 'infinite',
      'repeat-1': '1',
      'repeat-2': '2',
      'repeat-3': '3',
      'repeat-4': '4',
      'repeat-5': '5',
      'repeat-6': '6',
      'repeat-7': '7',
      'repeat-8': '8',
      'repeat-9': '9',
      'repeat-10': '10',
      'repeat-11': '11',
      'repeat-12': '12',
    },
    animationTimingFunction: {
      DEFAULT: 'ease',
      linear: 'linear',
      in: 'ease-in',
      out: 'ease-out',
      'in-out': 'ease-in-out',
    },
    backdropBlur: (theme) => theme('blur'),
    backdropBrightness: (theme) => theme('brightness'),
    backdropContrast: (theme) => theme('contrast'),
    backdropGrayscale: (theme) => theme('grayscale'),
    backdropHueRotate: (theme) => theme('hueRotate'),
    backdropInvert: (theme) => theme('invert'),
    backdropOpacity: (theme) => theme('opacity'),
    backdropSaturate: (theme) => theme('saturate'),
    backdropSepia: (theme) => theme('sepia'),
    backgroundColor: (theme) => theme('colors'),
    backgroundImage: {
      none: 'none',
      'gradient-1': 'linear-gradient(135deg, #FDEB71 10%, #F8D800 100%)',
      'gradient-2': 'linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%)',
      'gradient-3': 'linear-gradient(135deg, #FEB692 10%, #EA5455 100%)',
      'gradient-4': 'linear-gradient(135deg, #CE9FFC 10%, #7367F0 100%)',
      'gradient-5': 'linear-gradient(135deg, #90F7EC 10%, #32CCBC 100%)',
      'gradient-6': 'linear-gradient(135deg, #FFF6B7 10%, #F6416C 100%)',
      'gradient-7': 'linear-gradient(135deg, #81FBB8 10%, #28C76F 100%)',
      'gradient-8': 'linear-gradient(135deg, #E2B0FF 10%, #9F44D3 100%)',
      'gradient-9': 'linear-gradient(135deg, #F97794 10%, #623AA2 100%)',
      'gradient-10': 'linear-gradient(135deg, #FCCF31 10%, #F55555 100%)',
      'gradient-11': 'linear-gradient(135deg, #F761A1 10%, #8C1BAB 100%)',
      'gradient-12': 'linear-gradient(135deg, #43CBFF 10%, #9708CC 100%)',
      'gradient-13': 'linear-gradient(135deg, #5EFCE8 10%, #736EFE 100%)',
      'gradient-14': 'linear-gradient(135deg, #FAD7A1 10%, #E96D71 100%)',
      'gradient-15': 'linear-gradient(135deg, #FFD26F 10%, #3677FF 100%)',
      'gradient-16': 'linear-gradient(135deg, #A0FE65 10%, #FA016D 100%)',
      'gradient-17': 'linear-gradient(135deg, #FFDB01 10%, #0E197D 100%)',
      'gradient-18': 'linear-gradient(135deg, #FEC163 10%, #DE4313 100%)',
      'gradient-19': 'linear-gradient(135deg, #92FFC0 10%, #002661 100%)',
      'gradient-20': 'linear-gradient(135deg, #EEAD92 10%, #6018DC 100%)',
      'gradient-21': 'linear-gradient(135deg, #F6CEEC 10%, #D939CD 100%)',
      'gradient-22': 'linear-gradient(135deg, #52E5E7 10%, #130CB7 100%)',
      'gradient-23': 'linear-gradient(135deg, #F1CA74 10%, #A64DB6 100%)',
      'gradient-24': 'linear-gradient(135deg, #E8D07A 10%, #5312D6 100%)',
      'gradient-25': 'linear-gradient(135deg, #EECE13 10%, #B210FF 100%)',
      'gradient-26': 'linear-gradient(135deg, #79F1A4 10%, #0E5CAD 100%)',
      'gradient-27': 'linear-gradient(135deg, #FDD819 10%, #E80505 100%)',
      'gradient-28': 'linear-gradient(135deg, #FFF3B0 10%, #CA26FF 100%)',
      'gradient-29': 'linear-gradient(135deg, #FFF5C3 10%, #9452A5 100%)',
      'gradient-30': 'linear-gradient(135deg, #F05F57 10%, #360940 100%)',
      'gradient-31': 'linear-gradient(135deg, #2AFADF 10%, #4C83FF 100%)',
      'gradient-32': 'linear-gradient(135deg, #FFF886 10%, #F072B6 100%)',
      'gradient-33': 'linear-gradient(135deg, #97ABFF 10%, #123597 100%)',
      'gradient-34': 'linear-gradient(135deg, #F5CBFF 10%, #C346C2 100%)',
      'gradient-35': 'linear-gradient(135deg, #FFF720 10%, #3CD500 100%)',
      'gradient-36': 'linear-gradient(135deg, #FF6FD8 10%, #3813C2 100%)',
      'gradient-37': 'linear-gradient(135deg, #EE9AE5 10%, #5961F9 100%)',
      'gradient-38': 'linear-gradient(135deg, #FFD3A5 10%, #FD6585 100%)',
      'gradient-39': 'linear-gradient(135deg, #C2FFD8 10%, #465EFB 100%)',
      'gradient-40': 'linear-gradient(135deg, #FD6585 10%, #0D25B9 100%)',
      'gradient-41': 'linear-gradient(135deg, #FD6E6A 10%, #FFC600 100%)',
      'gradient-42': 'linear-gradient(135deg, #65FDF0 10%, #1D6FA3 100%)',
      'gradient-43': 'linear-gradient(135deg, #6B73FF 10%, #000DFF 100%)',
      'gradient-44': 'linear-gradient(135deg, #FF7AF5 10%, #513162 100%)',
      'gradient-45': 'linear-gradient(135deg, #F0FF00 10%, #58CFFB 100%)',
      'gradient-46': 'linear-gradient(135deg, #FFE985 10%, #FA742B 100%)',
      'gradient-47': 'linear-gradient(135deg, #FFA6B7 10%, #1E2AD2 100%)',
      'gradient-48': 'linear-gradient(135deg, #FFAA85 10%, #B3315F 100%)',
      'gradient-49': 'linear-gradient(135deg, #72EDF2 10%, #5151E5 100%)',
      'gradient-50': 'linear-gradient(135deg, #FF9D6C 10%, #BB4E75 100%)',
      'gradient-51': 'linear-gradient(135deg, #F6D242 10%, #FF52E5 100%)',
      'gradient-52': 'linear-gradient(135deg, #69FF97 10%, #00E4FF 100%)',
      'gradient-53': 'linear-gradient(135deg, #3B2667 10%, #BC78EC 100%)',
      'gradient-54': 'linear-gradient(135deg, #70F570 10%, #49C628 100%)',
      'gradient-55': 'linear-gradient(135deg, #3C8CE7 10%, #00EAFF 100%)',
      'gradient-56': 'linear-gradient(135deg, #FAB2FF 10%, #1904E5 100%)',
      'gradient-57': 'linear-gradient(135deg, #81FFEF 10%, #F067B4 100%)',
      'gradient-58': 'linear-gradient(135deg, #FFA8A8 10%, #FCFF00 100%)',
      'gradient-59': 'linear-gradient(135deg, #FFCF71 10%, #2376DD 100%)',
      'gradient-60': 'linear-gradient(135deg, #FF96F9 10%, #C32BAC 100%)',

      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
    },
    backgroundOpacity: (theme) => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    blur: {
      DEFAULT: '8px',
      0: '0',
      sm: '4px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '40px',
      '3xl': '64px',
    },
    borderColor: (theme) => ({
      DEFAULT: theme('colors.gray.200', 'currentColor'),
      ...(theme('colors') ?? {}),
    }),
    borderOpacity: (theme) => theme('opacity'),
    borderRadius: {
      DEFAULT: '0.25rem',
      none: '0px',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      // nxl
      '1': '100%',
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
      // int >=0 -> int px
    },
    boxShadow: {
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    boxShadowColor: (theme) => theme('colors'),
    brightness: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
    caretColor: (theme) => ({
      auto: 'auto',
      ...(theme('colors') ?? {}),
    }),
    caretOpacity: (theme) => theme('opacity'),
    container: {},
    content: {
      DEFAULT: '""',
      'open-quote': 'open-quote',
      'close-quoto': 'close-quote',
      'open-square': '"["',
      'close-square': '"]"',
      'open-curly': '"{"',
      'close-curly': '"}"',
      'open-bracket': '"("',
      'close-bracket': '")"',
    },
    contrast: {
      0: '0',
      50: '.5',
      75: '.75',
      100: '1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
      'not-allowed': 'not-allowed',
    },
    divideColor: (theme) => theme('borderColor'),
    divideOpacity: (theme) => theme('borderOpacity'),
    divideWidth: (theme) => theme('borderWidth'),
    dropShadow: {
      DEFAULT: ['0 1px 2px rgba(0, 0, 0, 0.1)', '0 1px 1px rgba(0, 0, 0, 0.06)'],
      sm: '0 1px 1px rgba(0,0,0,0.05)',
      md: ['0 4px 3px rgba(0, 0, 0, 0.07)', '0 2px 2px rgba(0, 0, 0, 0.06)'],
      lg: ['0 10px 8px rgba(0, 0, 0, 0.04)', '0 4px 3px rgba(0, 0, 0, 0.1)'],
      xl: ['0 20px 13px rgba(0, 0, 0, 0.03)', '0 8px 5px rgba(0, 0, 0, 0.08)'],
      '2xl': '0 25px 25px rgba(0, 0, 0, 0.15)',
      none: '0 0 #0000',
    },
    fill: (theme) => ({
      ...(theme('colors') ?? {}),
      none: 'none',
    }),
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      DEFAULT: '1',
      0: '0',
    },
    flexShrink: {
      DEFAULT: '1',
      0: '0',
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      // nxl -> [n rem, lineHeight: 1]
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
      // int[0, 900] -> int
    },
    gap: (theme) => theme('spacing'),
    gradientColorStops: (theme) => theme('colors'),
    grayscale: {
      DEFAULT: '100%',
      0: '0',
    },
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      // span-int(>=1) -> span int / span int
      'span-full': '1 / -1',
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      // int >=1 -> int
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      // int >=1 -> int
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      // span-int(>=1) -> span int / span int
      'span-full': '1 / -1',
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      // int >=1 -> int
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      // int >=1 -> int
    },
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
      // int >=1 -> repeat(int, minmax(0, 1fr))
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      // int >=1 -> repeat(int, minmax(0, 1fr))
    },
    height: (theme, { breakpoints }) => ({
      auto: 'auto',
      ...(theme('spacing') ?? {}),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      // fraction -> percent
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      // nxl
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      screen: '100vh',
      ...breakpoints(theme('screens') ?? {}),
    }),
    hueRotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-60': '-60deg',
      '-30': '-30deg',
      '-15': '-15deg',
      0: '0deg',
      15: '15deg',
      30: '30deg',
      60: '60deg',
      90: '90deg',
      180: '180deg',
    },
    inset: (theme, { negative }) => ({
      auto: 'auto',
      ...(theme('spacing') ?? {}),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%',
      // fraction -> percent
      // ...negative
    }),
    invert: {
      DEFAULT: '100%',
      0: '0',
    },
    keyframes,
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      // int>=0 -> int/4 rem
    },
    listStyleType: {
      none: 'none',
      circle: 'circle',
      square: 'square',
      disc: 'disc',
      decimal: 'decimal',
      'zero-decimal': 'decimal-leading-zero',
      greek: 'lower-greek',
      roman: 'lower-roman',
      alpha: 'lower-alpha',
      'upper-roman': 'upper-roman',
      'upper-alpha': 'upper-alpha',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...(theme('spacing') ?? {}),
      ...negative(theme('spacing')),
      // ...negative
    }),
    maxHeight: (theme, { breakpoints }) => ({
      none: 'none',
      ...(theme('spacing') ?? {}),
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      // nxl
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      screen: '100vh',
      ...breakpoints(theme('screens') ?? {}),
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      ...(theme('spacing') ?? {}),
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      // nxl
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      screen: '100vw',
      ...breakpoints(theme('screens') ?? {}),
    }),
    minHeight: (theme) => theme('maxHeight'),
    minWidth: (theme) => theme('maxWidth'),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1',
      // float -> float/100
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      // int[1, 9999]
    },
    outline: {
      none: ['2px solid transparent', '2px'],
      // white: ['2px dotted white', '2px'],
      // black: ['2px dotted black', '2px'],
    },
    outlineColor: (theme) => theme('colors'),
    padding: (theme) => theme('spacing'),
    perspective: (theme) => ({
      none: 'none',
      ...(theme('spacing') ?? {}),
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
    }),
    perspectiveOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    placeholderColor: (theme) => theme('colors'),
    placeholderOpacity: (theme) => theme('opacity'),
    ringColor: (theme) => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...(theme('colors') ?? {}),
    }),
    ringOffsetColor: (theme) => theme('colors'),
    ringOffsetWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
      // float -> float px
    },
    ringOpacity: (theme) => ({
      DEFAULT: '0.5',
      ...(theme('opacity') ?? {}),
    }),
    ringWidth: {
      DEFAULT: '3px',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
      // float -> float px
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
      // float[0, 360] -> float[0deg, 360deg]
      // ...negative
    },
    saturate: {
      DEFAULT: '0',
      0: '0',
      50: '.5',
      100: '1',
      150: '1.5',
      200: '2',
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      // int >=0 -> int/100
    },
    sepia: {
      DEFAULT: '100%',
      0: '0',
    },
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      // float[0, 360] -> float[0deg, 360deg]
      // ...negative
    },
    space: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    stroke: (theme) => ({
      ...(theme('colors') ?? {}),
      none: 'none',
    }),
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2',
    },
    strokeDashArray: {
      0: '0',
      1: '1',
      2: '2',
    },
    strokeDashOffset: {
      0: '0',
      1: '1',
      2: '2',
    },
    tabSize: {
      DEFAULT: '4',
      0: '0',
      2: '2',
      4: '4',
      8: '8',
      // int >=0 -> int px
    },
    textColor: (theme) => theme('colors'),
    textOpacity: (theme) => theme('opacity'),
    textShadow: {
      DEFAULT: '0px 0px 1px rgb(0 0 0 / 20%), 0px 0px 1px rgb(1 0 5 / 10%)',
      sm: '1px 1px 3px rgb(36 37 47 / 25%)',
      md: '0px 1px 2px rgb(30 29 39 / 19%), 1px 2px 4px rgb(54 64 147 / 18%)',
      lg: '3px 3px 6px rgb(0 0 0 / 26%), 0 0 5px rgb(15 3 86 / 22%)',
      xl: '1px 1px 3px rgb(0 0 0 / 29%), 2px 4px 7px rgb(73 64 125 / 35%)',
      none: 'none',
    },
    textDecorationColor: (theme) => theme('colors'),
    textDecorationOpacity: (theme) => theme('opacity'),
    textDecorationLength: {
      'auto': 'auto',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    textDecorationOffset: {
      'auto': 'auto',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    textIndent: {
      DEFAULT: '1.5rem',
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
      '2xl': '3rem',
      '3xl': '4rem',
    },
    textStrokeColor: (theme) => ({
      DEFAULT: theme('colors.gray.200', 'currentColor'),
      ...(theme('colors') ?? {}),
    }),
    textStrokeWidth: {
      DEFAULT: 'medium',
      'none': '0',
      'sm': 'thin',
      'md': 'medium',
      'lg': 'thick',
    },
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    transitionDuration: {
      DEFAULT: '150ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
      // int >=0 -> int ms
    },
    transitionDelay: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
      // int >=0 -> int ms
    },
    transitionProperty: {
      DEFAULT: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      none: 'none',
      all: 'all',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    translate: (theme, { negative }) => ({
      ...(theme('spacing') ?? {}),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%',
      // fraction -> percent
      // ...negative
    }),
    width: (theme, { breakpoints }) => ({
      auto: 'auto',
      ...(theme('spacing') ?? {}),
      // fraction -> percent
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      // nxl
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      screen: '100vw',
      ...breakpoints(theme('screens') ?? {}),
    }),
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      // int[0, 99999] ->  int[0, 99999]
      // ...negative
    },
  },
  variantOrder: variantOrder,
  plugins: [],
  handlers: {
    static : true,
    color: true,
    opacity: true,
    number : true,
    string: true,
    bracket: true,
    hex: true,
    nxl: true,
    fraction: true,
    size: true,
    variable: true,
    negative: true,
  },
};
