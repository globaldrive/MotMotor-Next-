import { Inter } from "next/font/google";

import "@/_assets/styles/global.scss";
import Header from "@/_components/Header";
import { Providers } from "@/_store/provider";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Интернет магазин техники для отдыха, охоты и рыбалки: лодочные моторы, лодки ПВХ, лодки РИБ-ПВХ под мотор, SUP доски, квадроциклы, мотобуксировщики, снегоходы, снегоуборщики, сноуборды (snowboard)",
  description: "Generated by create next app"
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontsNextClassname = inter.className;
  return (
    <html lang="ru">
      <Providers>
        <body className={fontsNextClassname}>
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
