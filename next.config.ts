import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    CAP_SERVICE_URL: "https://community-challenge.cfapps.us10.hana.ondemand.com",
  },
};

export default nextConfig;
