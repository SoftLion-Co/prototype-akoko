import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/navigation";
import { notFound } from "next/navigation";
import "./globals.css";
import type { Metadata } from "next";
import WelcomeSection from "@/sections/home_page/WelcomeSection";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

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
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="relative">
            <HeaderComponent />
            <div className="absolute w-full">
              <WelcomeSection />
            </div>
          </div>

          <main className="flex flex-col gap-[75px] mt-[100px] tablet:gap-[120px] laptop:gap-[150px] laptop:mt-[110px] desktop:mt-[150px]">
            {children}
          </main>
          <FooterComponent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
