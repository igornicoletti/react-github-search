import { tv } from 'tailwind-variants'

export const ProfileVariants = tv({
  slots: {
    profilecontent: 'w-full max-w-screen-xl h-full mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-8 py-8',
    profilerepos: 'w-full flex flex-col divide-y-2 divide-in-slate',
  }
})