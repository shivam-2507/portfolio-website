import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Shivam Walia',
    description: 'Shivam Walia Project Portfolio',
    icons: {
        icon: '/logo.png',      // Remove /public from path
        shortcut: '/logo.png',  // Remove /public from path
        apple: '/logo.png',     // Remove /public from path
    },
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