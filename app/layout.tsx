import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'




export const metadata: Metadata = {
  title: 'Travel',
  description: 'A Travel Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <body >
        <Navbar/>
    <main className='relative overflow-hidden'>
    {children}
    </main>
        <Footer/>
        </body>
    </html>
  )
}
