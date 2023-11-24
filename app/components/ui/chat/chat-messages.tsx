import { useEffect, useRef } from 'react'

import ChatActions from './chat-actions'
import ChatMessage from './chat-message'
import { ChatHandler } from './chat.interface'

export default function ChatMessages(
  props: Pick<ChatHandler, 'messages' | 'isLoading' | 'reload' | 'stop'>
) {
  const scrollableChatContainerRef = useRef<HTMLDivElement>(null)
  const messageLength = props.messages.length
  const lastMessage = props.messages[messageLength - 1]

  const scrollToBottom = () => {
    if (scrollableChatContainerRef.current) {
      scrollableChatContainerRef.current.scrollTop =
        scrollableChatContainerRef.current.scrollHeight
    }
  }

  const isLastMessageFromAssistant =
    messageLength > 0 && lastMessage?.role !== 'user'
  const showReload =
    props.reload && !props.isLoading && isLastMessageFromAssistant
  const showStop = props.stop && props.isLoading

  useEffect(() => {
    scrollToBottom()
  }, [messageLength, lastMessage])

  return (
    <div className='w-full border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-black p-4 shadow-md pb-0'>
      <div
        className='flex h-[50vh] flex-col gap-5 divide-y overflow-y-auto pb-4'
        ref={scrollableChatContainerRef}
      >
        {props.messages.map((m) => (
          <ChatMessage key={m.id} {...m} />
        ))}
      </div>
      <div className='flex justify-end py-4'>
        <ChatActions
          reload={props.reload}
          stop={props.stop}
          showReload={showReload}
          showStop={showStop}
        />
      </div>
    </div>
  )
}
