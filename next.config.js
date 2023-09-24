/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "img-prod-cms-rt-microsoft-com.akamaized.net",
            },
            {
                protocol: "https",
                hostname: "www.digitaltrends.com",
            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
            },
        ],
    },
}

module.exports = nextConfig
