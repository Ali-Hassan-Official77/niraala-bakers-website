import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/components/providers";

export const metadata: Metadata = {
  title: { default: "Niraala-Sweets — Premium Pakistani Mithai", template: "%s — Niraala-Sweets" },
  description: "Niraala-Sweets — premium Pakistani mithai and bakery favourites in E-11, Islamabad.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><AppProvider>{children}</AppProvider>

   <script src="https://cdn.zanderio.ai/widget/loader.js" data-id="wdg_ocXfCuCXFvfyWS6VCdUFccdc" defer></script> 
  </body></html>;
}
