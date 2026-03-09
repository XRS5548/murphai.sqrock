import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Murph AI | Intelligent AI Assistant by SQROCK",
  description:
    "Learn about Murph AI, an intelligent AI assistant created by SQROCK. Murph helps users with coding, technology, engineering concepts, learning, and everyday problem solving.",

  keywords: [
    "Murph AI",
    "About Murph AI",
    "SQROCK AI assistant",
    "AI coding assistant",
    "AI for developers",
    "Murph chatbot",
    "AI learning assistant",
  ],

  authors: [{ name: "SQROCK" }],
  creator: "SQROCK",
  publisher: "SQROCK",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://murph.sqrock.cloud/about",
  },

  openGraph: {
    title: "About Murph AI | SQROCK",
    description:
      "Discover Murph AI, a powerful AI assistant built by SQROCK to help people learn faster, solve problems, and get intelligent guidance.",
    url: "https://murph.sqrock.cloud/about",
    siteName: "Murph AI",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Murph AI",
    description:
      "Murph AI is a smart AI assistant by SQROCK designed to help with coding, learning, and technology.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
}