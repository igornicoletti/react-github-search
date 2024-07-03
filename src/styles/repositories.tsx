import { tv } from 'tailwind-variants'

export const RepositoriesVariants = tv({
  slots: {
    reposli: 'flex flex-col gap-4 first:pt-1',
    reposlink: 'flex items-center gap-4',
    reposname: 'font-medium uppercase',
    reposicon: 'size-4 shrink-0 text-in-stone',
    reposiconsmall: 'size-3 shrink-0',
    reposdescription: 'text-sm',
    reposcontent: 'flex flex-col md:flex-row md:items-center gap-6 text-xs text-in-cyan',
    reposinfo: 'flex items-center gap-2',
    reposdivision: 'hidden md:block text-in-stone',
  }
})