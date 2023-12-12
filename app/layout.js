// import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Footbar from "@/components/Footbar";
import Providers from "./Providers";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GinniChini Blogs",
  description: "Read and enjoy",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footbar />
        </body>
      </html>
    </Providers>
  );
}
