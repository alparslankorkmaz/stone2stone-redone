import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Playfair_Display, Montserrat } from "next/font/google";
import Provider from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";

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
  title: "Stone2Stone",
  description:
    "We're the B2B marketing agency built for technology companies. Our dedicated experts value your time, budget & vision, and can’t wait to start a conversation today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair_display.variable} ${montserrat.variable}`}>
        <Header />
        <Provider>
          <ToasterContext />
          {children}
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
