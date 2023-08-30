import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "cloudinary-image-search-nextjs",
  description: "Node SDK Nextjs 13 Cloudinary Image Gallery with Search",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
