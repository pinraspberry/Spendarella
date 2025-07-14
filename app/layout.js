import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter=Inter({subset: ["latin"]});
export const metadata = {
  title: "Trackpaisa",
  description: "I am just a girl who loves to code",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/*header*/}
        <Header></Header>
        <main className="min-h-screen">{children}</main>
        {/*footer*/}
        <footer className="bg-pink-50 py-12">
        <div className='container mx-auto px-4 text-center text-gray-600'>
          <p>made with love</p>
        </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
