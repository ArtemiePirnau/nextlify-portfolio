import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import "../styles/globals.css";
const poppins = Inter({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Pirnau Artemie - Front End Developer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="shortcut icon"
          href="https://github.com/ArtemiePirnau/nextlify-portfolio/blob/master/public/logo.png?raw=true"
        />
      </head>
      <body className={`${poppins.className} cursor-default`}>
        <Providers>
          <div className="container">
            <main className="">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
