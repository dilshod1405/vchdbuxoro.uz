import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/utils/LangContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Buxoro vagon deposi",
  description: "Buxoro vagon deposi",
  icons: {
    icon: "images/logo.png",
    shortcut: "images/logo.png",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#183B4E" />
        <meta name="description" content="Buxoro vagon deposi" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
