import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Murph AI – Smart AI Assistant for Coding, Engineering & Problem Solving | SQROCK",
  
  description:
    "Murph AI is an advanced AI assistant created by SQROCK. Get help with coding, engineering, technology, learning, and problem solving. Murph can write code, explain concepts, and guide you step-by-step like a smart AI companion.",

  keywords: [
    "Murph AI",
    "SQROCK AI",
    "AI coding assistant",
    "AI developer tool",
    "AI for programming",
    "AI engineering assistant",
    "Murph chatbot",
    "AI problem solving tool",
    "AI coding help",
    "best AI assistant for developers"
  ],

  authors: [{ name: "SQROCK" }],
  creator: "SQROCK",
  publisher: "SQROCK",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Murph AI – Intelligent AI Assistant by SQROCK",
    description:
      "Meet Murph, a powerful AI assistant built by SQROCK. Get expert help with coding, engineering, technology, and problem solving instantly.",
    url: "https://your-domain.com",
    siteName: "Murph AI",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Murph AI – Smart AI Assistant",
    description:
      "Murph AI helps developers, students, and creators solve problems, write code, and learn faster.",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
