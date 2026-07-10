import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";
import ClientWrapper from "@/components/ClientWrapper";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "Lunar Luxe // Celestial Luxury Thrift E-Commerce",
  description: "Curated vintage streetwear, Y2K apparel, gothic modern silhouettes, and rare streetwear couture. Mystical minimalism meets high-end Gen-Z thrift culture.",
  keywords: "thrift store, vintage streetwear, luxury clothing, gothic fashion, y2k aesthetic, lunar luxe, curated thrift, stockx, grailed, represent",
  authors: [{ name: "Lunar Luxe Team" }],
  openGraph: {
    title: "Lunar Luxe // Celestial Luxury Thrift E-Commerce",
    description: "Curated vintage streetwear, Y2K apparel, gothic modern silhouettes, and rare streetwear couture.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Inline theme script — runs before paint to prevent flash */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('moonz_theme');if(t==='ocean'||t==='ocean-light'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','ocean');}}catch(e){}})();`
          }}
        />
      </head>
      <body className="antialiased bg-[#0c0c0c] text-[#F0EFE7]">
        <AuthProvider>
          <StoreProvider>
            <ClientWrapper>
              {children}
            </ClientWrapper>
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
