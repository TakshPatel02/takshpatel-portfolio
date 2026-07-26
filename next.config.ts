import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /* remove this if you are not using the cloudinary images or add other remote patterns */
  images: {
    remotePatterns:[
      {
        protocol:"https",
        hostname:"res.cloudinary.com",
      },
    ]
  }
};

export default nextConfig;
