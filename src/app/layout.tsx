import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const montserratAlternates = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-alternates",
  display: "swap",
  style: ["normal"],
  weight: ["100", "200", "300","400", "500","600", "700"],
});


export const metadata: Metadata = {
  title: "Yhanko",
  description: "A melhor gestão para a tua instituição de ensino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${montserratAlternates.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
