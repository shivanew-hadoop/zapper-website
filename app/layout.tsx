import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zapper - Real-Time Voice to Text Overlay",
  description: "Zapper is a Windows meeting caption service that converts live speech into a clean real-time overlay.",
  metadataBase: new URL("https://www.zapperapp.in"),
  openGraph: {
    title: "Zapper - Real-Time Voice to Text Overlay",
    description: "Live meeting captions, low-latency transcription and desktop overlay for professionals.",
    url: "https://www.zapperapp.in",
    siteName: "Zapper",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
