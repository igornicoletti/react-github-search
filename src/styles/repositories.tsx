import { tv } from 'tailwind-variants'

export const RepositoriesVariants = tv({
  slots: {
    reposcard: 'flex flex-col gap-4 p-2 rounded-md border-2 border-in-slate',
    reposlink: 'flex items-center gap-2',
    reposname: 'font-medium',
    reposicon: 'size-4 shrink-0 text-in-cyan',
    reposiconsmall: 'size-3 shrink-0',
    reposdescription: 'text-xs text-in-stone',
    reposinfo: 'flex flex-col md:flex-row md:items-center gap-6 mt-auto text-xs text-in-cyan',
    reposdivision: 'hidden md:block text-in-stone',
  }
})