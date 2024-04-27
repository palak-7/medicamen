import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });
import UserProvider from "@/context/UserProvider";
import Header from "@/components/common/Header/Header";
import ScrollToTop from "@/components/common/ScrollToTop/page";
import Top from "@/components/common/Header/Top";
export const metadata = {
  title: "Medicamen Biotech Limited",
  description: "medicamen.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "white" }}>
        <UserProvider>
          <ToastContainer />
          <Header />
          {children}
          <ScrollToTop />
        </UserProvider>
      </body>
    </html>
  );
}
