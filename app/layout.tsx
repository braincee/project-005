import type { Metadata } from 'next'
import './globals.css'
import ThemeRegistry from '@/components/ThemeRegistry'

export const metadata: Metadata = {
  title: 'Social Components',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='overflow-clip'>
        <ThemeRegistry options={{ key: 'joy' }}>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
