import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import GA from "@/components/GA";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Convertio - Free Online File Converter | Convert Video, Audio, Images & Documents",
    description: `Convert files online for free with Convertio - the ultimate file conversion tool. Transform videos (MP4, AVI, MOV, WMV), audio files (MP3, WAV, FLAC, AAC), images (JPG, PNG, GIF, WEBP), and documents (PDF, DOCX, XLSX) instantly. Fast, secure, unlimited conversions with no registration required. Professional-grade file converter supporting 500+ formats.`,
    creator: "Convertio Team",
    keywords: "file converter, online converter, video converter, audio converter, image converter, document converter, PDF converter, MP4 converter, MP3 converter, JPG to PNG, free converter, unlimited converter, batch converter, format converter, media converter, document conversion, video compression, audio compression, image optimization, file transformation, convertio, convert files online, free file conversion",
    authors: [{ name: "Convertio Team", url: "https://sopkit.github.io/convertio/" }],
    generator: "Next.js",
    applicationName: "Convertio",
    referrer: "origin-when-cross-origin",
    colorScheme: "light dark",
    viewport: "width=device-width, initial-scale=1",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" }
    ],
    category: "File Conversion",
    classification: "File Converter Tool",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://sopkit.github.io/convertio/",
        title: "Convertio - Free Online File Converter",
        description: "Convert any file format online for free. Support for 500+ formats including video, audio, images, and documents.",
        siteName: "Convertio",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Convertio - Free Online File Converter"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Convertio - Free Online File Converter",
        description: "Convert any file format online for free. Support for 500+ formats.",
        images: ["/images/twitter-image.jpg"],
        creator: "@convertio_app"
    },
    alternates: {
        canonical: "https://sopkit.github.io/convertio/",
        languages: {
            'en-US': 'https://sopkit.github.io/convertio/',
            'es-ES': 'https://sopkit.github.io/convertio//es',
            'fr-FR': 'https://sopkit.github.io/convertio//fr',
        }
    },
    verification: {
        google: "V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU",
        yandex: "verification_code_here",
        yahoo: "verification_code_here"
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Convertio",
    "description": "Free online file converter supporting 500+ formats including video, audio, images, and documents",
    "url": "https://sopkit.github.io/convertio/",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Video conversion (MP4, AVI, MOV, WMV, MKV)",
        "Audio conversion (MP3, WAV, FLAC, AAC, OGG)",
        "Image conversion (JPG, PNG, GIF, WEBP, BMP)",
        "Document conversion (PDF, DOCX, XLSX, PPTX)",
        "Batch file conversion",
        "No file size limits",
        "Privacy protection"
    ],
    "publisher": {
        "@type": "Organization",
        "name": "Convertio",
        "url": "https://sopkit.github.io/convertio/"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link rel="dns-prefetch" href="//www.google-analytics.com" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Convertio" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
            </head>
            <GA GA_MEASUREMENT_ID="G-52GQ441X7H" />
            <meta name="google-site-verification" content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU" />
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light", "dark"]}>
                    <Navbar />
                    <Toaster />
                    <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
