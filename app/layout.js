import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "./components/ui/sparkles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Shrinivas",
  description: "My personal portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
    </html>
  );
}
