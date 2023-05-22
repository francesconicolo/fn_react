"use client";
import Image from "next/image";
import "../assets/css/page.css";
import "../assets/css/switcher.css";
import { useState } from "react";
import Hat from "/images/Sfondo/doug.png";
import Meter from "../components/meter";
import Carousel from "@/components/carousel";
import temp from '/images/clint.webp'
import sam from '/images/Sfondo/sam.png'
import facebook from 'images/icons/icons8-facebook.svg'
import instagram from '/images/icons/icons8-instagram.svg'
import gmail from '/images/icons/icons8-gmail.svg'
import Footer from "@/components/footer";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className=" overflow-x-hidden">
      <div className="h-[100vh] w-full overflow-hidden relative -z-10">
        <div
          className={
            "absolute h-[200vh] w-full " +
            (theme === "light" ? "toDay" : "toNight")
          }
        ></div>
        <div
          className={
            "absolute h-full w-full " + (theme === "light" ? "giorno" : "notte")
          }
        ></div>
        <div className="absolute flex flex-col justify-center items-center pb-28 h-full w-full left-0 top-0">
          <div className="font-peralta font-bold text-black text-[1.2rem]">
            directed by
          </div>
          <div
            className={
              "font-peralta text-[2rem] transition-colors duration-1000  " +
              (theme === "light" ? "text-black" : "text-black")
            }
          >
            Francesco Nicolo&apos;
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 right-5 z-50">
        <label className="daynight text-[0.2rem]">
          <input
            type="checkbox"
            className="daynight__checkbox"
            onChange={handleTheme}
            checked={theme === "dark"}
          />
          <span className="daynight__sky">
            <span className="daynight__stars"></span>
            <span className="daynight__morestars"></span>
            <span className="daynight__sunmoon"></span>
          </span>
        </label>
      </div>
      <div
        className={
          "py-8 w-full relative " +
          (theme === "light" ? "bg-Lantiquewhite" : "bg-Dantiflashwhite")
        }
      >
        <div className="container p-4 mx-auto font-peralta shadow-lg h-full w-full">
          <div className="text-[2.5rem]">CHI SONO</div>
          <div className="">nome:</div>
          <div className="text-[2rem]">Francesco</div>
          <div className="">cognome:</div>
          <div className="text-[2rem]">Nicolo&apos;</div>
          <div className="">età:</div>
          <div className="text-[2rem]">24 anni</div>
          <div className="">professione:</div>
          <div className="text-[2rem]">
            Software <br /> developer
          </div>
          <div className="">foto (accurata) </div>
          <div className="h-[100px] w-[300px]">
            <Image src={temp} alt="" className="object-contain object-left h-full w-full"></Image>
          </div>
        </div>

        <Image
          src={Hat}
          alt={""}
          className="absolute top-[-100%] left-[38%] scale-[50%] sm:left-[60%] lg:top-[-60%] lg:scale-[55%] xl:left-[70%] xl:scale-[60%] xl:top-[-70%] 2xl:left-[70%] 2xl:scale-100 2xl:top-[-40%]"
        ></Image>
      </div>
      <div className={
          "py-8 w-full " +
          (theme === "light" ? "bg-Lhunyadiyellow text-black" : "bg-Dyaleblue text-Dantiflashwhite")
        } >
        <div className="container p-4 pb-32 mx-auto font-peralta shadow-lg h-full w-full ">
          <div className="text-[2.5rem]">ABILITÀ</div>
            <div className="text-[1.2rem]">Html/CSS</div>
            <Meter value={5} theme={theme}/>
            <div className="text-[1.2rem]">C/C++</div>
            <Meter value={4} theme={theme}/>
            <div className="text-[1.2rem]">Java</div>
            <Meter value={3} theme={theme}/>
            <div className="text-[1.2rem]">OCaml</div>
            <Meter value={2} theme={theme}/>
            <div className="text-[1.2rem]">Javascript</div>
            <Meter value={3} theme={theme}/>
            <div className="text-[1.2rem]">Python</div>
            <Meter value={5} theme={theme}/>
            <div className="text-[1.2rem]">SQL</div>
            <Meter value={4} theme={theme}/>
            <div className="text-[1.2rem]">Editing foto/video</div>
            <Meter value={4} theme={theme}/>
            <div className="text-[1.2rem]">Affettare salumi</div>
            <Meter value={5} theme={theme}/>
        </div>
        
      </div>
      <div className={
          "py-8 w-full relative " +
          (theme === "light" ? "bg-Lfalured text-black " : " bg-Dpennblue text-Dantiflashwhite ")
        } >
        <Image src={sam} alt="" className="absolute top-[-15%] left-[0%] z-0 " height={300} width={300}/>
        <div className="container p-4 mx-auto font-peralta shadow-lg h-full w-full pt-20 z-40">
          <div className="text-[2.5rem] text-right">PROGETTI</div>
          <div className="text-left">github:</div>
          <a href="https://github.com/francesconicolo" className="text-[2rem] underline">francesconicolo</a>
          <Carousel/>
        </div>
      </div>  

      <div className={
          "py-8 w-full relative " +
          (theme === "light" ? "bg-Lantiquewhite text-black " : " bg-Dantiflashwhite text-black ")
        } >
        <div className="container p-4 mx-auto font-peralta shadow-lg h-full w-full pt-20 z-40">
          <div className="text-[2.5rem]">CONTATTI</div>
         <div className="flex items-center justify-between">
          <Image src={gmail} alt="logo gmail"/>
          <a href="mailto:nicolo.francesco.fn@gmail.com" className="text-[1rem] underline">nicolo.francesco.fn@gmail.com</a>
         </div>
          <div className="text-left pt-10">Social:</div>
          <div className="flex items-center content-center justify-around">
          <Image src={facebook} alt="logo facebook"/>
          <Image src={instagram} alt="logo instagram"/>
          </div>
        </div>
      </div>                 
      <Footer/>
    </div>
  );
}
