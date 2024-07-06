import { tv } from 'tailwind-variants'

export const ProfileVariants = tv({
  slots: {
    profilecontent: 'w-full max-w-screen-xl h-full mx-auto flex flex-col lg:flex-row gap-8 py-8',
    profilerepos: 'w-full h-fit grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4',
  }
})