import type { FC, ReactNode } from 'react'
import '@/styles/globals.css'

interface LayoutProps {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

export default Layout
