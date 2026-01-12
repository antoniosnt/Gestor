import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// GLOBAL STYLES
import "./globals.css";

const poppins = Poppins({
  variable: "--font-gestor-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
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
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
