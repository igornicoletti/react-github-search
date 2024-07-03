import { tv } from 'tailwind-variants'

export const RootVariants = tv({
  slots: {
    rootlayout: 'w-full min-h-screen grid overflow-x-hidden bg-in-dark text-in-white',
    rootcontainer: 'w-full h-full flex flex-col items-center justify-center px-6',
  }
})