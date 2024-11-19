import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tim's Creative Portfolio",
  description: "Showcasing innovative web development projects and creative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}