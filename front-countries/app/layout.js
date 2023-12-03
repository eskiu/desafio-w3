import '../styles/globals.css'

export const metadata = {
  title: 'w3',
  description: 'Challenge for w3, generated with Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
