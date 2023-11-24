import { ModeToggle } from './mode-toggle'

export default function Header() {
  return (
    <div className='flex z-10 max-w-5xl w-full justify-between font-mono text-sm'>
      <p className='border-neutral-200 dark:border-neutral-800 dark:bg-black static w-auto rounded-md border bg-white py-2.5 px-4'>
        Chatting with&nbsp;
        <a
          href='https://eloquentjavascript.net/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-mono font-bold text-blue-600 dark:text-blue-400'
        >
          <span>Eloquent JavaScript</span>
        </a>
      </p>
      <ModeToggle />
    </div>
  )
}
