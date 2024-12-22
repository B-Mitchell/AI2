import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'AI',
  description: 'Powered by Advanced AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='text-[.9rem] text-black'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
