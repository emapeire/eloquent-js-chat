export default function Footer() {
  return (
    <div className='fixed bottom-0 left-0 flex w-full items-center font-mono text-sm justify-center pb-8'>
      <p className='flex items-center justify-center gap-2 shadow-md border rounded-md bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 px-4 py-2.5 text-black dark:text-white'>
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
