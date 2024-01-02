import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "./globals.css";
import type { Metadata } from "next";
import WelcomeSection from "@/sections/welcome_page/WelcomeSection";

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
          <div className="relative">
            <h2>Header</h2>
            <WelcomeSection />
          </div>

          <main>{children}</main>
          <h2>Footer</h2>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
