import { Inter, Playfair_Display , Heebo } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.jsx";
const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});
const heebo = Heebo({ 
  subsets: ["latin"],
  variable: "--font-heebo"
});

export const metadata = {
  title: "שלמה אסולין - צילום מקצועי",
  description: "צילום מקצועי - תמונות הריון, תמונות אופנה ועוד. שלמה אסולין - צלם מקצועי",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${inter.className} ${playfair.variable}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
