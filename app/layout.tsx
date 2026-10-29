
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BilheteJá | Inscreve. Paga. Participa.",
    template: "%s | BilheteJá",
  },
  description:
    "Descobre eventos, simplifica as inscrições e prepara-te para viver novas experiências com o BilheteJá.",
  applicationName: "BilheteJá",
  openGraph: {
    title: "BilheteJá | Inscreve. Paga. Participa.",
    description:
      "O teu evento. Os teus bilhetes. Tudo simples.",
    siteName: "BilheteJá",
    locale: "pt_AO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO">
      <body>{children}</body>
    </html>
  );
}
