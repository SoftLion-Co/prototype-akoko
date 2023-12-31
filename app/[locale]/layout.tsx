import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "./globals.css";
import type { Metadata } from "next";
import MainProductCard from "@/components/MainProductCard";

export const metadata: Metadata = {
  title: "Akoko",
  description: "Shopping",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    //error page
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MainProductCard />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
