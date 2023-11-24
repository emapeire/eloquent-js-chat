export default function Footer() {
  return (
    <div className='z-10 fixed bottom-0 left-0 flex w-full items-center font-mono text-sm justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black pb-8'>
      <p className='flex items-center justify-center font-nunito gap-2'>
        Built by
        <a
          href='https://github.com/emapeire'
          target='_blank'
          rel='noopener noreferrer'
          className='font-bold text-blue-600 dark:text-blue-400'
        >
          <span>@emapeire</span>
        </a>
        with
        <a
          href='https://www.llamaindex.ai/'
          target='_blank'
          rel='noopener noreferrer'
          className='font-bold text-blue-600 dark:text-blue-400'
        >
          <span>llama-index</span>
        </a>
      </p>
    </div>
  )
}
