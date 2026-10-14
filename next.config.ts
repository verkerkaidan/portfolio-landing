import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The CV used to live at this URL (Dutch only) before per-language files.
        source: "/CV_Aidan_Verkerk.pdf",
        destination: "/CV_Aidan_Verkerk_NL.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
