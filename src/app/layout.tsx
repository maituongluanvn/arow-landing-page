import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import "@fontsource/roboto"; // Defaults to weight 400
// import "@fontsource/roboto/400.css"; // Specify weight
// import "@fontsource/roboto/400-italic.css"; // Specify weight and style
// const inter = Inter({ subsets: ['latin'] })
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata: Metadata = {
  title: 'Arow Building Solution',
  description: 'Arow Building Solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
