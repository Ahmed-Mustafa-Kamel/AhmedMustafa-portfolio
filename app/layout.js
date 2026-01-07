import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Ahmed Mustafa - React & Next.js Developer | Portfolio',
    description: 'Experienced React and Next.js developer specializing in building fast, responsive, and scalable web applications. View my portfolio, projects, and skills.',
    keywords: ['Ahmed Mustafa', 'React Developer', 'Next.js Developer', 'Web Developer', 'Portfolio', 'JavaScript'],
    authors: [{ name: 'Ahmed Mustafa' }],
    creator: 'Ahmed Mustafa',
    publisher: 'Ahmed Mustafa',
    metadataBase: new URL('http://localhost:3000'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Ahmed Mustafa - React & Next.js Developer',
        description: 'Experienced React and Next.js developer specializing in building fast, responsive, and scalable web applications.',
        url: 'http://localhost:3000',
        siteName: 'Ahmed Mustafa Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ahmed Mustafa - React & Next.js Developer',
        description: 'Experienced React and Next.js developer specializing in building fast, responsive, and scalable web applications.',
    },
    icons: {
        icon: '/AMlogo2.png',
        apple: '/AMlogo2.png',
    },
    manifest: '/manifest.json',
    themeColor: '#0ea5e9',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0..1,0"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Ahmed Mustafa',
                            jobTitle: 'React & Next.js Developer',
                            url: 'http://localhost:3000',
                            sameAs: [],
                        }),
                    }}
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
