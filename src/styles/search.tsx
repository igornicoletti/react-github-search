import { tv } from 'tailwind-variants'

export const SearchVariants = tv({
  slots: {
    searchcontent: 'w-full flex flex-col items-center justify-center gap-4 py-8',
    searchtitle: 'font-medium text-center uppercase tracking-[1rem]',
    searchform: 'relative w-full max-w-xl h-12 flex items-center gap-4',
    searchinput: 'z-10 w-full h-full peer text-sm pl-14 rounded-full bg-inherit border border-in-stone placeholder:text-in-stone focus:outline-none',
    searchicon: 'z-0 absolute left-6 size-4 peer-hover:text-in-white peer-focus:text-in-cyan peer-placeholder-shown:text-in-stone transition ease-in duration-200',
  }
})