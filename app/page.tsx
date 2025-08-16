import type { Metadata } from "next"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Blog from "@/components/Blog"
import Recommendations from "@/components/Recommendations"
import Contact from "@/components/Contact"
import ChatWidget from "@/components/ChatWidget"

export const metadata: Metadata = {
  title: "Sumit Walmiki - Full-Stack Software Engineer | React, Node.js, Python, Cloud",
  description:
    "Experienced Full-Stack Software Engineer with 4+ years building scalable web applications. Expertise in JavaScript, Python, React, Node.js, and cloud technologies. Open to opportunities at top tech companies.",
  keywords:
    "Full-Stack Developer, Software Engineer, JavaScript, Python, React, Node.js, AWS, System Design, Web Development, Tech Jobs, Google, Meta, FAANG",
  authors: [{ name: "Sumit Walmiki" }],
  openGraph: {
    title: "Sumit Walmiki - Full-Stack Software Engineer",
    description: "Building scalable, high-performance applications with modern technologies.",
    type: "website",
    locale: "en_US",
    url: "https://sumitwalmiki.dev",
    siteName: "Sumit Walmiki Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sumit Walmiki - Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Walmiki - Full-Stack Software Engineer",
    description: "Building scalable, high-performance applications with modern technologies.",
    images: ["/og-image.jpg"],
    creator: "@sumitwalmiki",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Blog />
      <Recommendations />
      <Contact />
      <ChatWidget />
    </div>
  )
}
