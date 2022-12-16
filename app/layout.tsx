import { AnalyticsWrapper } from '../components/Analytics'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" style={{
      height: '100%'
    }}>
      <head />
      <body className='overflow-y-hidden bg-gradient-to-br from-gray-900 to-[#030508] text-neutral-400 h-full'>{children}
      <AnalyticsWrapper /></body>

    </html>
  )
}
