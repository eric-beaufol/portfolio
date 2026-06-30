import React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";

import CustomCursor from "./_components/CustomCursor";
import { getHome } from "./_lib/home";
import { lexicalToPlainText } from "./_lib/lexical";
import "./theme.css";
import { Analytics } from "@vercel/analytics/next";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const home = await getHome();
  const { name, role } = home.identity;
  const defaultTitle = role ? `${name} — ${role}` : name;
  const description =
    lexicalToPlainText(home.hero?.lead) || `Portfolio de ${name}.`;

  return {
    title: {
      default: defaultTitle,
      // Les sous-pages (case studies) ne fournissent que leur titre.
      template: `%s — ${name}`,
    },
    description,
    openGraph: {
      title: defaultTitle,
      description,
      type: "website",
    },
  };
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      // Le script inline ajoute « js-ready » sur <html> avant l'hydratation
      // (progressive enhancement) → mismatch attendu sur l'attribut class.
      suppressHydrationWarning
    >
      <head>
        {/* Progressive enhancement : les états « cachés » (reveals, hero) ne
            s'appliquent que si JS est prêt → contenu visible sans JS. */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.add("js-ready");',
          }}
        />
      </head>
      <body>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
