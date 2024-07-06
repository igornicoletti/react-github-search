import { tv } from 'tailwind-variants'

export const RepositoriesVariants = tv({
  slots: {
    reposcard: 'flex flex-col gap-4 p-2 rounded-md border-2 border-in-slate',
    reposlink: 'flex items-center gap-2',
    reposname: 'font-medium',
    reposicon: 'size-4 shrink-0 text-in-cyan',
    reposiconsmall: 'size-3 shrink-0',
    reposdescription: 'text-xs',
    reposinfo: 'flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 mt-auto text-xs text-in-cyan',
    reposdivision: 'hidden lg:block text-in-stone',
  }
})