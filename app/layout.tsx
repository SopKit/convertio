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
    authors: [{ name: "Convertio Team", url: "https://convertio.co" }],
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
        url: "https://convertio.co",
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
        canonical: "https://convertio.co",
        languages: {
            'en-US': 'https://convertio.co',
            'es-ES': 'https://convertio.co/es',
            'fr-FR': 'https://convertio.co/fr',
        }
    },
    verification: {
        google: "V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU",
        yandex: "verification_code_here",
        yahoo: "verification_code_here"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
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
