import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

// GLOBAL STYLES
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-gestor-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Gestor de Pedidos",
  description: "Projeto prático de gestor de pedidos feito por: @antoniosnt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} antialiased`}>{children}</body>
    </html>
  );
}
