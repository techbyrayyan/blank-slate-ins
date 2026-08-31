import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata = {
  title: "BlankSlate Institute — Shape Your Future. Build What's Next.",
  description:
    "BlankSlate Institute empowers students with industry-focused education, practical skills, and innovative learning experiences in Full Stack Development, AI, Computer Science, and Design.",
  keywords: [
    "BlankSlate Institute",
    "Tech Institute",
    "Computer Science",
    "Full Stack Development",
    "Artificial Intelligence",
    "UI/UX Design",
    "Next.js Bootcamp",
    "Technology Academy",
  ],
  authors: [{ name: "BlankSlate Institute" }],
  creator: "BlankSlate Institute",
  openGraph: {
    title: "BlankSlate Institute — Shape Your Future. Build What's Next.",
    description:
      "Empowering students with industry-focused education, practical skills, and innovative learning experiences designed for the future.",
    url: "https://blankslate.edu",
    siteName: "BlankSlate Institute",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "BlankSlate Institute Campus & Students",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlankSlate Institute — Shape Your Future. Build What's Next.",
    description:
      "Empowering students with industry-focused education, practical skills, and innovative learning experiences.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#1F2328]" suppressHydrationWarning>
        <div id="google_translate_element" style={{ display: "none" }} />
        {children}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            window.googleTranslateElementInit = function() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'ar,de,es,fr,id,it,ja,ko,nl,pl,pt,ro,ru,th,tr,vi,zh-CN,zh-TW',
                autoDisplay: false
              }, 'google_translate_element');
            };
          `}
        </Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
