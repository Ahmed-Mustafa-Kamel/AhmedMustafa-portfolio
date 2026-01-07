/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for better development experience
    reactStrictMode: true,

    // Optimize images
    images: {
        domains: [],
    },

    // Enable Turbopack (default in Next.js 16)
    turbopack: {},
};

export default nextConfig;
