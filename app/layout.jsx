import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";
import ClientComponents from "./ClientComponents";

export const metadata = {
  metadataBase: new URL("https://sirajworld.in"),
  title: "Siraj | Portfolio",
  description:
    "My name is Siraj, I'm a web developer and I'm passionate about it.",
  author: "Siraj",
  siteUrl: "https://sirajworld.in",
  applicationName: "Siraj",
  keywords: ["siraj", "siraj aalam", "sirajworld", "sirajworld.in"],
  openGraph: {
    type: "website",
    url: "https://sirajworld.in",
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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <ClientComponents>
            <Navbar />
            {children}
            <Analytics />
          </ClientComponents>
        </Providers>
      </body>
    </html>
  );
}
