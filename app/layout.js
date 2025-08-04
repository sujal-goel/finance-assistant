import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zenith | Your AI Personal Finance Coach',
  description: 'India\'s first AI-native financial coach. We simplify complexity, provide unbiased guidance, and help you build lasting wealth with confidence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
