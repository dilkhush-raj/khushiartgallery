import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const font = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Khushi Art Gallery: Handmade sketch and paintings",
  description: "Khushi Art Gallery: Handmade sketch and paintings for any occasion. Browse our collection of stunning artworks by skilled artists. Choose or request your preferred style, size, and medium. Visit us today and find your happiness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      <body className={font.className}>
          <Navbar />
          {children}
      </body>
    </html>
  );
}
