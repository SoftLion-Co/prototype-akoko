import { useLocale } from "next-intl";
import {notFound} from 'next/navigation';
// import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Akoko",
  description: "Shopping",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  const locale = useLocale();
  //not found pages
  params.locale !== locale && notFound()
  return (
    <html lang={locale}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
