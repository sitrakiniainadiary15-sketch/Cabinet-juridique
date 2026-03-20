import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thadeus Externalia Juris – Externalisation Juridique, Sociale et Fiscale",
  description:
    "Thadeus Externalia Juris (SARL) est votre partenaire de confiance spécialisé dans l'externalisation (BPO) des formalités juridiques, administratives et sociales à Madagascar.",
  keywords: "externalisation juridique, BPO Madagascar, formalités juridiques, INPI, expert-comptable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
