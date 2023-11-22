import { Inter } from 'next/font/google'
import './globals.css'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OyO: India best online hotels',
  description: 'India best online hotels',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      
      <Header1/>
      <Header2/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
