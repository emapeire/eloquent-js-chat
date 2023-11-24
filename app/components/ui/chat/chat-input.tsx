import { Button } from '../button'
import { Input } from '../input'
import { ChatHandler } from './chat.interface'

export default function ChatInput(
  props: Pick<
    ChatHandler,
    'isLoading' | 'handleSubmit' | 'handleInputChange' | 'input'
  >
) {
  return (
    <form
      onSubmit={props.handleSubmit}
      className='flex w-full items-start justify-between gap-4 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-black p-4 shadow-md'
    >
      <Input
        autoFocus
        name='message'
        placeholder='Type a message'
        className='flex-1'
        value={props.input}
        onChange={props.handleInputChange}
      />
      <Button type='submit' disabled={props.isLoading}>
        Send message
      </Button>
    </form>
  )
}
