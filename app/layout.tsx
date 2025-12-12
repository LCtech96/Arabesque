import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const fireflies = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-fireflies",
});

export const metadata: Metadata = {
  title: "Ristorante Arabesque - Cucina di Pesce a Terrasini",
  description: "Il punto d'incontro dove la freschezza del mare e l'alta cucina si abbracciano",
  icons: {
    icon: "/profile-image - Copy.jpg",
    shortcut: "/profile-image - Copy.jpg",
    apple: "/profile-image - Copy.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${fireflies.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

