import '../styles/globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'w3',
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
