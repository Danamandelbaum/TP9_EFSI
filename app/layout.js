"use client"; 
import React, { useContext } from 'react';
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/HeaderWOLogin";
import LoginHeader from "./components/HeaderLogin";
import Footer from "./components/Footer";
import styles from "./page.module.css";
import TokenProvider, { TokenContext } from "./context/TokenContext";
import { ProtectedRoutes } from "./utils/ProtectedRoutes"; 
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <TokenProvider>
      <InnerLayout>{children}</InnerLayout>
    </TokenProvider>
  );
}

function InnerLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter(); 
  const { isLoggedIn } = useContext(TokenContext); 
  console.log(pathname != "/Registro")
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`}>
        {(isLoggedIn == true) ? <LoginHeader/> :  ((pathname != "/Registro") ? <Header/> : "")}
        <main className={styles.main}>
          <ProtectedRoutes>
            {children}
          </ProtectedRoutes>
        </main>
       {(pathname != "/Registro") ? <Footer/> : ""}
      </body>
    </html>
  );
}
