export default function Header() {
  return (
    <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
      <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
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
      <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none lg:p-4 pb-8'>
        <p className='flex items-center justify-center font-nunito text-lg gap-2'>
          Built by
          <a
            href='https://github.com/emapeire'
            target='_blank'
            rel='noopener noreferrer'
            className='font-mono font-bold text-blue-600 dark:text-blue-400'
          >
            <span>@emapeire</span>
          </a>
        </p>
      </div>
    </div>
  )
}
