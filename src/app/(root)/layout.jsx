import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ReduxProvider from "@/redux/ReduxProvider";
import "@/styles/globals.css";
import NextAuthProvider from "@/utils/next-auth/NextAuthProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khati",
  description:
    "Khati.com provides the best shopping experience for all yor needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ReduxProvider>
            <Header />
            {children}
            <Footer />
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
