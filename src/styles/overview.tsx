import { tv } from 'tailwind-variants'

export const OverviewVariants = tv({
  slots: {
    overviewcontent: 'w-full max-w-xs flex flex-col gap-6',
    overviewhead: 'flex items-center justify-start gap-4',
    overviewavatar: 'w-12 h-12 rounded-full object-cover',
    overviewname: 'font-medium uppercase',
    overviewlogin: 'text-sm text-in-cyan',
    overviewbio: 'font-medium text-sm',
    overviewul: 'flex flex-col gap-2 text-sm',
    overviewli: 'flex items-center gap-2',
    overviewicon: 'size-4 shrink-0 text-in-cyan',
  }
})