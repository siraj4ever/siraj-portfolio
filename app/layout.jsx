import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
const Providers = dynamic(() => import("./providers"), { ssr: false });

export const metadata = {
  title: "Siraj | Portfolio",
  description:
    "My name is Siraj, I'm a web developer and I'm passionate about it.",
  author: "Siraj",
  siteUrl: "",
  applicationName: "Siraj",
  keywords: ["siraj", "siraj aalam"],
  openGraph: {
    type: "website",
    url: "",
    title: "Siraj | Portfolio",
    site_name: "Siraj | Portfolio",
    description: "My name is Siraj, This is my Portfolio website.",
    width: 1200,
    height: 630,
    images: [
      {
        url: "/og-image-cover.png",
        alt: "Siraj Portfolio",
      },
    ],
    site_name: "Siraj | Portfolio",
  },
};

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopProgressBar />
          <Navbar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
