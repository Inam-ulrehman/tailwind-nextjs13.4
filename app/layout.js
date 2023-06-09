import './globals.css'
import { Roboto } from 'next/font/google'
import { Providers } from './providers'

import Footer from './components/footer/footer'
import Header from './components/header/header'
import { getItemFromLocalStorage } from '@/lib/localStorage/localStorage'

const inter = Roboto({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  )
}
