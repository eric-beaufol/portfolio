import React from 'react'
import './styles.css'

export const metadata = {
  title: 'Portfolio 2026 — CMS',
  description: 'Back-office du portfolio.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
