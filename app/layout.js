import { League_Spartan } from "next/font/google";
import "./globals.css";

const geistMono = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata = {
  title: "A Shrinivas | Bug Whisperer",
  icons: {
    icon: "/Shrnvs_ligt_logo.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description: "My personal portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
