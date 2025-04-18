import "./globals.css";
import { Inter } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import { Rye } from "next/font/google";
import { Homemade_Apple } from "next/font/google";
import { Peralta } from "next/font/google";
import { Carattere } from "next/font/google";
import { Updock } from "next/font/google";


const updock = Updock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-updock",
});

const peralta = Peralta({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-peralta",
});


export const metadata = {
  title: "simple portfolio of Francesco Nicolo'",
  description: "Created by Francesco Nicolo'",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Francesco Nicolo&apos;</title>
        <meta name="author" content="Francesco Nicolo'"></meta>
        <meta
          name="description"
          content="Ciao! sono Francesco Nicolo' e questa è la mia pagina web"
        ></meta>
        <meta name="copyright" content="fnicolo.it"></meta>
        <meta
          name="robots"
          content="all | none | index | noindex | follow | nofollow"
        ></meta>
      </head>
      <body
        className={`${updock.variable} ${peralta.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
