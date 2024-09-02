/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "mp3party.net"
            }
        ]
    }
};

export default nextConfig;
