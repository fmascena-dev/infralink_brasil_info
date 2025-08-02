import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infralink Brasil",
  description: "Infralink Brasil Informática",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
