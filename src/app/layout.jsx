import Footer from "@/components/Footer";
import "./globals.css";
import { Roboto } from "next/font/google";
import NavBar from "@/components/NavBar";
import classNames from "@/utils/classNames";
import Providers from "@/providers";
import Toaster from "@/components/Toaster";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "300", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Easy Shop",
  description: "Buy your accesories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="transition-all">
      <body
        className={classNames(
          roboto.variable,
          "container mx-auto px-2 font-roboto"
        )}
      >
        <Providers>
          <div>
            <NavBar />
            <main className="mt-5">{children}</main>
          </div>
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
