/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "mp3party.net"
            },
            {
                hostname: "i.mp3party.net"
            },
            {
                hostname: "avatars.yandex.net"
            },
            {
                hostname: "*.googleusercontent.com"
            }
        ]
    }
};

export default nextConfig;
