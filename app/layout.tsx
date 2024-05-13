import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MaxWidth from "@/components/width";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo portfolio",
  description: "Acesso a todos meus projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ept-br">
      <body className={inter.className}>
        <MaxWidth>
          {children}
        </MaxWidth>
        
        </body>
    </html>
  );
}
