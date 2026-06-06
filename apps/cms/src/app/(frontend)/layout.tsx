import React from "react";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";

import CustomCursor from "./_components/CustomCursor";
import "./theme.css";

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

export const metadata = {
  title: "Léa Fontaine — Senior Frontend Developer",
  description:
    "Portfolio de Léa Fontaine, développeuse frontend senior. Interfaces web performantes et design systems à grande échelle.",
};

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
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
      </body>
    </html>
  );
}
