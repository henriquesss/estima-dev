import Footer from './footer'
import './globals.css'

export const metadata = {
  title: 'estima.tech',
  description: 'Estimativas para devs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Footer/>
    </html>
  )
}
