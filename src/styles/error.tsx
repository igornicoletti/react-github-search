import { tv } from 'tailwind-variants'

export const ErrorVariants = tv({
  slots: {
    errorbase: 'w-full min-h-screen grid overflow-x-hidden bg-in-dark text-in-white',
    errorcontainer: 'w-full h-full flex flex-col items-center justify-center px-6',
    errorcontent: 'flex flex-col items-center text-center gap-4 py-16',
    errortitle: 'font-medium tracking-widest',
    errorstatus: 'text-xs text-in-stone',
  }
})