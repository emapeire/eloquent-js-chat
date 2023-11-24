import Header from '@/app/components/header'
import ChatSection from './components/chat-section'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-10 px-20 py-10 bg-neutral-100 dark:bg-neutral-900'>
      <Header />
      <ChatSection />
      <Footer />
    </main>
  )
}
