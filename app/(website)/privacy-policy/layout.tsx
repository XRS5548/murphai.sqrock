import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Murph AI by SQROCK",
  description:
    "Read the official Privacy Policy of Murph AI, an intelligent AI assistant created by SQROCK. Learn how we handle user data, protect privacy, and maintain security while providing AI-powered assistance.",

  keywords: [
    "Murph AI privacy policy",
    "SQROCK privacy policy",
    "Murph AI data protection",
    "AI chatbot privacy",
    "Murph AI security",
    "SQROCK AI assistant privacy"
  ],

  authors: [{ name: "SQROCK" }],
  creator: "SQROCK",
  publisher: "SQROCK",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://murph.sqrock.cloud/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | Murph AI",
    description:
      "Learn how Murph AI protects user data and privacy. Read the official privacy policy of Murph AI created by SQROCK.",
    url: "https://murph.sqrock.cloud/privacy-policy",
    siteName: "Murph AI",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Murph AI",
    description:
      "Understand how Murph AI handles data, protects privacy, and ensures secure AI interactions.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
}