import "./globals.css";
import { Inter } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import { Rye } from "next/font/google";
import { Homemade_Apple } from "next/font/google";
import { Peralta } from "next/font/google";
import { Carattere } from "next/font/google";
import { Updock } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const press = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pressStart2p",
});
const rye = Rye({ weight: "400", subsets: ["latin"], variable: "--font-rye" });
const updock = Updock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-updock",
});
const homemade_Apple = Homemade_Apple({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-homemadeApple",
});

const peralta = Peralta({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-peralta",
});

const carattere = Carattere({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-carattere",
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
        className={`${inter.className} ${press.variable} ${updock.variable} ${rye.variable} ${carattere.variable} ${peralta.variable} ${homemade_Apple.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
