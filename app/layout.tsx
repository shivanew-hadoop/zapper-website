import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar, PageBackground } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Zapper | Real-Time Voice to Text Overlay",
  description: "Zapper is a lightweight voice-to-text overlay app for meetings, calls and live conversations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PageBackground>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PageBackground>
      </body>
    </html>
  );
}
