import "./globals.css";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import { Playfair_Display, Montserrat } from "next/font/google";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  variable: "--font-playfair_display",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "stone2stone",
  description: "Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair_display.variable} ${montserrat.variable}`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
