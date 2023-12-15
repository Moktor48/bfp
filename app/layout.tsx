import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/context/Provider'
import NavBar from './NavBar'
import { getServerSession } from 'next-auth'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Berhow Homepage',
  description: "Gonna make 'em work",
}

export default async function RootLayout({children,}: {children: React.ReactNode}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <Provider session = {session}>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
      </Provider>
    </html>
  )
}