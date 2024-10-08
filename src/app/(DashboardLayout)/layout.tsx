export const metadata = {
  title: 'IPIN',
  description: 'IPin is a platform that provides blockchain-integrated Intellectual Property, IP, registration and sales services. We eliminate the difficulties of existing IP registration with a lot of useless paperwork.',
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
