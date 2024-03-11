import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import icon from "../public/KY_Thumbnail.webp"
import Footer from "./components/footer/footer"
import Nav from "./components/nav/nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kareem Yasser",
  description:
    "Kareem front end portfolio which showcase the projects and the skills he have.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href={icon.src} />
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
