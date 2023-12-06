import '../styles/globals.css'
import Navbar from './components/navbar/Navbar'

export const metadata = {
  title: 'Desafío Técnico - w3 IT',
  description: 'Challenge for w3, generated with Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}