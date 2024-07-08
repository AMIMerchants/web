import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "American Merchants Inc.",
  description: "Effortless payments, unmatched security, and global reach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children} AMI</body>
    </html>
  );
}
