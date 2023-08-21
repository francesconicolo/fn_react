import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import foto1 from "../../public/images/carosello/progetto1mobile.png";
import foto2 from "../../public/images/carosello/progetto2.png";
export default function Carousel() {
  return (
    <div className="">
      <div className="lg:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation
          className="h-[900px] mt-6 mx-auto w-full "
        >
          <SwiperSlide className="h-full w-full">
            <a href="https://pompeoteam.it/">
              <Image
                src={foto2}
                className="object-cover h-full w-full"
                alt="progetto realizzato da Francesco Nicolo"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://submissionfc.it/">
              <Image
                src={foto1}
                className="object-cover h-full w-full"
                alt="progetto realizzato da Francesco Nicolo"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="lg:flex justify-evenly hidden">
        <a href="https://pompeoteam.it/">
          <Image src={foto2} alt="progetto realizzato da Francesco Nicolo" />
        </a>
        <a href="https://submissionfc.it/">
          <Image src={foto1} alt="progetto realizzato da Francesco Nicolo" />
        </a>
      </div>
    </div>
  );
}
